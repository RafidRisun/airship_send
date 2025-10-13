import Carousel from '@/src/components/ui/Home/Carousel';
import Categories from '@/src/components/ui/Home/Categories';
import FeaturedRestaurants from '@/src/components/ui/Home/FeaturedRestaurants';
import ProfileAndLocation from '@/src/components/ui/Home/ProfileAndLocation';
import SearchBar from '@/src/components/ui/Home/SearchBar';
import Services from '@/src/components/ui/Home/Services';
import tw from '@/src/lib/tailwind';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	Keyboard,
	ScrollView,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
//import { View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
	return (
		<SafeAreaView style={tw`flex flex-1 bg-white`}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<TouchableWithoutFeedback
					onPress={() => {
						Keyboard.dismiss();
					}}
				>
					<View style={tw`flex flex-col w-full flex-1 bg-white gap-4 p-4`}>
						<StatusBar style="dark" />

						<ProfileAndLocation />
						<SearchBar />
						<Carousel />
						<Services />
						<Categories />
						<FeaturedRestaurants />
					</View>
				</TouchableWithoutFeedback>
			</ScrollView>
		</SafeAreaView>
	);
}
