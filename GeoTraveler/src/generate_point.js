//cache this for a user for the day, refresh after a day
function generateRandomPoint(coordinates, meter = 3000) { //reasonable 3000 meters / 2 miles for default
    //conversion radius to degrees /111139, and then choose random ratio to shorten radius (to go along circle)
    r = meter/111139 * sqrt(Math.random());
    theta = Math.random() * 2 * PI //choose random degree to affect the coordinates
    return {'lat': coordinates[0] + r * Math.cos(theta), 'lng': coordinates[1] + r * Math.sin(theta)};
}

function hint(original_location) {
    current = request_location()
    //hot if you are within 500ft
    //if you are less than half the distance away, you're warm
    //warmer, 
    //if you're more htan half, you're cold
    //quarter away, hot
    //
}

//reveal after a certain number of guesses
//reveal possible route after too many guesses
function distanceToLocation(original_location, current_location) {
    d = sqrt(Math.pow(current_location[0]-original_location[0], 2) + Math.pow(current_location[1]-original_location[1], 2) )
}
