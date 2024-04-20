var original_location = []

import React, { Component } from "react";

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function request_location() { //once you have permissions you can just call this for the hints
    navigator.geolocation.getCurrentPosition(success);
}

function success(position) {
    original_location = [position.coords.latitude, position.coords.longitude]
}
function error() {
    console.log("Unable to retrieve your location");
}

export default class GeoLocation extends Component { //
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.permissions.query({ name: "geolocation" }).then(
                function (result) {
                    if (result.state === "granted")
                        navigator.geolocation.getCurrentPosition(success); //prompts and 
                    else if (result.state === "prompt")
                        navigator.geolocation.getCurrentPosition(success, error, options);
                    else if (result.state === "denied") {
                        console.log("please allow location permissions to play the game")
                    }
                });
        } 
        else
            alert("Sorry Not available!");
    }
}

