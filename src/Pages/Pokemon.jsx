import React from "react";
import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";
import axios from "axios";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Pokemon() {
  const [videoList, setVideoList] = useState([]);
  const [swipCount, setSwipCount] = useState(0);

  const [itemCount, setItemCunt] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const itemNum = 9;
  var array = videoList;
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        for (let i = itemCount; i <= itemCount + itemNum; i++) {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
          console.log(String(i) + " : " + res.data.species.name);
          //console.log(res.data.species.name);
          array.push(res.data);
        }
        setVideoList(array);
        setItemCunt(itemCount + itemNum);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [itemCount === swipCount ? true : false]);

  const Swiped = (direction, index, name, url) => {
    setSwipCount((prevValue) => prevValue + 1);
    if (direction === "right") {
    }
    if (direction === "left") {
    }
  };

  return (
    <>
      <div className="body">
        <div className="body_container">
          {isLoading ? (
            <>
              <Card sx={{ minWidth: 500, minHeight: 300, boxShadow: 2 }}>
                <CardMedia
                  component="img"
                  alt="loading"
                  image={
                    "http://img.f.hatena.ne.jp/images/fotolife/y/yskm39/20150930/20150930040704.gif"
                  }
                />
              </Card>
            </>
          ) : (
            <>
              {/* <p>
                {swipCount}==={itemCount}?
                {String(itemCount === swipCount ? true : false)}
              </p> */}
              {videoList.map((data, i) => (
                <TinderCard
                  className="swipe"
                  key={i}
                  preventSwipe={["up", "down"]}
                  onSwipe={(dir) =>
                    Swiped(dir, i, data.title, data.description)
                  }
                >
                  <Card sx={{ minWidth: 500, minHeight: 300, boxShadow: 2 }}>
                    <CardMedia
                      component="img"
                      alt={data.title}
                      image={data.sprites.back_default}
                    />
                  </Card>
                </TinderCard>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Pokemon;
