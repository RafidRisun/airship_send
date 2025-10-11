import { iconPickupAndDelivery } from '@/assets/icons';
import Carousel from '@/src/components/ui/Home/Carousel';
import ProfileAndLocation from '@/src/components/ui/Home/ProfileAndLocation';
import SearchBar from '@/src/components/ui/Home/SearchBar';
import tw from '@/src/lib/tailwind';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function Index() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
			<StatusBar style="dark" />
			<TouchableWithoutFeedback>
				<View style={tw`flex-1 items-center justify-start bg-white p-4 gap-5`}>
					<ProfileAndLocation />
					<SearchBar />
					<Carousel />
					<View style={tw`flex flex-col w-full gap-3`}>
						<Text style={tw`text-lg font-manropeSemiBold`}>Services</Text>
						<View
							style={tw`flex flex-row w-full items-center justify-center gap-2`}
						>
							<View
								style={tw`flex flex-col w-14 items-center justify-center gap-2`}
							>
								<TouchableOpacity
									style={tw`flex w-14 h-14 items-center justify-center bg-white shadow-md rounded-full`}
								>
									<SvgXml xml={iconPickupAndDelivery} />
								</TouchableOpacity>
								<Text style={tw`text-xs text-center font-manropeSemiBold`}>
									Pickup & Delivery
								</Text>
							</View>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
}
