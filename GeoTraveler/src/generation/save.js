const fs = require('fs'); // Import the File System module
const ini = require('ini'); // Import the ini module
const configData = fs.readFileSync('config.ini', 'utf-8');
const config = ini.parse(configData);

export const apiData = {
    api_key: config.StreetView.api_key,
    signature: config.StreetView.signature
}

export const instanceData = {
    start_location: [], //star
    destination: null, //generated point
    total_distance: null, //total distance 
    image_url: null, //set by streetview function
    
    guesses: 0,
    maxguesses: config.Settings.maxGuesses,

    map: null,
    current_circle: null
}

export const userData = {
    date_played: null,
    points: 0
}