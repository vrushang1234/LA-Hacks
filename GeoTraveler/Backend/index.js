const express = require("express");
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
