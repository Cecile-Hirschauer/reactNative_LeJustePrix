import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function Home() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    title: {
        fontWeight: "bold",
        fontSize: 20,
        textTransform: "uppercase",
        color: '#0424a4'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
