import { generateRandomPoint, distanceToLocation, getOffsetRadius, generateOffsetPoint } from './generate_point.js'
import { createMap, createCircle } from './generate_map.js'
import { fetchStreetView } from './generate_image.js'
import { instanceData, userData } from './save.js'

function initalize(size, search_radius = 3000) { //create empty json daily log
    current_date = new Date()
    temp_date = userData.date_played
    temp_date.setDate(temp_date.getDate()+1)

    if(!userData.date_played || current_date >= temp_date) {
        userData.date_played = current_date
        instanceData.guesses = 0
        //grab startlocation in user prompt before everything else, set instanceData.start_location
        instanceData.destination = generateRandomPoint(instanceData.start_location, search_radius)
        instanceData.total_distance = distanceToLocation(instanceData.start_location, instanceData.destination)
        instanceData.image_url = fetchStreetView(instanceData.destination, size, 90, Math.random() * 271)
        instanceData.map = createMap(instanceData.start_location) //create map
        createMarker(instanceData.start_location) //create marker for start location
    }
    else
        console.log("play again tomorrow")
}

//call to confirm location/update previous data
function check_correct(location) {
    var current_distance = distanceToLocation(location, instanceData.destination)
    correct = False
    guesses += 1

    if(distance <= 25) //within 25m, win
        correct = True
    else { //hint creation of circle
        createMarker(location) 
        var offset_radius = getOffsetRadius(current_distance, instanceData.maxguesses, instanceData.guesses)
        createCircle(generateOffsetPoint(instanceData.destination, offset_radius), offset_radius)
    }
    return correct
}

//send to cloud function to update backend for user
function add_points() {
    points = instanceData.maxguesses-instanceData.guesses
    return (points) >= 0 ? points+3 : 3
}

//each day, take away more points day 1 lose 1, day 2 lose 2, day 3 lose 3
function point_decay() { 
    var current_date = new Date()
    return Math.floor((current_date.getTime() - date_played.getTime()) / 1000*60*60*24) //days passed, take off that many points each day
}

function buy_sticker(url, points) {
    if(userData.points >= points) {
        //subtract 5 from it
        
    }
    //download to local
}