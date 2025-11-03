import FullRoundedButton from '@/src/components/FullRoundedButton';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React from 'react';
import {
	Keyboard,
	Switch,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

export default function EditAddress() {
	const [homeSelected, setHomeSelected] = React.useState(true);
	const [workSelected, setWorkSelected] = React.useState(false);
	const [isDefaultAddress, setIsDefaultAddress] = React.useState(false);
	const toggleDefaultAddressSwitch = () =>
		setIsDefaultAddress(previousState => !previousState);

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={tw`flex-1 bg-white`}>
				<Image
					source={require('../../../../assets/images/addressMap.png')}
					style={tw`flex-1 w-full rounded-lg`}
				/>
				<View style={tw`flex px-4 absolute bottom-0 w-full gap-2`}>
					<View style={tw`flex flex-col gap-4 bg-white rounded-xl p-4`}>
						<Text style={tw`text-base font-manropeBold`}>Choose From Map</Text>
						<View style={tw`flex flex-col gap-2 w-full`}>
							<Text style={tw`text-sm font-manropeSemiBold`}>Address</Text>
							<TextInput
								style={tw`border border-lightGray rounded-lg p-2`}
								placeholder={'Home, Work, etc.'}
							/>
						</View>
						<View style={tw`flex flex-col gap-2 w-full`}>
							<Text style={tw`text-sm font-manropeSemiBold`}>Label As</Text>
							<View style={tw`flex flex-row items-center gap-12`}>
								<View style={tw`flex flex-row items-center gap-2`}>
									<TouchableOpacity
										style={tw`w-3 h-3 ${
											homeSelected ? 'bg-blue' : 'bg-white border border-gray'
										} rounded-full`}
										onPress={() => {
											setHomeSelected(true);
											setWorkSelected(false);
										}}
									/>
									<Text style={tw`text-sm font-manropeSemiBold`}>Home</Text>
								</View>
								<View style={tw`flex flex-row items-center gap-2`}>
									<TouchableOpacity
										style={tw`w-3 h-3 ${
											workSelected ? 'bg-blue' : 'bg-white border border-gray'
										} rounded-full`}
										onPress={() => {
											setWorkSelected(true);
											setHomeSelected(false);
										}}
									/>
									<Text style={tw`text-sm font-manropeSemiBold`}>Work</Text>
								</View>
							</View>
						</View>
						<View style={tw`flex flex-row items-center justify-between w-full`}>
							<Text style={tw`text-sm font-manropeSemiBold`}>
								Set As Default Address
							</Text>
							<Switch
								trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
								thumbColor={isDefaultAddress ? '#FFFFFF' : '#A0A0A0'}
								ios_backgroundColor="#3e3e3e"
								onValueChange={toggleDefaultAddressSwitch}
								value={isDefaultAddress}
							/>
						</View>
					</View>
					<FullRoundedButton text="Update Address" onPress={() => {}} />
					<TouchableOpacity
						style={tw`bg-white border border-red-500 py-3 rounded-full w-full flex justify-center items-center`}
						onPress={() => {}}
					>
						<Text style={tw`font-manropeSemiBold text-red-500 text-base`}>
							Delete Address
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
