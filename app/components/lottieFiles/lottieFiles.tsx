"use client";
import Lottie from "lottie-react";
import weatherAnimation from "./weatherAnimation.json";
import hazeAnimation from "./hazeAnimation.json";
import rainAnimation from "./rainAnimation.json";
import sunnyAnimation from "./sunnyAnimation.json";
import thunderAnimation from "./thunderAnimation.json";
interface LottieFilesProps {
  animation: any;
}
const LottieFiles: React.FC<LottieFilesProps> = ({ animation }) => {
  // console.log(animation);
  return <Lottie animationData={animation} loop={true} />;
};

export default LottieFiles;
