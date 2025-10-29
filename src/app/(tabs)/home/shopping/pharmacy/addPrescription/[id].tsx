import { iconCamera, iconStar, iconType } from '@/assets/icons';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function AddPrescription() {
	const { id } = useLocalSearchParams();
	const store = nearByStoresData.find(store => store.id === id);

	return (
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
			<TouchableOpacity
				style={tw`flex flex-col w-full gap-4 border border-lightGray rounded-xl p-4`}
				onPress={() =>
					router.push('/(tabs)/home/shopping/pharmacy/addPrescription/camera')
				}
			>
				<View
					style={tw`flex w-12 h-12 items-center justify-center bg-white shadow-sm rounded-full`}
				>
					<SvgXml xml={iconCamera} />
				</View>
				<Text style={tw`font-manropeSemiBold text-blue`}>
					Upload Prescription
				</Text>
				<Text style={tw`font-manropeRegular text-xs text-gray`}>
					To ensure the accuracy of your order, please upload a valid
					prescription from a licensed healthcare professional.
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={tw`flex flex-col w-full gap-4 border border-lightGray rounded-xl p-4`}
				onPress={() =>
					router.push(
						`/(tabs)/home/shopping/pharmacy/writePrescription/${store?.id}`
					)
				}
			>
				<View
					style={tw`flex w-12 h-12 items-center justify-center bg-white shadow-sm rounded-full`}
				>
					<SvgXml xml={iconType} />
				</View>
				<Text style={tw`font-manropeSemiBold text-blue`}>
					Type Prescription Manually
				</Text>
				<Text style={tw`font-manropeRegular text-xs text-gray`}>
					Type your prescription details to proceed with your order.
				</Text>
			</TouchableOpacity>
		</PageWrapper>
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
