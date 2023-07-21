import { styled } from "styled-components";
import { myTheme } from "./Theme.styled";



export const Title = styled.h1`
    font-size: 16px;
    font-weight: 700;
    font-family: 'Inter';
    color: ${myTheme.colors.colorTitle};
    margin: 20px;
`

export const Image = styled.img`
    
    width: 280px;
    height: 170px;
    border-radius: 10px;
    margin: 10px 10px;
    margin-bottom: 0;
    
    
`
export const Text = styled.p`
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: ${myTheme.colors.colorText};
    margin: 20px;
`