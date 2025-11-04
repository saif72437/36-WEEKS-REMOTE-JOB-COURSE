const express = require("express");
const app = express();

const ALL_VIDEOS = [
  {
    id: 123,
    title: "India VS Autralia",
  },
  {
    id: 100,
    title: "Code with harry python",
  },
];

const CITIES_WEATHER = [
  {
    cityName: "isb",
    temp: 45,
  },
  {
    cityName: "karachi",
    temp: 100,
  },
  {
    cityName: "mdn",
    temp: -123,
  },
];

app.use(express.json());

app.post("/user/login", (req, res) => {
  // const data = req.body
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({
      mssg: "Email and Password are required",
    });
  }

  console.log(email, password);

  res.status(404).json({
    mssg: "I got the data",
  });
});

app.get("/user/profile", (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    res.status(404).send("i dont get the token");
  }

  console.log(token);

  res.status(200).json({
    mssg: "I got the token here is your profile page",
  });
});

app.get("/video/:id", (req, res) => {
  const videoId = req.params.id;

  if (!videoId) {
    res.status(404).json({
      mssg: "video id is required",
    });
  }

  console.log(videoId);

  ALL_VIDEOS.forEach((singleVideo) => {
    if (singleVideo.id == videoId) {
      return res.status(404).json({
        singleVideo,
      });
    }
  });

  res.status(404).json({
    mssg: "we dont have any video related to the provided id",
  });
});

app.get("/api/weather", (req, res) => {
  const cityName = req.query.city;

  if (!cityName) {
    res.status(404).json({
      mssg: "city name is required",
    });
  }

  CITIES_WEATHER.forEach((singleCity) => {
    if (singleCity.cityName == cityName) {
      res.status(200).json({
        singleCity,
      });
    }
  });

   res.status(404).json({
            mssg: "We dont have this city record here"
        })

});

app.listen(3000, () => {
  console.log("APP IS LISTNING ON PORT 3000");
});
