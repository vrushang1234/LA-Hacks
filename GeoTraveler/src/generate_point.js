var destination = generateRandomPoint(coordinates) //generated point
var estimated_total_distance = distanceToLocation(original, destination) //total distance 

var previous_guess = None //originally no guesses
var previous_distance = None

//all measurements and math is done in meters

function generateRandomPoint(coordinates, search_distance = 3000) {
    //conversion radius in meters to degrees /111139, and then choose random ratio to shorten radius (to go along circle)
    r = search_distance/111,319 * sqrt(Math.random())
    theta = Math.random() * 2 * PI //choose random degree to affect the coordinates
    return [coordinates[0] + r * Math.cos(theta), coordinates[1] + r * Math.sin(theta)]
}

function check(location) {
    distance = distanceToLocation(original, location)
    
    previous_point = location
    previous_distance = distance
    //what if you over shoot? doesn't matter to us (for now)
}

function hint() {
    current = request_location()
    current_distance = distanceToLocation(current, destination)

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

//haversine formula
function distanceToLocation(from, to) {
    var R = 6371 * 1000; //radius in meters
    var lat1 = from[0] * Math.PI/180
    var lat2 = to[0] * Math.PI/180
    var lat = (to[0] - from[0]) * (Math.PI/180)
    var lon = (to[1] - from[1]) * (Math.PI/180)
    var a = Math.sin(lat/2) * Math.sin(lat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(lon/2) * Math.sin(lon/2) 
    var d = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return d; //distance in meters
}
