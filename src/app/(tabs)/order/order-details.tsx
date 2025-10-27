import { iconPickupAndDelivery } from '@/assets/icons';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function OrderDetails() {
	return (
		<PageWrapper>
			<View style={tw`flex flex-row w-full items-center gap-4`}>
				<View
					style={tw`flex items-center justify-center p-3 bg-white rounded-full shadow-md`}
				>
					<SvgXml xml={iconPickupAndDelivery} width={25} height={25} />
				</View>
				<View style={tw`flex flex-col items-start justify-center`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>
						Order ID:{' '}
						<Text style={tw`text-xs font-manropeSemiBold text-blue`}>
							despacito1337
						</Text>
					</Text>
					<View style={tw`flex flex-row items-center justify-center gap-2`}>
						<Text style={tw`text-xs text-gray font-manropeRegular`}>
							Arriving at 2:40 pm
						</Text>
						<Text>•</Text>
						<Text style={tw`text-xs text-gray font-manropeRegular`}>
							Out for Delivery
						</Text>
					</View>
				</View>
			</View>
			<View
				style={tw`flex flex-row w-full gap-6 p-4 border border-lightGray rounded-xl`}
			>
				<View style={tw`flex flex-col items-center justify-between gap-1 py-2`}>
					<View style={tw`w-2 h-2 bg-blue rounded-full`} />
					<View style={tw`w-0.5 flex-1 bg-blue`} />
					<View style={tw`w-2 h-2 bg-gray rounded-full`} />
				</View>
				<View style={tw`flex flex-col items-center justify-between gap-1`}>
					<View style={tw`flex flex-col flex-1 justify-start`}>
						<Text style={tw`text-xs text-gray font-manropeRegular`}>From</Text>
						<Text style={tw`text-sm font-manropeSemiBold`}>
							02 Street, Manila
						</Text>
						<Text style={tw`text-xs text-gray font-manropeRegular`}>
							Sender Name- 06315636342
						</Text>
					</View>
					<View style={tw`flex flex-col flex-1 justify-start`}>
						<Text style={tw`text-xs text-gray font-manropeRegular`}>From</Text>
						<Text style={tw`text-sm font-manropeSemiBold`}>
							02 Street, Manila
						</Text>
						<Text style={tw`text-xs text-gray font-manropeRegular`}>
							Sender Name- 06315636342
						</Text>
					</View>
				</View>
			</View>
			<View
				style={tw`flex flex-col w-full gap-4 p-4 border border-lightGray rounded-xl`}
			>
				<Text style={tw`text-sm font-manropeBold`}>Package Details</Text>
			</View>
		</PageWrapper>
	);
}
