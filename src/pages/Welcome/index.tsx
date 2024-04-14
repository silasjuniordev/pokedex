import React from "react";
import LottieView from "lottie-react-native";
import welcomeAnimation from '../../assets/welcomeAnimation.json'

import { 
    Container, 
    Content, 
    Footer,
    Title,
    SubTitle,
    WrapperAnimation,
} from "./styles";
import Button from "../../components/Button";

export function Welcome() {
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
                />
            </Footer>
        </Container>
    )
}