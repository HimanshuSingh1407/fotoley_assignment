import React, { useState, useEffect } from 'react';
import { Button, Container, Grid } from '@material-ui/core';

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let slideshowTimer;

    if (isPlaying) {
      slideshowTimer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
    }

    return () => {
      clearInterval(slideshowTimer);
    };
  }, [isPlaying, slides.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <Container maxWidth="md" >
      <div className="slideshow-container">
        <img className="slide" src={slides[currentIndex].image} alt="Slide"/>
        <div className="description">{slides[currentIndex].description}</div>
      </div>

      <Grid container justify="center" spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={goToPreviousSlide}>
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={togglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={goToNextSlide}>
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Slideshow;
