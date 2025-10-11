import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
	Keyboard,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

export default function AuthWrapper({
	children,
	skippable,
}: {
	children: React.ReactNode;
	skippable?: boolean;
}) {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={tw`flex flex-1 pt-7 justify-start items-center bg-white`}>
				<LinearGradient
					colors={['#017ADF', 'black', 'black']}
					style={tw`absolute inset-0`}
				/>
				<Image
					source={require('../../assets/images/authImage.png')}
					style={tw`w-full h-35 mt-5 mb-3`}
					contentFit="contain"
				/>
				<View
					style={tw`flex flex-col flex-1 items-center justify-start bg-white w-full rounded-t-[40px] py-5 px-8`}
				>
					<View style={tw`flex flex-row w-full h-5 items-center justify-end`}>
						{skippable && (
							<TouchableOpacity>
								<Text style={tw`font-manropeSemiBold text-base text-gray`}>
									Skip
								</Text>
							</TouchableOpacity>
						)}
					</View>
					<Image
						source={require('../../assets/images/logo.png')}
						style={tw`w-48 h-11`}
						contentFit="contain"
					/>
					{children}
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
