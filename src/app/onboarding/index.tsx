import { iconNextButton, iconOnboarding } from '@/assets/icons';
import OnBoardingWrapper from '@/src/components/onBoardingWrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Index() {
	const router = useRouter();
	return (
		<OnBoardingWrapper>
			<View style={tw`flex flex-col gap-20 flex-1 justify-center items-center`}>
				<Image
					source={require('../../../assets/images/onboarding1.png')}
					style={tw`w-80 h-80`}
					contentFit="contain"
				/>
				<View style={tw`flex h-40 justify-between items-center w-80`}>
					<View style={tw`flex justify-center items-center w-80 gap-3`}>
						<Text style={tw`text-2xl font-manropeBold`}>
							Craving Something?
						</Text>
						<Text style={tw`text-center font-manropeRegular`}>
							Browse menus, place your order, and we’ll deliver it hot and
							fresh—straight to your door. Let’s get you fed!
						</Text>
					</View>
					<SvgXml xml={iconOnboarding} />
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
							router.push('/onboarding/onboarding2');
						}}
					>
						<SvgXml xml={iconNextButton} />
					</TouchableOpacity>
				</View>
			</View>
		</OnBoardingWrapper>
	);
}
