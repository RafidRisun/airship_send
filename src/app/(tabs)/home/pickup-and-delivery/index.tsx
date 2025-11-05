import {
	iconAdd,
	iconDropDestination,
	iconOptions,
	iconPickupAndDelivery,
} from '@/assets/icons';
import Header from '@/src/components/ui/Header';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Index() {
	const router = useRouter();

	const [showCurrentDeliveryDetails, setShowCurrentDeliveryDetails] =
		useState(false);

	const [selectedDeliveryId, setSelectedDeliveryId] = useState<string | null>(
		null
	);

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={tw`flex flex-1 bg-white`}
		>
			<TouchableWithoutFeedback
				onPress={() => {
					setSelectedDeliveryId(null);
					setShowCurrentDeliveryDetails(false);
				}}
			>
				<View
					style={tw`flex flex-col w-full flex-1 items-center justify-start bg-white gap-5 p-4`}
				>
					<View
						style={tw`flex flex-col w-full h-80 items-center justify-start`}
					>
						<View style={tw`w-full h-40`}>
							<LinearGradient
								colors={['#017ADF', '#053053']}
								style={tw`flex flex-row p-4 rounded-xl items-center w-full h-full`}
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 0 }}
							>
								<Text
									style={tw`text-base font-manropeRegular text-white flex-1 px-2`}
								>
									Send goods upto{`\n`}
									<Text style={tw`font-manropeBold text-4xl`}>300 kg</Text>
								</Text>
								<Image
									source={require('../../../../../assets/images/pickupAndDeliveryBanner.png')}
									style={tw`w-1/2 h-full`}
									contentFit="contain"
								/>
							</LinearGradient>
						</View>
						<View style={tw`flex p-4 w-full absolute top-30`}>
							<View
								style={tw`flex flex-col p-4 gap-4 bg-white shadow-md rounded-xl`}
							>
								<View style={tw`flex flex-row w-full gap-6`}>
									<View
										style={tw`flex flex-col items-center justify-between gap-1 py-2`}
									>
										<View style={tw`w-2 h-2 bg-green-500 rounded-full`} />
										<View style={tw`w-0.5 flex-1 bg-gray`} />
										<SvgXml xml={iconDropDestination} />
									</View>
									<View
										style={tw`flex flex-col flex-1 items-center justify-between gap-1`}
									>
										<View
											style={tw`flex flex-col w-full border border-lightGray rounded-lg justify-start`}
										>
											<Text style={tw`text-xs font-manropeSemiBold px-2 pt-2`}>
												Abhi S.
											</Text>
											<TextInput
												style={tw`p-2`}
												placeholder="House, Street, City"
											/>
										</View>
										<View
											style={tw`flex flex-col w-full border border-lightGray rounded-lg justify-start`}
										>
											<TextInput
												style={tw`p-2`}
												placeholder="Where is your Drop?"
											/>
										</View>
									</View>
								</View>
								<TouchableOpacity
									style={tw`flex flex-row w-full gap-2 items-center justify-center`}
									onPress={() =>
										router.push(
											'/(tabs)/home/pickup-and-delivery/personalDetails'
										)
									}
								>
									<SvgXml xml={iconAdd} />
									<Text style={tw`text-sm font-manropeSemiBold text-blue`}>
										New Delivery
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<Header title="Current Delivery" />
					<View
						style={tw`flex flex-col w-full p-4 border border-lightGray rounded-xl gap-8`}
					>
						<View style={tw`flex flex-row w-full items-center gap-4`}>
							<View
								style={tw`flex items-center justify-center p-3 bg-white rounded-full shadow-md`}
							>
								<SvgXml xml={iconPickupAndDelivery} width={25} height={25} />
							</View>
							<View style={tw`flex flex-col flex-1 items-start justify-center`}>
								<Text style={tw`text-sm font-manropeSemiBold`}>
									Order ID:{' '}
									<Text style={tw`text-xs font-manropeSemiBold text-blue`}>
										despacito1337
									</Text>
								</Text>
								<View
									style={tw`flex flex-row items-center justify-center gap-2`}
								>
									<Text style={tw`text-xs text-gray font-manropeRegular`}>
										Send
									</Text>
									<Text>•</Text>
									<Text style={tw`text-xs text-gray font-manropeRegular`}>
										19 November 2024
									</Text>
								</View>
							</View>
							<TouchableOpacity
								onPress={() => {
									setShowCurrentDeliveryDetails(true);
									setSelectedDeliveryId(null);
								}}
							>
								<SvgXml xml={iconOptions} />
							</TouchableOpacity>
							{showCurrentDeliveryDetails && (
								<View
									style={tw`flex flex-col px-4 py-2 bg-white rounded-lg absolute right-0 top-0 border border-lightGray`}
								>
									<TouchableOpacity
										onPress={() =>
											router.navigate('/(tabs)/order/order-details')
										}
									>
										<Text style={tw`text-xs font-manropeRegular`}>
											View Details
										</Text>
									</TouchableOpacity>
								</View>
							)}
						</View>
						<View style={tw`flex flex-row w-full gap-6 px-4`}>
							<View
								style={tw`flex flex-col items-center justify-between gap-1 py-2`}
							>
								<View style={tw`w-2 h-2 bg-blue rounded-full`} />
								<View style={tw`w-0.5 flex-1 bg-blue`} />
								<View style={tw`w-2 h-2 bg-gray rounded-full`} />
							</View>
							<View
								style={tw`flex flex-col items-center justify-between gap-1`}
							>
								<View style={tw`flex flex-col flex-1 justify-start`}>
									<Text style={tw`text-xs text-gray font-manropeRegular`}>
										From
									</Text>
									<Text style={tw`text-sm font-manropeSemiBold`}>
										02 Street, Manila
									</Text>
									<Text style={tw`text-xs text-gray font-manropeRegular`}>
										Sender Name- 06315636342
									</Text>
								</View>
								<View style={tw`flex flex-col flex-1 justify-start`}>
									<Text style={tw`text-xs text-gray font-manropeRegular`}>
										To
									</Text>
									<Text style={tw`text-sm font-manropeSemiBold`}>
										222/1 Dhaka
									</Text>
									<Text style={tw`text-xs text-gray font-manropeRegular`}>
										Receiver Name- 06315636342
									</Text>
								</View>
							</View>
						</View>
					</View>
					<Header title="Recent Deliveries" seeAll />
					<View style={tw`flex flex-col w-full p-4 gap-8`}>
						{recentDeliveries.map((delivery, index) => (
							<View
								key={index}
								style={tw`flex flex-row w-full items-center gap-4`}
							>
								<View
									style={tw`flex items-center justify-center p-3 bg-white rounded-full shadow-md`}
								>
									<SvgXml xml={iconPickupAndDelivery} width={25} height={25} />
								</View>
								<View
									style={tw`flex flex-col flex-1 items-start justify-center`}
								>
									<Text style={tw`text-sm font-manropeSemiBold`}>
										Order ID:{' '}
										<Text style={tw`text-xs font-manropeSemiBold text-blue`}>
											{delivery.id}
										</Text>
									</Text>
									<View
										style={tw`flex flex-row items-center justify-center gap-2`}
									>
										<Text
											style={tw`text-xs text-green-500 font-manropeRegular`}
										>
											{delivery.status}
										</Text>
										<Text>•</Text>
										<Text style={tw`text-xs text-gray font-manropeRegular`}>
											{delivery.date}
										</Text>
									</View>
								</View>
								<TouchableOpacity
									onPress={() => {
										setSelectedDeliveryId(delivery.id);
										setShowCurrentDeliveryDetails(false);
									}}
								>
									<SvgXml xml={iconOptions} />
								</TouchableOpacity>
								{selectedDeliveryId === delivery.id && (
									<View
										style={tw`flex flex-col px-4 py-2 bg-white rounded-lg absolute right-0 top-0 border border-lightGray`}
									>
										<TouchableOpacity
											onPress={() =>
												router.navigate('/(tabs)/order/order-details')
											}
										>
											<Text style={tw`text-xs font-manropeRegular`}>
												View Details
											</Text>
										</TouchableOpacity>
									</View>
								)}
							</View>
						))}
					</View>
				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
	);
}

const recentDeliveries = [
	{
		id: 'despacito1337',
		status: 'Sent',
		date: '19 November 2024',
		from: {
			address: '02 Street, Manila',
			name: 'Sender Name- 06315636342',
		},
		to: {
			address: '222/1 Dhaka',
			name: 'Receiver Name- 06315636342',
		},
	},
	{
		id: 'fastdelivery42',
		status: 'Delivered',
		date: '15 November 2024',
		from: {
			address: '10 Downing St, London',
			name: 'Sender Name- 0123456789',
		},
		to: {
			address: '1600 Pennsylvania Ave, Washington, D.C.',
			name: 'Receiver Name- 9876543210',
		},
	},
];
