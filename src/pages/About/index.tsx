import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../service/api";
import { useTheme } from "styled-components";
import { Alert, ScrollView, Text } from "react-native";
import { Feather } from '@expo/vector-icons'
import circle from '../../assets/img/circle.png'
import dots from '../../assets/img/dots.png'

import { 
    Header,
    BackButton,
    ContentImage,
    CircleImage,
    PokemonImage,
    Content,
    PokemonId,
    PokemonName,
    PokemonTypeContainer,
    PokemonType,
    PokemonTypeText,
    DotsImage,
    Container,
    Title,
    StatusBar,
    Attributes,
    AttributeValue,
    ContentBar,
    ProgressBar,
    Ability
} from "./styles";
import { FadeAnimation } from "../../components/FadeAnimation";



type RouteParams = {
    pokemonId: number
}

type Stats = {
    base_stat: number
    stat: {
        name: string
    }
}

type Ability = {
    ability: {
        name: string
    }
}

export type TypeName = 
|  'grass'
|  'fire'
|  'water'
|  'poison'
|  'normal'
|  'bug'
|  'flying'
|  'eletric'
|  'ground'

type PokemonType = {
    type: {
        name: TypeName
    }
}

type PokemonProps = {
    name: string
    id: number
    stats: Stats[]
    abilities: Ability[]
    color: string
    types: PokemonType[]
}

export function About() {
    const route = useRoute()
    const { pokemonId } = route.params as RouteParams
    const { colors } = useTheme()

    const [pokemon, setPokemon] = useState({} as PokemonProps)
    const [load, setLoad] = useState(true)

    const navigation = useNavigation()

    useEffect(() => {
        async function getPokemonDetails() {
            try {
                const response = await api.get(`/pokemon/${pokemonId}`)
                const {stats, abilities, id, name, types} = response.data

                const currentType = types[0].type.name as TypeName
                const color = colors.backgroundCard[currentType]

                setPokemon({
                    stats, 
                    abilities, 
                    id, 
                    name, 
                    types, 
                    color
                })
                
            } catch (error) {
                Alert.alert('Ops! Algo deu errado')
            } finally {
                setLoad(false)
            }
        }

        getPokemonDetails()
    }, [])

    function handleGoBack() {
        navigation.goBack()
    }

    return <>
        {load ? <>
            <Text style={{ marginTop: 200 }}>Carregando...</Text>
            </> :
        <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
            <Header type={pokemon.types[0].type.name}>
                <BackButton onPress={handleGoBack}>
                <Feather  name="chevron-left" size={24} color="#fff" />
                </BackButton>
                
                <ContentImage>
                    <CircleImage source={circle} />
                    <FadeAnimation>
                        <PokemonImage source={{ 
                            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png` 
                        }} />
                    </FadeAnimation>
                </ContentImage>

                <Content>
                    <PokemonId>#{pokemon.id}</PokemonId>
                    <PokemonName>{pokemon.name}</PokemonName>

                    <PokemonTypeContainer>
                        {pokemon.types.map(({ type }) => (
                            <PokemonType key={type.name} type={type.name}>
                                <PokemonTypeText>{type.name}</PokemonTypeText>
                            </PokemonType>
                        ))}               
                    </PokemonTypeContainer>
                </Content>
                
                <DotsImage  source={dots} />
            </Header>

            <Container>
                <Title type={pokemon.types[0].type.name}>Base Stats</Title>

                {
                    pokemon.stats.map(attribute => 
                        <StatusBar key={attribute.stat.name}>
                            <Attributes>{attribute.stat.name}</Attributes>
                            <AttributeValue>{attribute.base_stat}</AttributeValue>

                            <ContentBar>
                                <ProgressBar 
                                    type={pokemon.types[0].type.name}
                                    borderWidth={0}
                                    progress={100}
                                    width={attribute.base_stat}
                                    color={pokemon.color}
                                />
                            </ContentBar>
                        </StatusBar>
                    )
                }

                <Title type={pokemon.types[0].type.name}>Abilities</Title>

                {pokemon.abilities.map(currentAbility => 
                    <Ability>
                        {currentAbility.ability.name}
                    </Ability>
                )}
            </Container>
        </ScrollView>
    }
    </>
}