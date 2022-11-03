import React, {useState, useEffect} from "react";
import {TextInput, Text, View, Button} from "react-native";

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
        if (playerInput == price) {
            alert(`Bien joué. le juste prix est: ${price} €`)
            getRandomCategory();
       }
        if (playerInput > price && counter < 10) {
            alert('C\'est moins cher')
            setCounter(counter + 1)
        }
        if (playerInput < price && counter < 10) {
            alert("C'est plus cher")
            setCounter(counter + 1)
        }
        if (counter === 10) {
            alert(`Game over. Le juste prix est de ${price}`)
            getRandomCategory();

        }
        onChangePlayerInput('')
    }

    // logs
    useEffect(() => {
        console.log(price)
        console.log(category);
        console.log(playerInput)
        console.log(counter);
    }, [category, playerInput, price, counter])

    return (
        <View>
            <Text>Touver le juste prix dans la catégorie: {category}</Text>
            <TextInput
            defaultValue={playerInput}
            onChangeText={onChangePlayerInput}
            placeholder={`La fourchette de prix est entre: ${instructions}`}
            keyboardType={'numeric'}
            />
            <Button title={'Soumettre'} onPress={handleResult} />
        </View>
    )
}