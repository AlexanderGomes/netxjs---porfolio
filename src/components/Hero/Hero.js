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
       I'm a Full-stack developer, always keeping myself updated and improving my skills, give a quick look on my projects.  
      </SectionText>
      <a href='tel:510-630-5188'>
      <Button onClick={props.handleClick}>Contact me</Button>
      </a>
    </LeftSection>
  </Section>
</>
);

export default Hero;