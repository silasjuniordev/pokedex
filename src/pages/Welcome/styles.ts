import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${( theme ).colors.backgroundWater};
`;

export const Content = styled.View`
    height: 70%;
    align-items: center;
    justify-content: center;
`;

export const WrapperAnimation = styled.View`
    width: 400px;
    height: 300px;
    align-self: center;
    margin-top: 30px;
`;

export const Footer = styled.View`
    height: 30%;
    background-color: ${( theme ).colors.background};
    justify-content: center;
    align-items: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 40px;
    color: ${( theme ).colors.text_white};
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    margin-top: 20px;
    color: ${( theme ).colors.text_white};
`;