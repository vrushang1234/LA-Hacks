import { generateRandomPoint, distanceToLocation, getOffsetRadius, generateOffsetPoint } from './generate_point.js'
import { createMap, createCircle } from './generate_map.js'
import { fetchStreetView } from './generate_image.js'
import { instanceData, userData } from './save.js'

function initalize(size, search_radius = 3000) { //create empty json daily log
    current_date = new Date()
    temp_date = userData.date_played
    temp_date.setDate(temp_date.getDate()+1)

    if(!userData.date_played || current_date >= temp_date) {
        instanceData.date_played = current_date
        instanceData.guesses = 0
        //grab startlocation in user prompt before everything else, set instanceData.start_location
        instanceData.destination = generateRandomPoint(start_location, search_radius)
        instanceData.total_distance = distanceToLocation(start_location, destination)
        instanceData.image_url = fetchStreetView(destination, size, 90, Math.random() * 271)
        instanceData.map = createMap(start_location) //create map
        createMarker(map, start_location) //create marker for start location
    }
    else
        console.log("play again tomorrow")
}

//call to confirm location/update previous data
function check_correct(location) {
    current_distance = distanceToLocation(location, destination)
    correct = False
    guesses += 1

    if(distance <= 25) //within 25ft, win
        correct = True
    else { //hint creation of circle
        createMarker(map, location) 
        offset_radius = getOffsetRadius(current_distance, maxguesses, guesses)
        createCircle(generateOffsetPoint(destination, offset_radius), offset_radius)
    }
    return correct
}

//send to cloud function to update backend for user
function add_points() {
    points = instanceData.maxguesses-instanceData.guesses
    return (points) >= 0 ? points : 0
}