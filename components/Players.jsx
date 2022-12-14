import React, {useState, useEffect} from "react";
import {Button, StyleSheet, TextInput, View,} from "react-native";


export default function Players() {
    const [player, setPlayer] = useState({});
    const [playerName, onChangePlayerName] = useState('');

    const newPlayer = () => {
        setPlayer({

        })
    }
    return (
        <View style={styles.content}>
            <TextInput
                style={styles.input}
                value={playerName}
                onChangeText={onChangePlayerName}
                placeholder={'Renseignez votre pseudo'}
                keyboardType={'default'}
            />
            <Button
                title={'Jouer'}
                style={styles.button}
                color={"#0424A4FF"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 300,
        borderColor: '#0424A4FF',
        borderRadius: 5,
        padding: 10,
    },
    button: {
        marginTop:10,
    }
});