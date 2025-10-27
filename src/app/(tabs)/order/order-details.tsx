import {
	iconContactCall,
	iconContactName,
	iconInstruction,
	iconPickup,
	iconPickupAndDelivery,
	iconWallet,
} from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
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
				<Text style={tw`text-sm font-manropeBold`}>Delivery Details</Text>
				<View style={tw`flex flex-row w-full items-center gap-4`}>
					<SvgXml xml={iconPickup} width={25} height={25} />
					<View style={tw`flex flex-col`}>
						<Text style={tw`text-sm font-manropeRegular`}>1 Bag</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							5 Pieces of clothing
						</Text>
					</View>
				</View>
				<View style={tw`flex flex-row w-full items-center gap-4`}>
					<SvgXml xml={iconInstruction} width={25} height={25} />
					<View style={tw`flex flex-col`}>
						<Text style={tw`text-sm font-manropeRegular`}>
							Delivery Instruction
						</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Leave at the front door
						</Text>
					</View>
				</View>
			</View>
			<View
				style={tw`flex flex-col w-full gap-4 p-4 border border-lightGray rounded-xl`}
			>
				<Text style={tw`text-sm font-manropeBold`}>Rider Details</Text>
				<View style={tw`flex flex-row w-full items-center gap-4`}>
					<SvgXml xml={iconContactName} width={25} height={25} />
					<View style={tw`flex flex-col`}>
						<Text style={tw`text-sm font-manropeRegular`}>Rider Name</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Ghost Rider
						</Text>
					</View>
				</View>
				<View style={tw`flex flex-row w-full items-center gap-4`}>
					<SvgXml xml={iconContactCall} width={25} height={25} />
					<View style={tw`flex flex-col`}>
						<Text style={tw`text-sm font-manropeRegular`}>Rider Contact</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							06315636342
						</Text>
					</View>
				</View>
			</View>
			<View
				style={tw`flex flex-col w-full gap-4 p-4 border border-lightGray rounded-xl`}
			>
				<Text style={tw`text-sm font-manropeBold`}>Payment Details</Text>
				<View style={tw`flex flex-row w-full items-center gap-4`}>
					<SvgXml xml={iconWallet} width={25} height={25} />
					<View style={tw`flex flex-col`}>
						<Text style={tw`text-sm font-manropeRegular`}>Payment Method</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Cash on Delivery
						</Text>
					</View>
				</View>
				<View style={tw`w-full h-0.5 bg-lightGray`} />
				<View style={tw`flex flex-col w-full px-2 gap-2`}>
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<Text style={tw`text-sm font-manropeRegular`}>Product1 Price</Text>
						<Text style={tw`text-sm font-manropeSemiBold`}>₱ 1260</Text>
					</View>
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<Text style={tw`text-sm font-manropeRegular`}>Product2 Price</Text>
						<Text style={tw`text-sm font-manropeSemiBold`}>₱ 2630</Text>
					</View>
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<Text style={tw`text-sm font-manropeRegular`}>Delivery Fee</Text>
						<Text style={tw`text-sm font-manropeSemiBold`}>₱ 260</Text>
					</View>
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<Text style={tw`text-sm font-manropeRegular`}>Tax</Text>
						<Text style={tw`text-sm font-manropeSemiBold`}>₱ 65</Text>
					</View>
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<Text style={tw`text-sm font-manropeRegular`}>Tip</Text>
						<Text style={tw`text-sm font-manropeSemiBold`}>₱ 70</Text>
					</View>
					<View style={tw`w-full h-0.5 bg-lightGray`} />
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<Text style={tw`text-base font-manropeBold`}>Total</Text>
						<Text style={tw`text-base font-manropeBold`}>₱ 4360</Text>
					</View>
				</View>
			</View>
			<FullRoundedButton text="Cancel Order" onPress={() => {}} />
		</PageWrapper>
	);
}
