import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.74)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} 
            alt={title} 
            className="w-16 h-16 object-contain"
            />

            <h3 className='text-white text-[20px] font-bold text-center'>{title}
            </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>a little about me 👾</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center"
      > 
        I am a software engineer and quantitative researcher with a passion for creating innovative solutions to complex problems. I have a strong background in computer science and software development, with experience in a wide range of technologies and programming languages. I am always looking for new challenges and opportunities to learn and grow as a developer. I also love hanging out with friends, rock climbing, and leetcoding or doing competitive math problems in my free time!
      </motion.p>

      <div className="flex justify-center mt-8">
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeIn("", "", 0.2, 1)}
          className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
        >
          View My Resume
        </motion.a>
      </div>

      <div className="mt-20 flex flex-wrap justify-center items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
