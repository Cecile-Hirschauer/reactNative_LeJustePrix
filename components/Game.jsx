import React, {useState, useEffect} from "react";
import {TextInput, Text, View, Button, StyleSheet} from "react-native";

export default function Game() {
    const [category, setCategory] = useState('');
    const [instructions, setInstructions] = useState('');
    const [price, setPrice] = useState(0);
    const [playerInput, onChangePlayerInput] = useState(0);
    const [counter, setCounter] = useState(0);

    const getRandomCategory = () => {
        const categories = ['Vêtements', 'Véhicule', 'Bien Immobilier'];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)]
        setCategory(randomCategory)
    }

    const gameInstructions = () => {
        switch (category) {
            case 'Vêtements':
                setInstructions('5 et 500 €');
                setPrice(Math.round((Math.random() * (5, 500))))

                break;
            case 'Véhicule':
                setInstructions('5000 et 200000 €');
                setPrice(Math.round((Math.random() * (5000, 200000))))
                break;
            case 'Bien Immobilier':
                setInstructions('90000 et 500000 €');
                setPrice(Math.round((Math.random() * (90000, 500000))))
                break;
        };
    };


    useEffect(() => {

        getRandomCategory()
        gameInstructions()
    }, [category])


    function handleResult() {
        setCounter(counter + 1)

        if (playerInput == price) {
            alert(`Bien joué. le juste prix est: ${price} €`)
            getRandomCategory();
        }
        if (playerInput > price && counter < 5) {
            alert('C\'est moins cher')
        }
        if (playerInput < price && counter < 5) {
            alert("C'est plus cher")
        }
        if (counter === 5) {
            alert(`Game over. Le juste prix est de ${price}`)
            getRandomCategory();

        }
        onChangePlayerInput('');
    }

    // logs
    useEffect(() => {
        console.log(price)
        console.log(category);
        console.log(playerInput)
        console.log(counter);
    }, [category, playerInput, price, counter])

    return (
        <View style={styles.container}>
            <Text>Touver le juste prix dans la catégorie: </Text>
            <Text style={styles.category}>{category}</Text>
            <TextInput
                style={styles.input}
                defaultValue={playerInput}
                onChangeText={onChangePlayerInput}
                placeholder={`La fourchette de prix est entre: ${instructions}`}
                keyboardType={'numeric'}
            />
            <Button title={'Jouer'} onPress={handleResult}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#0424a4',
        borderRadius: 10,
        marginVertical:20
    },
    button: {
        borderRadius: 10
    },
    category: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: '#0424a4',
        paddingTop: 10,
        fontSize: 18
    }
});