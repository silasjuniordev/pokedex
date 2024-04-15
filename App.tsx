import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Routes } from './src/routes';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <StatusBar 
                style="dark"
                backgroundColor="transparent"
                translucent 
            />
            <Routes />
        </ThemeProvider>
    )
}