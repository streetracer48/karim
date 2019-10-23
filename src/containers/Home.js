import React, { Component } from "react";

import { CenteredHeader } from "./App.js";

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>
          Hi! I'm karim, software developer, in other words, a creative
          technologist based in Finland.
        </CenteredHeader>
        <p>
          before moving Finland I've build software for the Spring Rain IT
          LTD(http://www.springrainit.com/) at the Dhaka Bangladesh.(where I
          grow) I loved to build stuff through code , I'm passionate about
          problem sloving and technology.
        </p>
        <p>
          I am an Engineer meets Designer. With a focus on large scale, high
          impact, Open Source projects. I've spent most of my life focused on
          explored JS for the last few years. I work almost exclusively in the
          open, and aim to make almost all of my contributions industry-wide
          impact.
        </p>
        <p>
          ​Outside of code, I like to create in other ways. From photography to
          travel, long driving , I'm always trying new ways of expressing
          myself. I also like to meditate, talk to strangers, and run lifestyle
          experiments.
        </p>
      </div>
    );
  }
}

export default Home;
