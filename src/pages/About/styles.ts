import styled from "styled-components/native";
import { TypeName } from ".";
import theme from "../../global/styles/theme";
import * as Progress from 'react-native-progress';

type TypeProps = {
    type: TypeName
}

export const Header = styled.View<TypeProps>`
    height: 340px;
    padding-top: 20px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme, type }: any) => theme.colors.backgroundCard[type]};
    position: relative;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 70px;
    left: 40px;
`;

export const ContentImage = styled.View`
    position: relative;
`;

export const CircleImage = styled.Image`
    width: 125px;
    height: 125px;
    position: absolute;
`;

export const PokemonImage = styled.Image`
    width: 125px;
    height: 125px;
`;

export const Content = styled.View`
    margin-left: 30px;
`;

export const PokemonId = styled.Text`
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    font-style: normal;
    color: ${( theme ).colors.light_text};
`;

export const PokemonName = styled.Text`
    text-transform: capitalize;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 38px;
    color: ${( theme ).colors.text_white};
`;

export const PokemonTypeContainer = styled.View`
    flex-direction: row;
`;

export const PokemonType = styled.View<TypeProps>`
    width: 61px;
    height: 25px;
    background-color: ${({ theme, type }: any) => theme.colors.boxType[type]};
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    margin-top: 10px;
`;

export const PokemonTypeText = styled.Text`
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    color: ${( theme ).colors.light_text};
`;

export const DotsImage = styled.Image`
    width: 85px;
    position: absolute;
    top: 220px;
    right: 0;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${( theme ).colors.background};
    padding: 20px;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    margin-top: -40px;
`;

export const Title = styled.Text<TypeProps>`
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 19px;
    padding: 20px;
    color: ${({ theme, type }: any) => theme.colors.boxType[type]};
`;

export const StatusBar = styled.View`
    width: 100%;
    padding: 10px 20px;
    flex-direction: row;
    align-items: center;
`;

export const Attributes = styled.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    width: 110px;
    text-transform: capitalize;
    color: ${( theme ).colors.light_text};
`;

export const AttributeValue = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${( theme ).colors.detail};
    margin-left: 20px;
`;

export const ContentBar = styled.View`
    margin-left: 20px;
`;

export const ProgressBar = styled(Progress.Bar)<TypeProps>``;

export const Ability = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 10px 20px;
    color: ${( theme ).colors.detail};
    text-transform: capitalize;
`;