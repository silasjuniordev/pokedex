import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import api from "../../service/api";
import { useTheme } from "styled-components";
import { Alert, ScrollView, Text } from "react-native";
import { Feather } from '@expo/vector-icons'
import circle from '../../assets/img/circle.png'

import { 
    Header,
    BackButton,
    ContentImage,
    CircleImage,
    PokemonImage 
} from "./styles";


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

    return <>
        {load ? <>
            <Text style={{ marginTop: 200 }}>Carregando...</Text>
            </> :
        <ScrollView style={{ flex: 1 }}>
            <Header type={pokemon.types[0].type.name}>
                <BackButton>
                <Feather  name="chevron-left" size={24} color="#fff" />
                </BackButton>
                
                {/*<ContentImage>
                    <CircleImage source={circle} />
                    <PokemonImage source={{ 
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png` 
                    }} />
                </ContentImage>*/}
                
            </Header>
        </ScrollView>
    }
    </>
}