import React from "react";
import Slideshow from "./Components/Slideshow";

const App = () => {
  const slides = [
    {
      image:
        "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
      description: "himanshu singh",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      description: "hii himanshu",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg",
      description: "hello imran",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg",
      description: "hii imran",
    },
  ];

  return (
    <div>
      <h1>Image Slideshow</h1>
      <Slideshow slides={slides} />;
    </div>
  );
};

export default App;
