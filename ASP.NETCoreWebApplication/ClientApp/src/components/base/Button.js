import styled from "styled-components"

export const Button = styled.button`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props => (props.outline ? "12px 40px 12px 40px" : "12px 40px 14px 40px")};
    border-radius: 15px;
    border: ${props => (props.outline ? "2px solid #0070D1" : props.disabled ? "2px solid #C4C4C4" : "none")};
    background-color: ${props => (props.outline ? "none" : props.disabled ? "none" : "#0070D1")};
    color: ${props => (props.outline ? "#0070D1" : props.disabled ? "#c4c4c4" : "#FFFFFF")};
    font-weight: 500;
    font-size: 1rem;
    min-width: 180px;
    height: 48px;
    cursor: ${props => (props.disabled ? "arrow" : "pointer")};
    line-height: 0;
    transition: .2s ease;
    &:hover {
        background-color: #0070D1;
        color: #FFFFFF;
        transition: .2s ease;
    }
    
`