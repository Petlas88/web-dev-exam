import styled from "styled-components";

export const SectionText = styled.h1`
    position: relative;
    display: flex;
    justify-content: ${props => (props.right ? "flex-end" : "flex-start")};
    text-align: ${props => (props.center ? "center" : "left")};
    width: 100%;
    color: ${props => (props.white ? "#FFFFFF" : " #0070D1")};
    font-size: 1.8rem;
    font-family: "SST Light", Arial;
    z-index: 1000;
    padding-top: 50px;
    padding-bottom: 30px;
`