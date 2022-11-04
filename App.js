import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Game from "./components/Game";
import Navigation from "./components/Navigation";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue au Juste Prix !</Text>
      <Game />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
