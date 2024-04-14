import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { 
    Container,
    Title 
} from './styles'


type Props = {
    title: string
} & TouchableOpacityProps

export default function Button({ title }: Props) {
  return (
    <Container>
        <Title>{title}</Title>
    </Container>
  )
}