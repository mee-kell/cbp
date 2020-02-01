import * as React from "react";
import { motion } from "framer-motion";

const height = 460;
const padding = 20;
const size = 360; //width

function Slide1() {
  return (
    <div>
      <h3>Slide 1</h3>
      <p>Audio 1</p>
    </div>
  )
}

function Slide2() {
  return (
    <div>
      <h3>Slide 2</h3>
      <p>Audio 2</p>
    </div>
  )
}

function Slide3() {
  return (
    <div>
      <h3>Slide 3</h3>
      <p>Audio 3</p>
    </div>
  )
}

function Slide4() {
  return (
    <div>
      <h3>Slide 4</h3>
      <p>Audio 4</p>
    </div>
  )
}

function Slide5() {
  return (
    <div>
      <h3>Slide 5</h3>
      <p>Audio 5</p>
    </div>
  )
}

const items = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />, <Slide5 />];

function SwipeScreen() {
  return (
    <motion.div
      style={{
        width: 400,
        height: 500,
        borderRadius: 30,
        overflow: "hidden",
        position: "relative",
        transform: "translateZ(0)",
        cursor: "grab"
      }}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        style={{
          width: 2250,
          height: 500
        }}
        drag="x"
        dragConstraints={{
          left: -1810,
          right: 0
        }}
      >
        {items.map((currElement, index) => {
          return (
            <motion.div
              style={{
                width: size,
                height: height,
                borderRadius: 20,
                backgroundColor: "#42c8f5",
                float: "left",
                top: (height + padding) * index,
                marginRight: 50,
                padding: padding
              }}
              key={index}
            >
              {currElement}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default SwipeScreen