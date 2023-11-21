import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ItemList from "../ItemList/ItemList";

const MenuContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? "0" : "-100%")};
    height: 100%;
    width: 35%;
    background-color: #f5f5f5;
    box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease-in-out;
    z-index: 10;

    @media only screen and (max-width: 968px) {
        width: 100%;
    }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9;
    display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const CloseButton = styled.div`
    position: absolute;
    top: 30px;
    right: 20px;
    cursor: pointer;
    font-family: 'Manrope', sans-serif;
    font-size: 30px;
`;

const MenuContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 80px;
`;

const OffCanvasMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();

    const handleOverlayClick = () => {
        onClose();
    };

    return (
        <>
            <Overlay isOpen={isOpen} onClick={handleOverlayClick} />
            <MenuContainer isOpen={isOpen}>
                <CloseButton onClick={onClose}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6865 34.814L35.3139 12.1865" stroke="black" stroke-width="2"></path>
                        <path d="M12.6865 12.186L35.3139 34.8135" stroke="black" stroke-width="2"></path>
                    </svg>
                </CloseButton>
                {/* Add your menu content here */}
                <MenuContentContainer>
                    <ItemList/>
                </MenuContentContainer>
            </MenuContainer>
        </>
    );
};

export default OffCanvasMenu;