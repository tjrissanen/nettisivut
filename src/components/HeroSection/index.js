import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';
import Typewriter from "typewriter-effect"

var typerstring1 = "REDUCE";
var typerstring2 = "<br>REUSE";
var typerstring3 = "<br>REBOX";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroContent>
      <HeroH1>
      <Typewriter
        onInit={(typewriter) => {
        typewriter
          .typeString("REDUCE")
          .pauseFor(500)
          .deleteChars(4)
          .typeString("USE")
          .pauseFor(500)
          .deleteChars(3)
          .typeString("BOX")
          .pauseFor(1000)
          .start();
        }}
        options={{
          loop: true,
          delay: 100,
        }}
      />
      </HeroH1>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
