//data per user per play
var start_location = [] //star
var destination = null //generated point
var estimated_total_distance = null //total distance 
var image_url = null //set by streetview function

//set by check
var previous_guess = null //originally no guesses
var previous_distance = null

function initalize(size, search_radius = 3000) {
    destination = generateRandomPoint(start_location, search_radius)
    estimated_total_distance = distanceToLocation(original, destination)
    image_url = fetchStreetView(destination, size, 90, Math.random() * 271) // cache this
}

//call to confirm location/update previous data
function check_correct(location) {
    distance = distanceToLocation(location, destination)

    //update previous cache 
    previous_point = location
    previous_distance = distance

    if(distance <= 25) //within 25ft, win
        return True
    else
        return False //can call hints
}

//call to get hint information
function hint() {
    var current = request_location()
    var current_distance = distanceToLocation(current, destination)

    if(previous_distance)
        if(current_distance <= previous_distance)
            console.log('hotter')
        else
            console.log('colder')
    else
        if(current_distance <= estimated_total_distance/2)
            console.log('halfway there, warmer')
        else
            console.log('cold')
}
