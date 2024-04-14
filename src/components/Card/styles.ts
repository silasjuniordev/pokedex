import styled from "styled-components/native";
import theme from "../../global/styles/theme";

interface PokemonType {
    type: string
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    flex-direction: row;
    background-color: ${({ theme, type }: any) => theme.colors.backgroundCard[type]};
`;

export const LeftSide = styled.View`
    width: 50%;
    position: relative;
`;

 export const PokemonId = styled.Text`
    font-size: 12px;
    font-weight: bold;
    line-height: 14px;
    color: ${( theme ).colors.light_text};
 `;

 export const PokemonName = styled.Text`
    font-size: 25px;
    line-height: 31px;
    margin-top: 5px;
    font-weight: bold;
    text-transform: capitalize;
    color: ${( theme ).colors.text_white};
 `;

 export const ImageCardDetailLefSide = styled.Image`
    position: absolute;
    width: 74px;
    height: 32px;
    left: 90px;
    top: -10px;
 `;

 export const PokemonContentType = styled.View`
    flex-direction: row;
 `;

 export const PokemonType = styled.View<PokemonType>`
    padding: 5px;
    width: 65px;
    height: 25px;
    border-radius: 3px;
    margin-top: 5px;
    margin-left: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, type }: any) => (theme).colors.boxType[type]};
 `;

 export const PokemonTypeText = styled.Text`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${( theme ).colors.text_white};
    text-transform: capitalize;
 `;

 export const RightSide = styled.View`
    justify-content: center;
    align-items: center;
    width: 50%;
    position: relative;
`;

export const PokemonImage = styled.Image`
    margin-top: -40px;
    width: 130px;
    height: 130px;
`;

export const PokeballDetail = styled.Image`
    position: absolute;
    right: -20px;
    width: 100%;
    height: 100%;
    opacity: 0.2;
`;