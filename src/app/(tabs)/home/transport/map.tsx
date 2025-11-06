import tw from '@/src/lib/tailwind';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import * as Location from 'expo-location';
import React, { useCallback, useRef, useState } from 'react';
import {
	Keyboard,
	KeyboardAvoidingView,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import {
	GestureHandlerRootView,
	TextInput,
} from 'react-native-gesture-handler';

import {
	iconDetectLocation,
	iconDropDestination,
	iconHomeAddress,
	iconNextArrow,
	iconRecentRidesClock,
	iconWorkBlue,
} from '@/assets/icons';
import Divider from '@/src/components/Divider';
import { useRouter } from 'expo-router';
import { SvgXml } from 'react-native-svg';

export default function Map() {
	const router = useRouter();

	const [destination, setDestination] = useState<string>('');

	const [getLocationPressed, setGetLocationPressed] = useState(false);

	const [location, setLocation] = useState<Location.LocationObject | null>(
		null
	);
	const [errorMsg, setErrorMsg] = useState<string | null>(null);

	const getUserLocation = async () => {
		setGetLocationPressed(true);
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
			return;
		}

		let location = await Location.getCurrentPositionAsync({});
		setLocation(location);
	};

	let text = 'Waiting...';
	if (errorMsg) {
		text = errorMsg;
		console.log(errorMsg);
	} else if (location) {
		text = JSON.stringify(location);
		console.log(text);
	}

	const bottomSheetRef = useRef<BottomSheet>(null);

	// callbacks
	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);

	return (
		<KeyboardAvoidingView style={tw`flex-1`} behavior="padding">
			<TouchableWithoutFeedback
				onPress={() => {
					Keyboard.dismiss(); // Dismiss keyboard only when tapping outside
				}}
			>
				<GestureHandlerRootView style={tw`flex-1`}>
					<Image
						source={require('../../../../../assets/images/map.png')}
						style={{ flex: 1 }}
					/>
					<BottomSheet
						ref={bottomSheetRef}
						onChange={handleSheetChanges}
						snapPoints={['10%', '40%', '90%']}
						index={1}
					>
						<BottomSheetView
							style={tw`flex items-center justify-start py-4 px-8 gap-8`}
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
										style={tw`flex flex-row w-full border border-lightGray rounded-lg items-center justify-between px-2`}
									>
										<TextInput
											placeholder="Enter Pickup Location"
											style={tw`flex-1`}
											value={getLocationPressed ? text : ''}
										/>
										<TouchableOpacity onPress={getUserLocation}>
											<SvgXml xml={iconDetectLocation} />
										</TouchableOpacity>
									</View>
									<TouchableOpacity
										style={tw`flex flex-row w-full border border-lightGray rounded-lg justify-between items-center px-2`}
									>
										<TextInput
											placeholder="Enter Destination"
											style={tw`flex-1`}
											onChangeText={text => {
												setDestination(text);
												console.log(destination);
											}}
											value={destination}
										/>
									</TouchableOpacity>
								</View>
							</View>
							<View style={tw`flex flex-col gap-4`}>
								{savedLocations.map((location, index) => (
									<View
										key={location.id}
										style={tw`flex flex-col w-full gap-4`}
									>
										<TouchableOpacity
											style={tw`flex flex-row w-full gap-4 items-center`}
											onPress={() => setDestination(location.label)}
										>
											<View
												style={tw`flex items-center justify-center h-6 w-6 bg-white rounded-full shadow-md`}
											>
												<SvgXml
													xml={
														location.label === 'Home'
															? iconHomeAddress
															: location.label === 'Work'
															? iconWorkBlue
															: iconDropDestination
													}
												/>
											</View>
											<View style={tw`flex flex-col flex-1`}>
												<Text style={tw`font-manropeSemiBold text-sm`}>
													{location.label}
												</Text>
												<Text style={tw`text-xs font-manropeRegular text-gray`}>
													{location.address}
												</Text>
											</View>
										</TouchableOpacity>
										<Divider />
									</View>
								))}
								{recentLocations.slice(0, 3).map((location, index) => (
									<View
										key={location.id}
										style={tw`flex flex-col w-full gap-4`}
									>
										<TouchableOpacity
											style={tw`flex flex-row w-full gap-4 items-center`}
											onPress={() => setDestination(location.place)}
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
													{location.to}
												</Text>
											</View>
										</TouchableOpacity>
										<Divider />
									</View>
								))}
							</View>
							<TouchableOpacity
								style={tw`flex items-center justify-center p-4 aspect-square bg-blue rounded-full absolute bottom-4 right-4 z-50`}
							>
								<SvgXml xml={iconNextArrow} />
							</TouchableOpacity>
						</BottomSheetView>
					</BottomSheet>
				</GestureHandlerRootView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
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
		place: 'Home',
		to: '987 Birch Blvd',
		date: '2024-06-13',
	},
];

const savedLocations = [
	{
		id: 1,
		label: 'Home',
		address: '123 Main St, Cityville',
	},
	{
		id: 2,
		label: 'Work',
		address: '456 Office Rd, Cityville',
	},
	{
		id: 3,
		label: 'Gym',
		address: '789 Fitness Ave, Cityville',
	},
];
