import { iconEnter } from '@/assets/icons';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function HelpCenter() {
	const router = useRouter();
	return (
		<PageWrapper>
			<Image
				source={require('../../../../assets/images/helpcenter.png')}
				style={tw`w-60 aspect-square`}
				contentFit="contain"
			/>
			<View
				style={tw`flex flex-col w-full gap-8 border border-lightGray rounded-lg p-4`}
			>
				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between`}
					onPress={() => {
						router.push('/(tabs)/profile/faq');
					}}
				>
					<View style={tw`flex flex-col gap-1`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>FAQ</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Frequently Asked Questions
						</Text>
					</View>
					<SvgXml xml={iconEnter} />
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between`}
					onPress={() => {}}
				>
					<View style={tw`flex flex-col gap-1`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>
							Raise Request Via External Link
						</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							To get help from our customer services
						</Text>
					</View>
					<SvgXml xml={iconEnter} />
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between`}
					onPress={() => {}}
				>
					<View style={tw`flex flex-col gap-1`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>Privacy tips</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Explore features to enhance your privacy
						</Text>
					</View>
					<SvgXml xml={iconEnter} />
				</TouchableOpacity>
			</View>
		</PageWrapper>
	);
}
