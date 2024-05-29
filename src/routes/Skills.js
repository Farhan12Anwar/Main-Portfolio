import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
import Skills from '../components/Skills';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="MY SKILLS." />
      <Skills />
      <Footer />
    </div>
  )
}

export default Project
