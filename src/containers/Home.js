import React, { Component } from "react";

import { CenteredHeader } from "./App.js";

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>
          Hi! I'm karim, Mission-driven Full-Stack Software Engineer, in other words, a creative
          technologist. based in Helsinki, Finland.
        </CenteredHeader>
        <p>
          Currently build software for CSIT Finland OY at Helsinki. I am passionate about learning new stuffs and developing products/tools that could create impact on society. 
          Information Retrieval, Open source projects attracts me a lot.I'm Believer of ‘Roll up your sleeves and get it done.
        </p>
        <p>
          I am an Engineer meets Designer. With a focus on large scale, high
          impact, Open Source projects.I work almost exclusively in the
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
