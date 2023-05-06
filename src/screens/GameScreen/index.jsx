import { View, Text, Button } from 'react-native';
import Card from '../../components/Card';
import styles from './style';
import { useEffect, useState } from 'react';
const GameScreen = () => {
	const [currentGuess, setCurrentGuess] = useState();

	useEffect(() => {
		setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1));
	}, []);
	return (
		<View style={styles.container}>
			<Text style={styles.textColor}>The opponent's assumption is</Text>
			<Text style={styles.textColor}>{currentGuess}</Text>
			<Card otherStyles={styles.buttonContainer}>
				<Button
					title="lower"
					onPress={() => {
						console.log('Lower');
					}}
				/>
				<Button
					title="higer"
					onPress={() => {
						console.log('Higer');
					}}
				/>
			</Card>
		</View>
	);
};

export default GameScreen;
