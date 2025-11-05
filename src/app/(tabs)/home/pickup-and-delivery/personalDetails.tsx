import { iconAddressGray, iconCallGray, iconUserGray } from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function PersonalDetails() {
	const router = useRouter();
	return (
		<PageWrapper>
			<View
				style={tw`flex flex-row items-start justify-between w-80 px-4 mb-2`}
			>
				<View style={tw`flex flex-col items-center justify-center gap-2`}>
					<View
						style={tw`w-6 h-6 bg-blue rounded-full flex items-center justify-center`}
					>
						<View style={tw`w-3 h-3 bg-white rounded-full`} />
					</View>
					<View style={tw`w-20 h-1 bg-lightGray absolute top-2.5 left-12`} />
					<Text
						style={tw`text-xs text-blue font-manropeSemiBold text-center w-17`}
					>
						Personal Details
					</Text>
				</View>
				<View style={tw`flex flex-col items-center justify-center gap-2`}>
					<View
						style={tw`w-6 h-6 bg-lightGray rounded-full flex items-center justify-center`}
					/>
					<View style={tw`w-20 h-1 bg-lightGray absolute top-2.5 left-12`} />
					<Text
						style={tw`text-xs text-gray font-manropeSemiBold text-center w-17`}
					>
						Package Description
					</Text>
				</View>
				<View style={tw`flex flex-col items-center justify-center gap-2`}>
					<View
						style={tw`w-6 h-6 bg-lightGray rounded-full flex items-center justify-center`}
					/>
					<Text
						style={tw`text-xs text-gray font-manropeSemiBold text-center w-17`}
					>
						Payment Details
					</Text>
				</View>
			</View>
			<View
				style={tw`flex flex-col w-full p-4 border border-lightGray rounded-lg gap-2`}
			>
				<Text style={tw`text-base font-manropeSemiBold`}>Pickup Details</Text>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Sender Name</Text>
					<View
						style={tw`border border-lightGray rounded-lg px-4 gap-2 flex flex-row items-center`}
					>
						<SvgXml xml={iconUserGray} />
						<TextInput placeholder="Zohran Mamdani" style={tw`flex-1`} />
					</View>
				</View>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Address</Text>
					<View
						style={tw`border border-lightGray rounded-lg px-4 gap-2 flex flex-row items-center`}
					>
						<SvgXml xml={iconAddressGray} />
						<TextInput
							placeholder="123 Main St, Springfield"
							style={tw`flex-1`}
						/>
					</View>
				</View>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Phone</Text>
					<View
						style={tw`border border-lightGray rounded-lg px-4 gap-2 flex flex-row items-center`}
					>
						<SvgXml xml={iconCallGray} />
						<TextInput
							placeholder="+1234567890"
							style={tw`flex-1`}
							keyboardType="numeric"
						/>
					</View>
				</View>
			</View>
			<View
				style={tw`flex flex-col w-full p-4 border border-lightGray rounded-lg gap-2`}
			>
				<Text style={tw`text-base font-manropeSemiBold`}>Drop Off Details</Text>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Receiver Name</Text>
					<View
						style={tw`border border-lightGray rounded-lg px-4 gap-2 flex flex-row items-center`}
					>
						<SvgXml xml={iconUserGray} />
						<TextInput placeholder="Zohran Mamdani" style={tw`flex-1`} />
					</View>
				</View>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Address</Text>
					<View
						style={tw`border border-lightGray rounded-lg px-4 gap-2 flex flex-row items-center`}
					>
						<SvgXml xml={iconAddressGray} />
						<TextInput
							placeholder="123 Main St, Springfield"
							style={tw`flex-1`}
						/>
					</View>
				</View>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Phone</Text>
					<View
						style={tw`border border-lightGray rounded-lg px-4 gap-2 flex flex-row items-center`}
					>
						<SvgXml xml={iconCallGray} />
						<TextInput
							placeholder="+1234567890"
							style={tw`flex-1`}
							keyboardType="numeric"
						/>
					</View>
				</View>
			</View>
			<FullRoundedButton
				text="Next"
				onPress={() => {
					router.push('/home/pickup-and-delivery/packageDescription');
				}}
			/>
		</PageWrapper>
	);
}
