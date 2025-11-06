import {
	iconDetectLocation,
	iconDropDestination,
	iconGoToMap,
	iconRecentRidesClock,
} from '@/assets/icons';
import Divider from '@/src/components/Divider';
import PageWrapper from '@/src/components/PageWrapper';
import Header from '@/src/components/ui/Header';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Index() {
	const router = useRouter();

	return (
		<PageWrapper>
			<View style={tw`flex flex-col w-full h-110 items-center justify-start`}>
				<View style={tw`w-full h-40`}>
					<LinearGradient
						colors={['#017ADF', '#053053']}
						style={tw`flex flex-row rounded-xl w-full h-full`}
						start={{ x: 0, y: 0 }}
						end={{ x: 0, y: 1 }}
					>
						<Text style={tw`font-manropeBold text-lg  text-white flex-1 p-4`}>
							Instant 25% back on Rides{`\n`}
							<Text style={tw`text-xs font-manropeRegular`}>
								Earn rewards on {`\n`}your first 3 rides getting cashback
								{`\n`}instantly
							</Text>
						</Text>
						<Image
							source={require('../../../../../assets/images/transportBanner.png')}
							style={tw`w-1/2 h-full absolute right-0`}
							contentFit="contain"
						/>
					</LinearGradient>
				</View>
				<View style={tw`flex p-4 w-full absolute top-30`}>
					<View style={tw`flex flex-col p-4 gap-4 bg-white rounded-xl`}>
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
								<TouchableOpacity
									style={tw`flex flex-row w-full border border-lightGray rounded-lg items-center justify-between p-2`}
									onPress={() => router.push('/(tabs)/home/transport/map')}
								>
									<Text style={tw`text-sm font-manropeRegular text-gray`}>
										Enter Pickup Location
									</Text>
									<SvgXml xml={iconDetectLocation} />
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`flex flex-row w-full border border-lightGray rounded-lg justify-between items-center p-2`}
									onPress={() => router.push('/(tabs)/home/transport/map')}
								>
									<Text style={tw`text-sm font-manropeRegular text-gray`}>
										Enter Destination
									</Text>
									<SvgXml xml={iconGoToMap} />
								</TouchableOpacity>
							</View>
						</View>
						<View style={tw`flex flex-col gap-4`}>
							{recentLocations.slice(0, 3).map((location, index) => (
								<View key={location.id} style={tw`flex flex-col w-full gap-4`}>
									<TouchableOpacity
										style={tw`flex flex-row w-full gap-4 items-center`}
									>
										<View
											style={tw`flex items-center justify-center h-6 w-6 bg-white rounded-full shadow-md`}
										>
											<SvgXml xml={iconRecentRidesClock} />
										</View>
										<View style={tw`flex flex-col flex-1`}>
											<Text style={tw`font-manropeSemiBold text-sm`}>
												{location.place}
											</Text>
											<Text style={tw`text-xs font-manropeRegular text-gray`}>
												{location.to} &#8226; {location.date}
											</Text>
										</View>
									</TouchableOpacity>
									{index < 2 && <Divider />}
								</View>
							))}
						</View>
					</View>
				</View>
			</View>
			<Header title="Recent Ride" />
			<View
				style={tw`flex flex-col w-full p-4 border border-lightGray rounded-xl gap-8`}
			>
				<View style={tw`flex flex-row w-full items-center gap-4`}>
					<View
						style={tw`flex items-center justify-center p-2 bg-white rounded-full shadow-sm`}
					>
						<Image
							source={require('../../../../../assets/images/Van.png')}
							style={tw`w-10 h-10`}
							contentFit="contain"
						/>
					</View>
					<View style={tw`flex flex-col gap-2`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>
							Volkswagen Jetta
						</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							19 Jun 2024
						</Text>
					</View>
				</View>
				<View style={tw`flex flex-row w-full gap-6 px-4`}>
					<View
						style={tw`flex flex-col items-center justify-between gap-1 py-2`}
					>
						<View style={tw`w-2 h-2 bg-blue rounded-full`} />
						<View style={tw`w-0.5 flex-1 bg-blue`} />
						<View style={tw`w-2 h-2 bg-gray rounded-full`} />
					</View>
					<View style={tw`flex flex-col justify-between gap-3`}>
						<View style={tw`flex flex-col flex-1 justify-start`}>
							<Text style={tw`text-xs text-gray font-manropeRegular`}>
								From
							</Text>
							<Text style={tw`text-sm font-manropeSemiBold`}>
								02 Street, Manila
							</Text>
						</View>
						<View style={tw`flex flex-col flex-1 justify-start`}>
							<Text style={tw`text-xs text-gray font-manropeRegular`}>To</Text>
							<Text style={tw`text-sm font-manropeSemiBold`}>222/1 Dhaka</Text>
						</View>
					</View>
				</View>
			</View>
		</PageWrapper>
	);
}

const recentLocations = [
	{
		id: 1,
		from: '123 Main St',
		to: '456 Oak Ave',
		place: 'Metro Station',
		date: '2024-06-15',
	},
	{
		id: 2,
		from: '789 Pine Rd',
		to: '321 Maple Ln',
		place: 'Central Park',
		date: '2024-06-14',
	},
	{
		id: 3,
		from: '654 Cedar St',
		place: 'Cafe',
		to: '987 Birch Blvd',
		date: '2024-06-13',
	},
];
