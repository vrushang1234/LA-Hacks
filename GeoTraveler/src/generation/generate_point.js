//all measurements and math is done in meters

//call ONCE to get destination point
export function generateRandomPoint(coordinates, search_distance) {
  //conversion radius in meters to degrees /111139, and then choose random ratio to shorten radius (to go along circle)
  var lat = (coordinates.lat * Math.PI) / 180;
  var lon = (coordinates.long * Math.PI) / 180;

  var r = (search_distance / 111319) * Math.sqrt(Math.random());
  var theta = Math.random() * 2 * Math.PI; //random degree in radians

  var deltlat = r / (111320 * Math.cos(lat));
  var deltlon = r / 110540;

  return [
    lat + (deltlat * Math.sin(theta) * 180) / Math.PI,
    lon + (deltlon * Math.cos(theta) * 180) / Math.PI,
  ];
}

//formula:
//1. grab current distance from destination. shrink it by number of guesses ratio (maxguesses-guess)/maxguesses
//2. use the above as the radius.
//3. generate a number from [0-radius]. use this number to offset from the destination in any direction and get a random point
//this way, circles are always rewarded based on how much you have left, with it narrowing based on your guesses
//should gurantee less overlap, because of the randomized angle
export function generateOffsetPoint(destination, radius) {
  //radius comes from getOffsetRadius
  var offset = Math.random() + radius; //offset spin off destination

  var angle = Math.random() * Math.PI * 2; //radians
  centerlat = (destination[0] * Math.PI) / 180;
  centerlon = (destination[1] * Math.PI) / 180;

  deltalat = (offset * Math.cos(angle)) / 111.111;
  deltalon = offset * Math.sin(angle)(111.111 * Math.cos(centerlat));

  return [centerlat + deltalat, centerlon + deltalon];
}

//haversine formula
export function distanceToLocation(from, to) {
  var R = 6371 * 1000; //radius in meters
  var lat1 = (from[0] * Math.PI) / 180;
  var lat2 = (to[0] * Math.PI) / 180;
  var lat = (to[0] - from[0]) * (Math.PI / 180);
  var lon = (to[1] - from[1]) * (Math.PI / 180);
  var a =
    Math.sin(lat / 2) * Math.sin(lat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(lon / 2) * Math.sin(lon / 2);
  var d = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return d; //distance in meters
}
