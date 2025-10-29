import { iconAdd, iconDelete, iconStar } from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

type Item = {
	name: string;
	quantity: number;
};

export default function WritePrescription() {
	const { id } = useLocalSearchParams();
	const store = nearByStoresData.find(store => store.id === id);
	const [item, setItem] = useState<Item[]>([]);
	const [specialInstructions, setSpecialInstructions] = useState<string>('');
	const router = useRouter();

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
		>
			<PageWrapper>
				<StatusBar style="dark" />
				<View style={tw`flex flex-row w-full items-center`}>
					<Image
						source={store?.image}
						style={tw`w-12 h-12 rounded-full bg-white shadow-sm`}
						contentFit="contain"
					/>
					<View style={tw`flex`}>
						<Text style={tw`font-manropeBold`}>{store?.name}</Text>
						<View style={tw`flex flex-row items-center gap-2`}>
							<View style={tw`flex flex-row items-center gap-1`}>
								<Text style={tw`text-sm font-manropeRegular text-gray`}>
									{store?.rating}
								</Text>
								<SvgXml xml={iconStar} />
							</View>
							<Text style={tw`text-xs font-manropeRegular text-gray`}>
								{store?.address}
							</Text>
							<Text
								style={tw`text-xs font-manropeSemiBold ${
									store?.openNow ? 'text-green-500' : 'text-red-500'
								}`}
							>
								{store?.openNow ? 'Open' : 'Closed'}
							</Text>
						</View>
					</View>
				</View>
				<View
					style={tw`flex flex-col w-full gap-4 border border-lightGray rounded-xl p-4`}
				>
					<Text style={tw`font-manropeBold text-base`}>Basic Details</Text>
					<View style={tw`flex flex-col gap-2`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>Location</Text>
						<TextInput
							style={tw`border border-lightGray rounded-lg p-2`}
							placeholder="123, Street, Manilla"
						/>
					</View>
					<View style={tw`flex flex-col gap-2`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>Name</Text>
						<TextInput
							style={tw`border border-lightGray rounded-lg p-2`}
							placeholder="John Doe"
						/>
					</View>
					<View style={tw`flex flex-col gap-2`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>Phone Number</Text>
						<TextInput
							style={tw`border border-lightGray rounded-lg p-2`}
							placeholder="+1234567890"
						/>
					</View>
				</View>
				<View
					style={tw`flex flex-col w-full gap-4 border border-lightGray rounded-xl p-4`}
				>
					<Text style={tw`font-manropeBold text-base`}>Item Details</Text>
					{item.map((itm, index) => (
						<View key={index} style={tw`flex flex-row items-center gap-2`}>
							<TextInput
								style={tw`flex-1 border border-lightGray rounded-lg p-2`}
								placeholder="Medicine Name"
								value={itm.name}
								onChangeText={text => {
									const updatedItems = [...item];
									updatedItems[index].name = text;
									setItem(updatedItems);
								}}
							/>
							<TextInput
								style={tw`w-15 border border-lightGray rounded-lg p-2 text-center`}
								placeholder="Qty"
								keyboardType="numeric"
								value={itm.quantity.toString()}
								onChangeText={text => {
									const updatedItems = [...item];
									updatedItems[index].quantity = parseInt(text) || 0;
									setItem(updatedItems);
								}}
							/>
							<TouchableOpacity
								onPress={() => {
									const updatedItems = [...item];
									updatedItems.splice(index, 1);
									setItem(updatedItems);
								}}
							>
								<SvgXml xml={iconDelete} />
							</TouchableOpacity>
						</View>
					))}
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-center gap-2`}
						onPress={() => setItem([...item, { name: '', quantity: 0 }])}
					>
						<SvgXml xml={iconAdd} />
						<Text style={tw`font-manropeSemiBold`}>Add Item</Text>
					</TouchableOpacity>
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
						value={specialInstructions}
						onChangeText={text => setSpecialInstructions(text)}
						textAlignVertical="top" // Ensures placeholder text is aligned to the top
					/>
				</View>
				<FullRoundedButton
					text="Submit Prescription"
					onPress={() => {
						router.push('/(tabs)/cart');
					}}
				/>
			</PageWrapper>
		</KeyboardAvoidingView>
	);
}

const nearByStoresData = [
	{
		id: '1',
		name: 'HealthPlus Pharmacy',
		address: '123 Main St',
		image: require('../../../../../../../assets/images/pharmacy1.png'),
		rating: 4.5,
		openNow: true,
	},
	{
		id: '2',
		name: 'WellCare Pharmacy',
		address: '456 Elm St',
		image: require('../../../../../../../assets/images/pharmacy2.png'),
		rating: 4.0,
		openNow: false,
	},
	{
		id: '3',
		name: 'MediTrust Pharmacy',
		address: '789 Oak St',
		image: require('../../../../../../../assets/images/pharmacy3.png'),
		rating: 4.3,
		openNow: true,
	},
	{
		id: '4',
		name: 'CarePoint Pharmacy',
		address: '101 Pine St',
		image: require('../../../../../../../assets/images/pharmacy4.png'),
		rating: 4.7,
		openNow: true,
	},
];
