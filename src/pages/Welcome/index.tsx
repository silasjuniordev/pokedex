import React from "react";
import LottieView from "lottie-react-native";
import welcomeAnimation from '../../assets/welcomeAnimation.json'
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

import { 
    Container, 
    Content, 
    Footer,
    Title,
    SubTitle,
    WrapperAnimation,
} from "./styles";


export function Welcome() {
    const navigation = useNavigation();

    function handleNavigation() {
        navigation.navigate('Home')
    }

    return (
        <Container>
            <Content>
                <WrapperAnimation>
                    <LottieView style={{flex: 1}} autoPlay loop source={welcomeAnimation} />
                </WrapperAnimation>
                <Title>Bem Vindo</Title>
                <SubTitle>Encontre Todos os pokémons em um só lugar</SubTitle>
            </Content>
            <Footer>
                <Button 
                    title="Iniciar"
                    onPress={handleNavigation}
                />
            </Footer>
        </Container>
    )
}