import { iconCalendar, iconEditWhite } from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function EditProfile() {
	const router = useRouter();
	const [date, setDate] = useState(userData.dateOfBirth);
	const [showDatePicker, setShowDatePicker] = useState(false);

	const [isGoogleEnabled, setIsGoogleEnabled] = useState(true);
	const toggleGoogleSwitch = () =>
		setIsGoogleEnabled(previousState => !previousState);

	const [isFacebookEnabled, setIsFacebookEnabled] = useState(false);
	const toggleFacebookSwitch = () =>
		setIsFacebookEnabled(previousState => !previousState);

	const onChangeDate = (event: any, selectedDate?: Date) => {
		const currentDate = selectedDate || date;
		if (currentDate > new Date()) {
			alert('Date of birth cannot be in the future.');
			return;
		}
		setShowDatePicker(false);
		setDate(currentDate);
	};

	const [image, setImage] = useState<string | null>(null);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<PageWrapper>
			<View style={tw`flex items-center justify-center`}>
				<Image
					source={require('../../../../assets/images/profile photo.jpg')}
					style={tw`w-30 h-30 rounded-full`}
				/>
				<TouchableOpacity
					style={tw`flex items-center justify-center p-0.5 absolute bottom-2 right-2 bg-white rounded-full`}
					onPress={pickImage}
				>
					{image && <Image source={{ uri: image }} />}
					<View
						style={tw`flex items-center justify-center p-2 bg-blue rounded-full`}
					>
						<SvgXml xml={iconEditWhite} />
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={tw`flex flex-col w-full p-4 border border-lightGray rounded-lg gap-2`}
			>
				<Text style={tw`text-base font-manropeSemiBold`}>Basic Details</Text>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Name</Text>
					<TextInput
						style={tw`border border-lightGray rounded-lg p-2`}
						placeholder={userData.name}
					/>
				</View>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Email</Text>
					<TextInput
						style={tw`border border-lightGray rounded-lg p-2`}
						placeholder={userData.email}
					/>
				</View>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Phone</Text>
					<TextInput
						style={tw`border border-lightGray rounded-lg p-2`}
						placeholder={userData.phone}
					/>
				</View>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Date of Birth</Text>
					<View style={tw`border border-lightGray rounded-lg p-2`}>
						<TouchableOpacity
							style={tw`flex flex-row items-center gap-2`}
							onPress={() => setShowDatePicker(true)}
						>
							<SvgXml xml={iconCalendar} width={16} height={16} />
							<Text>{date.toLocaleDateString()}</Text>
						</TouchableOpacity>
						{showDatePicker && (
							<DateTimePicker
								value={date}
								mode="date"
								display="spinner"
								onChange={onChangeDate}
								style={tw`w-full`}
								maximumDate={new Date()}
							/>
						)}
					</View>
				</View>
			</View>
			<View
				style={tw`flex flex-col w-full p-4 border border-lightGray rounded-lg gap-2`}
			>
				<Text style={tw`text-base font-manropeSemiBold`}>Linked Accounts</Text>
				<View style={tw`flex flex-row w-full items-center justify-between`}>
					<View style={tw`flex flex-row items-center gap-2`}>
						<Image
							source={require('../../../../assets/images/google.png')}
							style={tw`w-6 h-6`}
						/>
						<Text style={tw`text-sm font-manropeRegular`}>Google</Text>
					</View>
					<Switch
						trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
						thumbColor={isGoogleEnabled ? '#FFFFFF' : '#A0A0A0'}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleGoogleSwitch}
						value={isGoogleEnabled}
					/>
				</View>
				<View style={tw`flex flex-row w-full items-center justify-between`}>
					<View style={tw`flex flex-row items-center gap-2`}>
						<Image
							source={require('../../../../assets/images/facebook.png')}
							style={tw`w-6 h-6`}
						/>
						<Text style={tw`text-sm font-manropeRegular`}>Facebook</Text>
					</View>
					<Switch
						trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
						thumbColor={isFacebookEnabled ? '#FFFFFF' : '#A0A0A0'}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleFacebookSwitch}
						value={isFacebookEnabled}
					/>
				</View>
			</View>
			<FullRoundedButton text="Update Profile" onPress={() => {}} />
		</PageWrapper>
	);
}

const userData = {
	name: 'Zoe Trivianni',
	email: 'zoe.trivianni@example.com',
	phone: '+1 (555) 123-4567',
	dateOfBirth: new Date(1996, 10, 17),
};
