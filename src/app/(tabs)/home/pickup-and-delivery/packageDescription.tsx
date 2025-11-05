import FullRoundedButton from '@/src/components/FullRoundedButton';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	Keyboard,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

export default function PackageDescription() {
	const router = useRouter();
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View
				style={tw`flex flex-col flex-1 w-full items-center justify-between bg-white p-4`}
			>
				<View
					style={tw`flex flex-col w-full flex-1 items-center justify-start gap-5`}
				>
					<View
						style={tw`flex flex-row items-start justify-between w-80 px-4 mb-2`}
					>
						<View style={tw`flex flex-col items-center justify-center gap-2`}>
							<View
								style={tw`w-6 h-6 bg-blue rounded-full flex items-center justify-center`}
							/>
							<View style={tw`w-20 h-1 bg-blue absolute top-2.5 left-12`} />
							<Text
								style={tw`text-xs text-blue font-manropeSemiBold text-center w-17`}
							>
								Personal Details
							</Text>
						</View>
						<View style={tw`flex flex-col items-center justify-center gap-2`}>
							<View
								style={tw`w-6 h-6 bg-blue rounded-full flex items-center justify-center`}
							>
								<View style={tw`w-3 h-3 bg-white rounded-full`} />
							</View>
							<View
								style={tw`w-20 h-1 bg-lightGray absolute top-2.5 left-12`}
							/>
							<Text
								style={tw`text-xs text-gray font-manropeSemiBold text-center w-17`}
							>
								Package Description
							</Text>
						</View>
						<View style={tw`flex flex-col items-center justify-center gap-2`}>
							<View
								style={tw`w-6 h-6 bg-lightGray rounded-full flex items-center justify-center`}
							/>
							<Text
								style={tw`text-xs text-gray font-manropeSemiBold text-center w-17`}
							>
								Payment Details
							</Text>
						</View>
					</View>
					<View
						style={tw`flex flex-col w-full p-4 border border-lightGray rounded-lg gap-2`}
					>
						<View style={tw`flex flex-col gap-2 w-full`}>
							<Text style={tw`text-sm font-manropeSemiBold w-full`}>
								Item Description
							</Text>
							<TextInput
								style={tw`w-full h-25 border border-lightGray rounded-md p-3`}
								placeholder="Describe your package"
								multiline
								numberOfLines={6}
								textAlignVertical="top" // Aligns the placeholder and text to the top
							/>
						</View>
						<View style={tw`flex flex-col gap-2 w-full`}>
							<Text style={tw`text-sm font-manropeSemiBold w-full`}>
								Special Instructions
							</Text>
							<TextInput
								style={tw`w-full h-25 border border-lightGray rounded-md p-3`}
								placeholder="Add any special instructions here"
								multiline
								numberOfLines={6}
								textAlignVertical="top" // Aligns the placeholder and text to the top
							/>
						</View>
						<View style={tw`flex flex-col gap-2 w-full`}>
							<Text style={tw`text-sm font-manropeSemiBold w-full`}>
								Is your item fragile?
							</Text>
							<View style={tw`flex flex-row items-center gap-4`}>
								<TouchableOpacity
									style={tw`flex items-center justify-center flex-1 py-3 bg-white rounded-lg shadow-md`}
								>
									<Text style={tw`text-sm font-manropeSemiBold`}>Yes</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`flex items-center justify-center flex-1 py-3 bg-white rounded-lg shadow-md`}
								>
									<Text style={tw`text-sm font-manropeSemiBold`}>No</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
				<FullRoundedButton
					text="Next"
					onPress={() => {
						router.push('/(tabs)/home/pickup-and-delivery/paymentDetails');
					}}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}
