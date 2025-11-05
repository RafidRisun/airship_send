import {
	iconApplepay,
	iconGooglepay,
	iconMastercard,
	iconPaypal,
	iconVisa,
} from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import Header from '@/src/components/ui/Header';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function PaymentMethod() {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
		'Paypal' | 'Master Card' | 'Apple Pay' | 'Google Pay' | 'Visa' | ''
	>('');
	const router = useRouter();

	return (
		<View style={tw`flex-1 bg-white p-4`}>
			<View style={tw`flex-1 bg-white gap-4`}>
				<Header title="Choose Payment Method" />
				<View style={tw`flex flex-col w-full gap-4`}>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between p-4 border border-lightGray rounded-lg`}
						onPress={() => setSelectedPaymentMethod('Paypal')}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<SvgXml xml={iconPaypal} />
							<Text style={tw`font-manropeSemiBold`}>Paypal</Text>
						</View>
						<View
							style={tw`w-3 h-3 ${
								selectedPaymentMethod === 'Paypal'
									? 'bg-blue'
									: 'border border-gray'
							} rounded-full`}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between p-4 border border-lightGray rounded-lg`}
						onPress={() => setSelectedPaymentMethod('Master Card')}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<SvgXml xml={iconMastercard} />
							<Text style={tw`font-manropeSemiBold`}>
								{masterCardInfo.cardNumber}
							</Text>
						</View>
						<View
							style={tw`w-3 h-3 ${
								selectedPaymentMethod === 'Master Card'
									? 'bg-blue'
									: 'border border-gray'
							} rounded-full`}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between p-4 border border-lightGray rounded-lg`}
						onPress={() => setSelectedPaymentMethod('Apple Pay')}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<SvgXml xml={iconApplepay} />
							<Text style={tw`font-manropeSemiBold`}>Apple Pay</Text>
						</View>
						<View
							style={tw`w-3 h-3 ${
								selectedPaymentMethod === 'Apple Pay'
									? 'bg-blue'
									: 'border border-gray'
							} rounded-full`}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between p-4 border border-lightGray rounded-lg`}
						onPress={() => setSelectedPaymentMethod('Google Pay')}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<SvgXml xml={iconGooglepay} />
							<Text style={tw`font-manropeSemiBold`}>Google Pay</Text>
						</View>
						<View
							style={tw`w-3 h-3 ${
								selectedPaymentMethod === 'Google Pay'
									? 'bg-blue'
									: 'border border-gray'
							} rounded-full`}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between p-4 border border-lightGray rounded-lg`}
						onPress={() => setSelectedPaymentMethod('Visa')}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<SvgXml xml={iconVisa} />
							<Text style={tw`font-manropeSemiBold`}>Visa</Text>
						</View>
						<View
							style={tw`w-3 h-3 ${
								selectedPaymentMethod === 'Visa'
									? 'bg-blue'
									: 'border border-gray'
							} rounded-full`}
						/>
					</TouchableOpacity>
				</View>
			</View>

			<FullRoundedButton
				text="Add New Card"
				onPress={() => {
					router.push('/profile/addNewCard');
				}}
			/>
		</View>
	);
}

const masterCardInfo = {
	cardNumber: '**** **** **** 1234',
	cardHolder: 'John Doe',
	expiryDate: '12/24',
};
