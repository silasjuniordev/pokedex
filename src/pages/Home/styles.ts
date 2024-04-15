import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
    flex: 1;
    background-color: ${( theme ).colors.background};
`;

export const Header = styled.ImageBackground`
    height: 180px;
    width: ${windowWidth}px;
    background-color: ${( theme ).colors.background};
    margin-left: -20px;
`;

export const Title = styled.Text`
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
    color: ${( theme ).colors.light_text};
`;