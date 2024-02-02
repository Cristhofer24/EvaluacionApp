import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export const Arreglo = () => {
    const numero: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const [pares, setPares] = useState<number[]>([]);
    const [impares, setImpares] = useState<number[]>([]);
    const Ordenar = () => {


        const paresTemp: number[] = [];
        const imparesTemp: number[] = [];

        numero.forEach(num => {
            if (num % 2 === 0) {
                paresTemp.push(num);
            } else {
                imparesTemp.push(num);
            }
        });

        setPares(paresTemp);
        setImpares(imparesTemp);
    };

    return (
        <View>
            <Text>Ordenar números Pares e Impares</Text>
            <Text>Vector: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]</Text>
            <Button title="Clasificar" onPress={Ordenar} />
            <Text>Números Pares: {pares}</Text>
            <Text>Números Impares: {impares}</Text>
        </View>
    );
};
