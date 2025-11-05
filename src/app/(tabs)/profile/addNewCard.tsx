import FullRoundedButton from '@/src/components/FullRoundedButton';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function AddNewCard() {
	const router = useRouter();
	return (
		<View style={tw`flex-1 bg-white p-4`}>
			<View style={tw`flex-1 bg-white gap-4`}>
				<View
					style={tw`flex flex-col w-full gap-4 border border-lightGray rounded-lg p-4`}
				>
					<View style={tw`flex flex-col gap-2 w-full`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>Holder Name</Text>
						<TextInput
							style={tw`border border-lightGray rounded-lg p-2`}
							placeholder={'John Doe'}
						/>
					</View>
					<View style={tw`flex flex-col gap-2 w-full`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>Card Number</Text>
						<TextInput
							style={tw`border border-lightGray rounded-lg p-2`}
							placeholder={'1234 1234 1234 1234'}
						/>
					</View>
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<View style={tw`flex flex-col gap-2`}>
							<Text style={tw`text-sm font-manropeSemiBold`}>Expiry Date</Text>
							<View style={tw`flex flex-row items-center gap-2`}>
								<TextInput
									style={tw`border border-lightGray rounded-lg p-2`}
									placeholder={'MM'}
								/>
								<TextInput
									style={tw`border border-lightGray rounded-lg p-2`}
									placeholder={'YY'}
								/>
							</View>
						</View>
						<View style={tw`flex flex-col gap-2`}>
							<Text style={tw`text-sm font-manropeSemiBold`}>CVV</Text>
							<View style={tw`flex flex-row items-center gap-2`}>
								<TextInput
									style={tw`border border-lightGray rounded-lg p-2`}
									placeholder={'CVV'}
								/>
							</View>
						</View>
					</View>
				</View>
			</View>

			<FullRoundedButton
				text="Add Card"
				onPress={() => {
					router.back();
				}}
			/>
		</View>
	);
}
