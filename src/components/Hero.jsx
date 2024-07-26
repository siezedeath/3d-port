import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const words = [
    'I like learning new mathematical concepts.',
    'I like to develop AI/ML models.',
    'I like developing web applications.',
    'I like analyzing data sets.',
    'I like to solve problems.',
  ];
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#dd8871]">Alfayed</span>
          </h1>
          <p className="text-white text-[16px] mt-1">(you can call me <span className="text-[#dd8871]">Alfy</span>)</p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              words={words}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={600}
            />
          </p>
        </div>
      </div>
      
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
            animate = {{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />

          </div>

        </a>

      </div>
    </section>
  );
}

export default Hero;

