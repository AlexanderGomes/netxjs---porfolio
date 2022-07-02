import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
       I'm a self-taught full-stack developer, always keeping myself updated and improving my skills, bring your idea to life, contact me !  
      </SectionText>
      <a href='tel:510-630-5188'>
      <Button onClick={props.handleClick}>Contact me</Button>
      </a>
    </LeftSection>
  </Section>
</>
);

export default Hero;