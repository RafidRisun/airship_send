import { iconOnboarding5 } from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import OnBoardingWrapper from '@/src/components/onBoardingWrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Onboarding5() {
	const router = useRouter();
	return (
		<OnBoardingWrapper>
			<View style={tw`flex flex-col gap-20 flex-1 justify-center items-center`}>
				<Image
					source={require('../../../assets/images/onboarding5.png')}
					style={tw`w-90 h-80`}
					contentFit="contain"
				/>
				<View style={tw`flex h-40 justify-between items-center w-80`}>
					<View style={tw`flex justify-center items-center w-80 gap-3`}>
						<Text style={tw`text-2xl font-manropeBold`}>Time to shop!</Text>
						<Text style={tw`text-center font-manropeRegular`}>
							Stuff your cart, chill out, and we’ll hustle your groceries and
							errands straight to your door—easy peasy,
						</Text>
					</View>
					<SvgXml xml={iconOnboarding5} />
				</View>
				<View
					style={tw`flex flex-row items-center justify-center w-full p-7 absolute bottom-0`}
				>
					<FullRoundedButton
						text="Get Started"
						onPress={() => router.push('/auth')}
					/>
				</View>
			</View>
		</OnBoardingWrapper>
	);
}
