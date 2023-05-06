import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';
import { useState } from 'react';
import GameScreen from './src/screens/GameScreen';
import { useFonts } from 'expo-font';

export default function App() {
	const [loaded] = useFonts({
		'Sigmar-Regular': require('./src/assets/fonts/Sigmar-Regular.ttf'),
	});
	const [userNumber, setUserNumber] = useState();

	const handleStartGame = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	let content = <StartGame onStartGame={handleStartGame} />;
	if (userNumber) {
		content = <GameScreen />;
	}

	if (!loaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Header newStyles={styles.headerTitle} title={'Adivina el numero'} />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerTitle: {
		color: 'white',
		fontSize: 22,
		fontFamily: 'Sigmar-Regular',
	},
});
