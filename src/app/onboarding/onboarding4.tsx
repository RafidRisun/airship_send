import { iconNextButton, iconOnboarding4 } from '@/assets/icons';
import OnBoardingWrapper from '@/src/components/onBoardingWrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Onboarding4() {
	const router = useRouter();
	return (
		<OnBoardingWrapper>
			<View style={tw`flex flex-col gap-20 flex-1 justify-center items-center`}>
				<Image
					source={require('../../../assets/images/onboarding4.png')}
					style={tw`w-90 h-80`}
					contentFit="contain"
				/>
				<View style={tw`flex h-40 justify-between items-center w-80`}>
					<View style={tw`flex justify-center items-center w-80 gap-3`}>
						<Text style={tw`text-2xl font-manropeBold`}>To Do List?</Text>
						<Text style={tw`text-center font-manropeRegular`}>
							Consider it to-done. We’ll run your errands while you run the
							world.
						</Text>
					</View>
					<SvgXml xml={iconOnboarding4} />
				</View>
				<View
					style={tw`flex flex-row items-center justify-between w-full p-7 absolute bottom-0`}
				>
					<TouchableOpacity
						onPress={() => {
							router.push('/auth');
						}}
					>
						<Text style={tw`font-manropeSemiBold text-gray text-base`}>
							SKIP
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							router.push('/onboarding/onboarding5');
						}}
					>
						<SvgXml xml={iconNextButton} />
					</TouchableOpacity>
				</View>
			</View>
		</OnBoardingWrapper>
	);
}
