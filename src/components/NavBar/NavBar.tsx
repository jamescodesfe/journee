import React from "react";
import styled from "styled-components";
import Logo from "./logo.png";

const Container = styled.div`
    display: flex;
    height: 80px;
    padding: 3rem 4rem;
`;

const AddTaskMenuContainer = styled.div`
  margin-left: auto;
    padding-top: 8px;
`;
const AddTaskMenuTxt = styled.span`
  text-align: right;
    color: #fff;
    font-size: 16px;
    font-family: 'Unbounded', sans-serif;
    font-weight: 300;
    margin-top: 5px;
    cursor: pointer;
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
    margin-left: 20px;
    color: #fff;
`;

interface NavBarProps {
    onMenuClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onMenuClick }) => {
    return (
        <Container>
            <img src={Logo} alt="Journee" className="logo" />
            <AddTaskMenuContainer>
                <AddTaskMenuTxt onClick={onMenuClick}>
                    Add A Task
                </AddTaskMenuTxt>
            </AddTaskMenuContainer>
            <HamburgerIcon onClick={onMenuClick}>
                {/* Add your hamburger menu icon SVG here */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 20H40" stroke="black" strokeWidth="2"></path>
                    <path d="M8 28H40" stroke="black" strokeWidth="2"></path>
                </svg>
            </HamburgerIcon>
        </Container>
    );
};

export default NavBar;