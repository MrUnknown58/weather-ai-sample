"use client";
import Lottie from "lottie-react";
import weatherAnimation from "./weatherAnimation.json";
import hazeAnimation from "./hazeAnimation.json";
import rainAnimation from "./rainAnimation.json";
import sunnyAnimation from "./sunnyAnimation.json";
import thunderAnimation from "./thunderAnimation.json";
const LottieFiles = ({ animation }) => {
  // console.log(animation);
  return <Lottie animationData={animation} loop={true} />;
};

export default LottieFiles;
