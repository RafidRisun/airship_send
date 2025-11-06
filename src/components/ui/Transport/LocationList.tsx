import { iconDetectLocation, iconDropDestination } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import * as Location from 'expo-location';
import React, { useCallback, useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function LocationList() {
	const bottomSheetRef = useRef<BottomSheet>(null);

	// callbacks
	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);

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

	return (
		<BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
			<BottomSheetView style={tw`flex items-center justify-start p-4`}>
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
							/>
						</TouchableOpacity>
					</View>
				</View>
			</BottomSheetView>
		</BottomSheet>
	);
}
