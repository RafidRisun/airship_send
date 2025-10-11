import Carousel from '@/src/components/ui/Home/Carousel';
import Categories from '@/src/components/ui/Home/Categories';
import ProfileAndLocation from '@/src/components/ui/Home/ProfileAndLocation';
import SearchBar from '@/src/components/ui/Home/SearchBar';
import Services from '@/src/components/ui/Home/Services';
import tw from '@/src/lib/tailwind';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { View } from 'react-native';

export default function Index() {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<SafeAreaView style={tw`flex flex-col flex-1 bg-white gap-4 p-4`}>
				<StatusBar style="dark" />

				<ProfileAndLocation />
				<SearchBar />
				<Carousel />
				<Services />
				<Categories />
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
}
