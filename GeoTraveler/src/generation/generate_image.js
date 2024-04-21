export function fetchStreetView(coord, size, fov, heading, pitch = 0) {
  fetch("http://localhost:3001/image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      coord: coord,
      size: size,
      fov: fov,
      heading: heading,
      pitch: pitch,
    }),
  }).then((res) => res.json());
}
