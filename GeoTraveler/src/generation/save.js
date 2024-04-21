export const apiData = {
    api_key: 'insert-key',
    signature: 'insert-signature'
}

export const instanceData = {
    start_location: [], //start
    destination: null, //generated point
    total_distance: null, //total distance 
    image_url: null, //set by streetview function
    
    guesses: 0,
    maxguesses: 5,

    map: null,
    current_circle: null
}

export const userData = {
    date_played: null,
    points: 0
}