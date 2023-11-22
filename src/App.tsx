import React, {useState} from "react";
import styled from "styled-components";
import OffCanvasMenu from "./components/OffCanvasMenu/OffCanvasMenu";
import PosterImg from "./poster.png";
import NavBar from "./components/NavBar/NavBar";

// @ts-ignore
import BgVideo from "./bg.mp4";

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopSpacer = styled.div`
    display: flex;
    min-height: calc(100vh - 376px);
    align-items: center;
`;

const Hero = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 60px;
`;

const HeadingFirstLine = styled.span`
    display: flex;
    font-family: 'Unbounded', sans-serif;
    font-weight: 200;
    font-size: 72px;
    line-height: 72px;
    color: #fff;

    @media only screen and (max-width: 968px) {
        font-weight: 200;
        font-size: 42px;
        line-height: 42px;
        color: #fff;
    }
`;
const HeadingMainLine = styled.span`
    display: flex;
    font-family: 'Unbounded', sans-serif;
    font-weight: 500;
    font-size: 72px;
    line-height: 72px;
    color: #fff;
    margin-left: 80px;

    @media only screen and (max-width: 968px) {
        font-size: 42px;
        line-height: 42px;
        color: #fff;
        margin-left: 40px;
    }
`;

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <LayoutContainer>
          <video autoPlay loop muted poster={PosterImg} className="bg-vid">
              <source src={BgVideo} type="video/mp4"/>
          </video>
          <NavBar onMenuClick={() => setMenuOpen(!menuOpen)} />
          <OffCanvasMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
          <TopSpacer>

          </TopSpacer>
          <Hero>
              <HeadingFirstLine>What Tasks</HeadingFirstLine>
              <HeadingMainLine>Should We Complete?</HeadingMainLine>
          </Hero>
      </LayoutContainer>
  );
};

export default App;
