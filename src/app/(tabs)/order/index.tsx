import {
	iconCall,
	iconClockBlue,
	iconConfirmed,
	iconDelivered,
	iconOnTheWay,
	iconPickup,
	iconPin,
	iconStar,
} from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Order() {
	return (
		<View style={tw`flex flex-col flex-1 w-full bg-white`}>
			<View
				style={tw`flex flex-row items-start justify-between w-full px-2 mb-2`}
			>
				<View
					style={tw`h-1 w-8/10 bg-gray absolute top-1/4 left-1/2 -translate-x-1/2 flex items-start justify-center`}
				>
					<View style={tw`h-full w-2/9 bg-blue`} />
				</View>
				<View style={tw`flex flex-col items-center justify-center gap-2 w-20`}>
					<View style={tw`flex items-center justify-center p-1 bg-white`}>
						<View
							style={tw`flex items-center justify-center p-2 bg-white rounded-full shadow-sm`}
						>
							<SvgXml xml={iconConfirmed} />
						</View>
					</View>
					<Text style={tw`text-xs font-manropeRegular text-center`}>
						Order Confirmed
					</Text>
				</View>
				<View style={tw`flex flex-col items-center justify-center gap-2 w-20`}>
					<View style={tw`flex items-center justify-center p-1 bg-white`}>
						<View
							style={tw`flex items-center justify-center p-2 bg-white rounded-full shadow-sm`}
						>
							<SvgXml xml={iconPickup} />
						</View>
					</View>
					<Text style={tw`text-xs font-manropeRegular text-center`}>
						Pick Up
					</Text>
				</View>
				<View style={tw`flex flex-col items-center justify-center gap-2 w-20`}>
					<View style={tw`flex items-center justify-center p-1 bg-white`}>
						<View
							style={tw`flex items-center justify-center p-2 bg-white rounded-full shadow-sm`}
						>
							<SvgXml xml={iconOnTheWay} />
						</View>
					</View>
					<Text style={tw`text-xs font-manropeRegular text-center`}>
						On The Way
					</Text>
				</View>
				<View style={tw`flex flex-col items-center justify-center gap-2 w-20`}>
					<View style={tw`flex items-center justify-center p-1 bg-white`}>
						<View
							style={tw`flex items-center justify-center p-2 bg-white rounded-full shadow-sm`}
						>
							<SvgXml xml={iconDelivered} />
						</View>
					</View>
					<Text style={tw`text-xs font-manropeRegular text-center`}>
						Delivered
					</Text>
				</View>
			</View>
			<Image
				source={require('../../../../assets/images/map.png')}
				style={tw`w-full h-5/6`}
				contentFit="cover"
			/>
			<View style={tw`flex w-full absolute bottom-0 gap-4`}>
				<LinearGradient
					colors={['transparent', '#FFFFFF', '#FFFFFF', '#FFFFFF']}
					style={tw`absolute top-0 left-0 right-0 bottom-0 w-full h-full`}
				/>
				<View style={tw`flex flex-col w-full px-4 gap-4`}>
					<View style={tw`flex flex-row items-center justify-start w-full`}>
						<View
							style={tw`flex items-center justify-center w-18 h-18 bg-white border-2 border-blue rounded-full`}
						>
							<Image
								source={require('../../../../assets/images/profile photo.jpg')}
								style={tw`w-15 h-15 rounded-full`}
								contentFit="cover"
							/>
						</View>
						<View style={tw`flex flex-col ml-4`}>
							<Text style={tw`text-base font-manropeBold`}>Zoye Trivianni</Text>
							<Text style={tw`text-sm font-manropeRegular text-gray`}>
								Plate No. ABC-1234
							</Text>
							<View style={tw`flex flex-row items-center justify-start gap-2`}>
								<SvgXml xml={iconStar} />
								<Text style={tw`text-sm font-manropeRegular text-gray`}>
									4.8 Rating
								</Text>
							</View>
						</View>
					</View>
					<View style={tw`flex flex-col w-full p-4 gap-4`}>
						<View style={tw`flex flex-row items-center justify-start gap-3`}>
							<SvgXml xml={iconClockBlue} />
							<View style={tw`flex flex-col`}>
								<Text style={tw`text-xs font-manropeRegular text-gray`}>
									Estimated Arrival
								</Text>
								<Text style={tw`text-base font-manropeRegular`}>12:30 PM</Text>
							</View>
						</View>
						<View
							style={tw`flex flex-row w-full items-center justify-start gap-3`}
						>
							<SvgXml xml={iconPin} />
							<View style={tw`flex flex-col`}>
								<Text style={tw`text-xs font-manropeRegular text-gray`}>
									Your Location
								</Text>
								<Text style={tw`text-base font-manropeRegular`}>
									30 Street, Paco
								</Text>
							</View>
						</View>
						<TouchableOpacity
							style={tw`absolute bottom-0 right-0 flex items-center justify-center p-3 bg-blue rounded-full shadow-md`}
						>
							<SvgXml xml={iconCall} />
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={tw`flex items-center justify-center w-full border border-blue rounded-full bg-white py-3`}
						onPress={() => router.push('/order/order-details')}
					>
						<Text style={tw`text-sm font-manropeBold text-blue`}>
							Order Details
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
