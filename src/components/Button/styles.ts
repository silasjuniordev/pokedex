import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: ${( theme ).colors.types.water};
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`;

export const Title = styled.Text`
    font-size: 14px;
    color: ${( theme ).colors.text_white};
`;