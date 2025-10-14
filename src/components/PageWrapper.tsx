import React from 'react';
import {
	Keyboard,
	ScrollView,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import tw from '../lib/tailwind';

export default function PageWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		//<SafeAreaView style={tw`flex flex-1 bg-white`}>
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={tw`flex flex-1 bg-white`}
		>
			<TouchableWithoutFeedback
				onPress={() => {
					Keyboard.dismiss();
				}}
			>
				<View
					style={tw`flex flex-col w-full flex-1 items-center justify-start bg-white gap-5 p-4 pb-30`}
				>
					{children}
				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
		//</SafeAreaView>
	);
}
