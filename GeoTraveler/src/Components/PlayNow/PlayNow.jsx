import "./PlayNow.css";
import { React, useEffect, useState } from "react";
export default function PlayNow() {
  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState();
  return (
    <div className="playnow">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <div className="map"></div>
        <div
          style={{
            width: "60%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="pic"></div>
          <div className="play-buttons">
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <h3>Think you reached the destination?</h3>
                <button className="guess">I'm here</button>
              </div>
              <div style={{ textAlign: "center" }}>
                <h3>Can't figure out?</h3>
                <button className="hint">I need a hint :(</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
