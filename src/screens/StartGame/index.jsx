import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Button,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
const StartGame = ({ onStartGame }) => {
	const [value, setValue] = useState('');
	const [confirm, setConfirm] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState('');

	const handleInput = (text) => {
		setValue(text.replace(/[^0-9]/g, ''));
	};
	const handleResetInput = () => {
		setValue('');
		setConfirm(false);
	};

	const handleConfirmation = () => {
		const newValue = parseInt(value);
		if (isNaN(newValue) || newValue <= 0 || newValue > 99) return;
		setConfirm(true);
		setSelectedNumber(newValue);
		setValue('');
	};

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior={''}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.container}>
					<Card>
						{/* <Card otherStyles={{ backgroundColor: '#b5f9d1' }}> */}
						<Text style={styles.subtitle}>Chose a number</Text>
						<Input
							blurOnSubmit
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="numeric"
							placeholder="your number"
							maxLength={2}
							value={value}
							onChangeText={handleInput}
						/>
						<View style={styles.buttonContainer}>
							<TouchableOpacity style={styles.cleanBoton} onPress={handleResetInput}>
								<Text>clean</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.confirmButton} onPress={handleConfirmation}>
								<Text>Confirm</Text>
							</TouchableOpacity>
						</View>
					</Card>
					{confirm && (
						<Card otherStyles={styles.selectedCard}>
							<Text style={{ color: 'white' }}>Your number is:</Text>
							<Text>{selectedNumber}</Text>
							<View>
								<Button title="start game" color={'blue'} onPress={() => onStartGame(selectedNumber)} />
							</View>
						</Card>
					)}
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default StartGame;
