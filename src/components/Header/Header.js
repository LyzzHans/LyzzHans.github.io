import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
    <Link href="/">
    <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
      <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
    </a>
    </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tech Stack</NavLink>
        </Link>
      </li>
        <a href="https://drive.google.com/file/d/1HqLMU0TO3ysJAYiouhTyu1MYN36JcGnk/view?usp=sharing">
          <NavLink>Resume</NavLink>
        </a>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/LyzzHans">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/lyzzhans/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
