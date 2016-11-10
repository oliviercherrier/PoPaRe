import { Injectable, Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import {AuthHttp} from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { BackgroundGeolocation } from 'ionic-native';
import { Platform } from 'ionic-angular';

@Injectable()
export class GeolocationService {
    // BackgroundGeolocation is highly configurable. See platform specific configuration options
    geolocationConfig  =  {
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 30,
        debug: false, //  enable this hear sounds for background-geolocation life-cycle.
        stopOnTerminate: false // enable this to clear background location settings when the app terminates
    };

    constructor(platform: Platform){
        platform.ready().then(() => {
            // IMPORTANT: BackgroundGeolocation must be called within app.ts and or before Geolocation. Otherwise the platform will not ask you for background tracking permission.

            BackgroundGeolocation.configure(this.geolocationConfig).then((location) => {
                console.log('[js] BackgroundGeolocation configure callback:  ' + location.latitude + ',' + location.longitude);
                // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
                // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
                // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
                // BackgroundGeolocation.finish(); // FOR IOS ONLY

            }).catch((err) => console.log("BackgroundGeolocation error ", err));
        });

    }

    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
    public start(){
        BackgroundGeolocation.start().then(() => {
                console.log('[js] BackgroundGeolocation started callback');
                // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
                // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
                // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
                // BackgroundGeolocation.finish(); // FOR IOS ONLY

            }).catch((err) => console.log("BackgroundGeolocation:start error ", err));
    }

    public stop(){
        BackgroundGeolocation.stop().then(() => {
                console.log("Background geolocation stoped");
                // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
                // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
                // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
                // BackgroundGeolocation.finish(); // FOR IOS ONLY

            }).catch((err) => console.log("BackgroundGeolocation:stop error ", err));;
    }

    public flushLocationsInConsole(){

    }
 
}