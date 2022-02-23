import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Lyzz! 
      </SectionTitle>
      <SectionText>
      I'm a coding hippie. Two things fascinate me: people and coding. I am constantly curious about our inter-connectivity and a tireless advocate for inclusiveness and diversity. During the pandemic, I enrolled in a Software Development Bootcamp and learned that I am obsessed with learning all things code and that test driven development is my jam. 

My enthusiasm for people and coding transpires well in Agile environments. I am always willing to help a fellow developer with questions and advice and I love sparking joy in teams. 

As a previous educator for adult learners, I am an avid believer that we are all life long learners. I transition quickly into any team because I am ready to work, but also ready to learn from my team and mentors.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
