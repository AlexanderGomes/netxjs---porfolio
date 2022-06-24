import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:510-630-5188">(510) 630-5188</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:gomes.alexsander.hamir@outlook.com">
gomes.alexsander.hamir@outlook.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target={'_blank'} href="https://github.com/AlexanderGomes">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target={'_blank'} href="https://www.linkedin.com/in/alexsander-hamir-79ab051a4/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target={'_blank'} href="https://www.instagram.com/alexsandergomess07/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
