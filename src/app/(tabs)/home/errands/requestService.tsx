import { iconWallet } from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import tw from '@/src/lib/tailwind';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { SvgXml } from 'react-native-svg';

export default function RequestService() {
	const [payAmount, setPayAmount] = React.useState(0);
	const [estimatedPrice, setEstimatedPrice] = React.useState(300);
	const router = useRouter();

	useEffect(() => {
		const calculatedAmount = Math.round(payAmount * (3000 - 300) + 300);
		setEstimatedPrice(calculatedAmount);
		console.log('Pay Amount:', calculatedAmount);
	}, [payAmount]);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
		>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={tw`flex flex-1 bg-white`}
			>
				<TouchableWithoutFeedback
					onPress={() => {
						Keyboard.dismiss();
					}}
				>
					<View
						style={tw`flex flex-col w-full flex-1 items-center justify-start bg-white gap-5 p-4 pb-15`}
					>
						<View style={tw`flex flex-col gap-2 w-full`}>
							<Text style={tw`text-sm font-manropeSemiBold`}>Service Type</Text>
							<TextInput
								style={tw`border border-lightGray rounded-lg p-2`}
								placeholder="Pet sitting, House cleaning, etc."
							/>
						</View>
						<View style={tw`flex flex-col gap-2 w-full`}>
							<Text style={tw`text-sm font-manropeSemiBold`}>
								Estimated Time
							</Text>
							<RNPickerSelect
								placeholder={{ label: 'Select estimated time', value: null }}
								onValueChange={value => console.log(value)}
								items={[
									{ label: '1 Hour', value: '1_hour' },
									{ label: '2 Hours', value: '2_hours' },
									{ label: '3 Hours', value: '3_hours' },
								]}
							/>
						</View>
						<View style={tw`flex flex-col gap-2 w-full`}>
							<Text style={tw`text-sm font-manropeSemiBold`}>
								Amount you are willing to pay?
							</Text>
							<View
								style={tw`flex flex-col w-full border border-lightGray rounded-lg p-4`}
							>
								<View style={tw`flex flex-row items-center justify-between`}>
									<Text style={tw`text-sm font-manropeSemiBold text-gray`}>
										₱300
									</Text>
									<Text style={tw`text-sm font-manropeSemiBold text-gray`}>
										₱3000
									</Text>
								</View>
								<Slider
									style={{ width: '100%', height: 40 }}
									minimumValue={0}
									maximumValue={1}
									minimumTrackTintColor="#017ADF"
									maximumTrackTintColor="#B0BEC5"
									// thumbImage={require('../../../../../assets/images/thumbImage.png')}
									thumbTintColor="#017ADF"
									value={payAmount}
									onValueChange={value => setPayAmount(value)}
								/>
							</View>
						</View>
						<View
							style={tw`flex flex-col w-full gap-4 border border-lightGray rounded-xl p-4`}
						>
							<Text style={tw`font-manropeBold text-base`}>
								What should the rider bring?
							</Text>
							<TextInput
								style={tw`border border-lightGray rounded-lg p-2 h-24`}
								placeholder="Customer id, cash, tools, etc."
								multiline
								numberOfLines={4}
								textAlignVertical="top" // Ensures placeholder text is aligned to the top
							/>
						</View>
						<View
							style={tw`flex flex-col w-full gap-4 border border-lightGray rounded-xl p-4`}
						>
							<Text style={tw`font-manropeBold text-base`}>
								Special Instructions
							</Text>
							<TextInput
								style={tw`border border-lightGray rounded-lg p-2 h-24`}
								placeholder="Any special instructions"
								multiline
								numberOfLines={4}
								textAlignVertical="top" // Ensures placeholder text is aligned to the top
							/>
						</View>
						<FullRoundedButton
							text="Next"
							onPress={() => {
								router.push('/(tabs)/order');
							}}
						/>
					</View>
				</TouchableWithoutFeedback>
			</ScrollView>
			<View
				style={tw`absolute bottom-2 w-full items-center justify-center z-50`}
			>
				<View
					style={tw`flex flex-row items-center bg-white px-4 py-2 rounded-xl shadow-sm gap-4`}
				>
					<SvgXml xml={iconWallet} />
					<Text style={tw`font-manropeBold text-lg`}>
						Your Estimated Price{' '}
						<Text style={tw`text-blue`}>₱ {estimatedPrice}</Text>
					</Text>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}
