const express = require("zexpress");
const cors = require("cors");
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.post("/", async (req, res) => {
  const data = req.body;
  console.log(data);
  const status = await fetch(
    "https://us-west2-la-hecks.cloudfunctions.net/login",
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  ).then((res) => res.json());
  console.log(status);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

app.post("/image", async (req, res) => {
  const body = req.body;
  const size = body.size;
  const coord = body.coord;
  const fov = body.fov;
  const heading = body.heading;
  const pitch = body.pitch;
  const url = `https://maps.googleapis.com/maps/streetview?size=${size[0]}x${size[1]}&location=${coord[0]},${coord[1]}&fov=${fov}&heading=${heading}&pitch=${pitch}&key=YOUR_API_KEY_HERE`;

  try {
    const response = await fetch(url);
    const image = await response.buffer(); // Get image data as Buffer
    res.send(image); // Send the image data back to the client
  } catch (error) {
    console.error("Error fetching street view:", error);
    res.status(500).send("Error fetching street view");
  }
});
