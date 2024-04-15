import React, { useEffect, useState } from "react";
import api from "../../service/api";
import { FlatList } from "react-native";
import { Card, Pokemon, PokemonType } from "../../components/Card";
import pokeballHeader from '../../assets/img/pokeball.png'

import { 
    Container, 
    Header, 
    Title 
} from "./styles";
import { useNavigation } from "@react-navigation/native";

type Request = {
    id: number
    types: PokemonType[]
}

export function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    const navigation = useNavigation()

    function handleNavigation(pokemonId: number) {
        navigation.navigate('About', { 
            pokemonId, 
        })
    }

    useEffect(() => {
        async function getAllPokemons() {
            const response = await api.get('/pokemon')
            const { results } = response.data

            const payloadPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const { id, types } = await getMoreInfo(pokemon.url)

                    return {
                        name: pokemon.name,
                        id,
                        types
                    }
                })
            )

            setPokemons(payloadPokemons)
        }

        getAllPokemons()
    }, [])

    async function getMoreInfo(url: string): Promise<Request> {
        const response = await api.get(url)
        const { id, types } = response.data

        return {
            id,
            types
        }
    }


    return (
        <Container>
            <FlatList 
                ListHeaderComponent={
                    <>
                        <Header source={pokeballHeader}></Header>
                        <Title>Pokédex</Title>
                    </>
                }
                contentContainerStyle={{
                    paddingHorizontal: 20,
                }}
                data={pokemons}
                keyExtractor={pokemon => String(pokemon.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: pokemon }) => (
                        <Card data={pokemon} onPress={() => {
                            handleNavigation(pokemon.id)
                        }} />
                )}
            />
        </Container>
    )
}