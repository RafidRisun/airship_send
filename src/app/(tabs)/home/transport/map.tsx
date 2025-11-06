import tw from '@/src/lib/tailwind';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import * as Location from 'expo-location';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
	iconCall,
	iconDetectLocation,
	iconDropDestination,
	iconHomeAddress,
	iconNextArrow,
	iconRecentRidesClock,
	iconStar,
	iconWorkBlue,
} from '@/assets/icons';
import Divider from '@/src/components/Divider';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import { useRouter } from 'expo-router';
import { SvgXml } from 'react-native-svg';

export default function Map() {
	const router = useRouter();

	const [destination, setDestination] = useState<string>('');

	const [getLocationPressed, setGetLocationPressed] = useState(false);

	const [location, setLocation] = useState<string>('');

	const [errorMsg, setErrorMsg] = useState<string | null>(null);

	const getUserLocation = async () => {
		setGetLocationPressed(true);
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
			return;
		}

		let location = await Location.getCurrentPositionAsync({});
		setLocation(JSON.stringify(location));
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

	const [currentContext, setCurrentContext] = useState<
		'LocationSet' | 'ChooseVehicle' | 'LookingForDriver' | 'RideArriving'
	>('LocationSet');

	const [findProgress, setFindProgress] = useState<number>(0);

	useEffect(() => {
		if (currentContext === 'LookingForDriver') {
			let progress = 0;
			const interval = setInterval(() => {
				progress += 2;
				setFindProgress(progress);
				if (progress === 100) {
					clearInterval(interval);
					setCurrentContext('RideArriving');
				}
			}, 100);

			return () => clearInterval(interval);
		}
		if (currentContext === 'RideArriving') {
			let progress = 0;
			const interval = setInterval(() => {
				progress += 1;
				setArriveProgress(progress);
				if (progress === 100) {
					clearInterval(interval);
				}
			}, 100);

			return () => clearInterval(interval);
		}
	}, [currentContext]);

	const [arriveProgress, setArriveProgress] = useState<number>(0);

	return (
		<KeyboardAvoidingView style={tw`flex-1`} behavior="padding">
			<TouchableWithoutFeedback
				onPress={() => {
					Keyboard.dismiss(); // Dismiss keyboard only when tapping outside
				}}
			>
				<GestureHandlerRootView style={tw`flex-1`}>
					{currentContext === 'LocationSet' && (
						<TouchableOpacity
							style={tw`flex items-center justify-center w-12 aspect-square bg-blue rounded-full absolute bottom-4 right-4 z-50`}
							onPress={() => setCurrentContext('ChooseVehicle')}
						>
							<SvgXml xml={iconNextArrow} />
						</TouchableOpacity>
					)}
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
							{currentContext === 'LocationSet' && (
								<>
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
													value={getLocationPressed ? text : location}
													onChangeText={value => setLocation(value)}
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
														<Text
															style={tw`text-xs font-manropeRegular text-gray`}
														>
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
														<Text
															style={tw`text-xs font-manropeRegular text-gray`}
														>
															{location.to}
														</Text>
													</View>
												</TouchableOpacity>
												<Divider />
											</View>
										))}
									</View>
								</>
							)}
							{currentContext === 'ChooseVehicle' && (
								<>
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
													value={getLocationPressed ? text : location}
													onChangeText={value => setLocation(value)}
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
									{availableVehicles.map((vehicle, index) => (
										<View
											key={vehicle.id}
											style={tw`flex flex-col w-full gap-4`}
										>
											<TouchableOpacity
												style={tw`flex flex-row flex-1 gap-4 items-center justify-between`}
											>
												<View style={tw`flex flex-row items-center gap-4`}>
													{vehicle.type === 'Van' && (
														<Image
															source={require(`../../../../../assets/images/Van.png`)}
															style={tw`h-16 w-16`}
															contentFit="contain"
														/>
													)}
													{vehicle.type === '6 Seater' && (
														<Image
															source={require(`../../../../../assets/images/6 Seater.png`)}
															style={tw`h-16 w-16`}
															contentFit="contain"
														/>
													)}
													{vehicle.type === '4 Seater' && (
														<Image
															source={require(`../../../../../assets/images/4 Seater.png`)}
															style={tw`h-16 w-16`}
															contentFit="contain"
														/>
													)}
													<View style={tw`flex flex-col`}>
														<Text style={tw`font-manropeSemiBold text-sm`}>
															{vehicle.type}
														</Text>
														<Text
															style={tw`text-xs font-manropeRegular text-gray`}
														>
															{vehicle.distance}
														</Text>
													</View>
												</View>
												<View
													style={tw`flex flex-col items-end justify-center`}
												>
													<Text style={tw`font-manropeSemiBold text-sm`}>
														₱{vehicle.fare}
													</Text>
													<Text
														style={tw`text-xs font-manropeRegular text-gray`}
													>
														{vehicle.capacity} Seats
													</Text>
												</View>
											</TouchableOpacity>
											{index < availableVehicles.length - 1 && <Divider />}
										</View>
									))}
									<View style={tw`flex w-full items-center gap-2`}>
										<FullRoundedButton
											text="Confirm"
											onPress={() => setCurrentContext('LookingForDriver')}
										/>
										<TouchableOpacity
											style={tw`bg-white border border-blue py-3 rounded-full w-full flex justify-center items-center`}
											onPress={() => setCurrentContext('LocationSet')}
										>
											<Text
												style={tw`font-manropeSemiBold text-blue text-base`}
											>
												Cancel
											</Text>
										</TouchableOpacity>
									</View>
								</>
							)}
							{currentContext === 'LookingForDriver' && (
								<>
									<View style={tw`flex flex-col w-full items-center gap-4`}>
										<Text style={tw`font-manropeSemiBold text-lg`}>
											Looking for nearby drivers
										</Text>
										<View style={tw`w-full h-0.3`}>
											<View style={tw`w-${findProgress}% h-full bg-blue`} />
										</View>
									</View>
									<View style={tw`flex flex-row w-full`}>
										<View style={tw`flex flex-col flex-1 gap-4`}>
											<View style={tw`flex flex-row items-center gap-4`}>
												<SvgXml
													xml={iconDetectLocation}
													width={20}
													height={20}
												/>
												<Text style={tw`font-manropeSemiBold`}>{location}</Text>
											</View>
											<Divider />
											<View style={tw`flex flex-row items-center gap-4`}>
												<SvgXml
													xml={iconDropDestination}
													width={20}
													height={20}
												/>
												<Text style={tw`font-manropeSemiBold`}>
													{destination}
												</Text>
											</View>
											<View
												style={tw`flex flex-row items-center px-4 py-2 bg-white rounded-lg shadow-sm`}
											>
												<View style={tw`flex flex-col items-center flex-1`}>
													<Text
														style={tw`text-sm font-manropeRegular text-gray`}
													>
														Distance
													</Text>
													<Text style={tw`text-sm font-manropeSemiBold`}>
														5.2 km
													</Text>
												</View>
												<View style={tw`flex flex-col items-center flex-1`}>
													<Text
														style={tw`text-sm font-manropeRegular text-gray`}
													>
														Price
													</Text>
													<Text style={tw`text-sm font-manropeSemiBold`}>
														₱ 7200
													</Text>
												</View>
											</View>
										</View>
										<View
											style={tw`flex flex-col justify-end items-center flex-1`}
										>
											<Image
												source={require('../../../../../assets/images/shadow.png')}
												style={tw`w-34 h-12 absolute bottom-2`}
												contentFit="contain"
											/>
											<Image
												source={require('../../../../../assets/images/Van.png')}
												style={tw`h-24 w-24 `}
												contentFit="contain"
											/>
										</View>
									</View>
									<FullRoundedButton
										text="Cancel Ride"
										onPress={() => setCurrentContext('ChooseVehicle')}
									/>
								</>
							)}
							{currentContext === 'RideArriving' && (
								<>
									<View style={tw`flex flex-col w-full items-center gap-4`}>
										<View
											style={tw`flex flex-row items-center justify-between w-full`}
										>
											<Text style={tw`font-manropeBold`}>Car is arriving</Text>
											<Text style={tw`font-manropeSemiBold text-sm text-gray`}>
												in 5 mins
											</Text>
										</View>
										<View style={tw`w-full h-0.3`}>
											<View style={tw`w-${arriveProgress}% h-full bg-blue`} />
										</View>
									</View>
									<View
										style={tw`flex flex-row items-center justify-between w-full`}
									>
										<View style={tw`flex flex-row items-center`}>
											<View
												style={tw`flex items-center justify-center w-18 h-18 bg-white border-2 border-blue rounded-full`}
											>
												<Image
													source={require('../../../../../assets/images/profile photo.jpg')}
													style={tw`w-15 h-15 rounded-full`}
													contentFit="cover"
												/>
											</View>
											<View style={tw`flex flex-col ml-4`}>
												<Text style={tw`text-base font-manropeBold`}>
													Zohran Mamdani
												</Text>
												<Text style={tw`text-sm font-manropeRegular text-gray`}>
													Plate No. ABC-1234
												</Text>
												<View
													style={tw`flex flex-row items-center justify-start gap-2`}
												>
													<SvgXml xml={iconStar} />
													<Text
														style={tw`text-sm font-manropeRegular text-gray`}
													>
														4.8 Rating
													</Text>
												</View>
											</View>
										</View>
										<TouchableOpacity
											style={tw`flex items-center justify-center p-3 bg-blue rounded-full shadow-md`}
										>
											<SvgXml xml={iconCall} />
										</TouchableOpacity>
									</View>
									<View
										style={tw`flex flex-row items-center justify-center gap-14 w-full`}
									>
										<View
											style={tw`flex flex-col items-center justify-center gap-3`}
										>
											<Text style={tw`text-sm font-manropeRegular text-gray`}>
												Price
											</Text>
											<Text style={tw`font-manropeSemiBold`}>₱ 7200</Text>
										</View>
										<View
											style={tw`flex flex-col items-center justify-center gap-3`}
										>
											<Text style={tw`text-sm font-manropeRegular text-gray`}>
												Vehicle Model
											</Text>
											<Text style={tw`font-manropeSemiBold`}>
												Toyota Innova
											</Text>
										</View>
										<View
											style={tw`flex flex-col items-center justify-center gap-3`}
										>
											<Text style={tw`text-sm font-manropeRegular text-gray`}>
												Capacity
											</Text>
											<Text style={tw`font-manropeSemiBold`}>4 Seater</Text>
										</View>
									</View>
									<FullRoundedButton
										text="Cancel Ride"
										onPress={() => setCurrentContext('ChooseVehicle')}
									/>
								</>
							)}
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

const availableVehicles = [
	{
		id: 1,
		type: 'Van',
		distance: '2.5 km away',
		fare: 3400,
		capacity: 7,
	},
	{
		id: 2,
		type: '6 Seater',
		distance: '3.0 km away',
		fare: 4500,
		capacity: 6,
	},
	{
		id: 3,
		type: '4 Seater',
		distance: '1.5 km away',
		fare: 2500,
		capacity: 4,
	},
];

//₱
