import styled from "styled-components/native";
import { TypeName } from ".";

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

export const ContentImage = styled.Image``;

export const CircleImage = styled.Image``;

export const PokemonImage = styled.Image``;