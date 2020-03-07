import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import Transitions from '@components/Transitions';

import media from '@styles/media';
import { IColorThemeProps, IColorTheme } from '@types';
import mediaqueries from '@styles/media';

import TeamSpirit from '../../assets/team_spirit.svg';
import { useThemeUI } from 'theme-ui';

const HomeHero: React.FC = () => {
  const themeContext = useThemeUI();
  const theme: IColorTheme = themeContext.theme as any;
  return (
    <Section>
      <HeroContainer>
        <ContentContainer>
          <Transitions.CSS.FadeIn>
            <MainText>
              UOSC, empowering open-source projects and competitive programming
              at University of Ottawa.
            </MainText>
            <SubText>
              We will help you take your software development skills to the next
              level, and land that dream internship.
            </SubText>
            <CalltoAction onClick={() => handleNavigatingToContact()}>
              <span className="cta-desktop">
                Press <KeyChar className="key-char">C</KeyChar> anywhere to
                contact us
              </span>
              <span className="cta-mobile">Get In Touch <CalltoActionArrow color={theme.colors.primary} /></span>
            </CalltoAction>
          </Transitions.CSS.FadeIn>
        </ContentContainer>
        <HeroImageContainer>
          <HeroImage src={TeamSpirit} alt="UOSC Team Spirit" />
        </HeroImageContainer>
      </HeroContainer>
    </Section>
  );
};

export default HomeHero;

const handleNavigatingToContact = () => {
  window.location.replace('mailto:uosoftwareclub@gmail.com');
}

const MainText = styled.p<IColorThemeProps>`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(p) => p.theme.colors.primary};
  line-height: 1.3;
  margin-bottom: 2rem;
`;

const SubText = styled.p<IColorThemeProps>`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(p) => p.theme.colors.grey};
  line-height: 1.3;
  margin-bottom: 5rem;
`;

const CalltoAction = styled.button<IColorThemeProps>`
  font-weight: 700;
  .cta-desktop {
    color: ${(p) => p.theme.colors.grey};
  }
  .cta-mobile {
    display: none;
    color: ${(p) => p.theme.colors.primary};
  }
  &:hover {
    .cta-desktop {
      color: ${(p) => p.theme.colors.primary};
      transition: all 0.25s ease 0s;
      .key-char {
        background: ${(p) => p.theme.colors.primary};
      }
    }
  }
  ${media.phablet`
    .cta-desktop {
      display: none;
    }
    .cta-mobile {
      display: block;
    }
  `};
`;

const KeyChar = styled.span<IColorThemeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.background};
  font-size: 13px;
  width: 16px;
  height: 18px;
  margin: 0px 1px;
  background: ${(p) => p.theme.colors.grey};
  border-radius: 2.5px;
  transition: all 0.25s ease;
`;

const HeroContainer = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  padding: 110px 0;
  ${media.phablet`
    padding: 55px 0;
  `};
`;

const ContentContainer = styled.div`
  position: relative;
  width: 40%;
  margin-right: 50px;
  ${media.phablet`
    width: 100%;
    margin-right: 0;
  `};
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 45%;

  ${mediaqueries.tablet`
    display: none;
  `}
`;

const HeroImage = styled.img`
  max-width: 100%;
`;

const CalltoActionArrow = ({color = 'white'}) => (
  <svg width="35" height="7" viewBox="0 0 35 7" version="1.1">
    <g fill="none">
      <g>
        <path
          d="M 3.5 0L 6.53109 5.25L 0.468911 5.25L 3.5 0Z"
          transform="matrix(0 1 -1 0 35 0)"
          fill={color}
        ></path>
        <line
          y1="-0.5"
          x2="30"
          y2="-0.5"
          transform="translate(0 4)"
          stroke={color}
        ></line>
      </g>
    </g>
  </svg>
);
