import styled from 'styled-components';

import background from '../assets/bg.jpg';

import { Link } from 'react-router-dom';

export const colors = {
    primary: "#fff",
    theme: "#BE185D",
    light: "#F3F4F6",
    lighter: "#E5E7EB",
    dark: "#1F2937",
    darker: "#4B5563",
    darkest: "#9CA3AF",
    green: "#0fd49a",
    red: "#FF9494",
}

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
`;
//Home page
export const Title = styled.h2`
    font-size: ${(props)=> props.size}px;
    text-align: center;
    color: ${(props)=> props.color ? props.color : colors.primary};
    padding:  5px;
    margin-botton: 20px; 
`;

export const SubTitle = styled.p`
    font-size: ${(props)=> props.size}px;
    text-align: center;
    color: ${(props)=> props.color ? props.color : colors.primary};
    padding: 5px;
    margin-botton: 25px; 
`;

export const Avatar = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50px;
    background-image: url(${(props)=>props.image});
    background-size: cover;
    background-position: center;
    margin: auto; 
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

export const StyleButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;
    &:hover{
        background-color: ${colors.primary};
        color: ${colors.green};
        cursor: pointer;
    }
`;
//Login Form
export const StyledInput = styled.input`
    width: 280px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark}
    background-color: ${colors.lighter}
    border: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s; 

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}
    &:focus{
        background-color: ${colors.darker};
        color: ${colors.green};
        outline-color: ${colors.green};
    }
`;

export const StyledLabel = styled.p`
    text-aling: left;
    font-size: 13px;
    font-weight: bold;
`;
export const StyledFormArea = styled.div`
    background-color: ${props => props.bg || colors.light};
    text-align: center;
    padding: 45px 55px;
    
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.green};
    border-radius: 25px;
    color: ${colors.green};
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;
    &:hover{
        background-color: ${colors.green};
        color: ${colors.primary};
        cursor: pointer;
    }
`;

export const ErrorMsg = styled.div`
    font-size: 15px;
    color: ${colors.red};
    margin-top: -5px;
    margin-botton: 10px;
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props)=>props.size}px;
    text-align: center;
    color: ${(props)=> (props.color ? props.color : colors.darker)};
    padding: 2px;
    margin-top: 10px;
`;

export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.green};
    transition: ease-in-out 0.3s;

    &:hover{
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    }
`;

//Icons
export const StyledIcons = styled.p`
    color: ${colors.dark};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props)=>props.right && `right: 15px;`};
    ${(props)=>!props.right && `left: 15px;`};
`;

//Copyright
export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.lighter};

`;