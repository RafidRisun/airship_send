import { iconInvisible, iconLock, iconVisible } from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
	Keyboard,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ChangePassword() {
	const router = useRouter();
	const [values, setValues] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
	const [hidePassword, setHidePassword] = useState({
		current: true,
		new: true,
		confirm: true,
	});
	const [errors, setErrors] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});

	const handleChange =
		(field: 'currentPassword' | 'newPassword' | 'confirmPassword') =>
		(text: string) => {
			setValues(prev => ({ ...prev, [field]: text }));
		};

	const validate = () => {
		let valid = true;
		const newErrors = {
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
		};

		if (!values.currentPassword) {
			newErrors.currentPassword = 'Current password is required';
			valid = false;
		}
		if (!values.newPassword) {
			newErrors.newPassword = 'New password is required';
			valid = false;
		} else if (values.newPassword.length < 6) {
			newErrors.newPassword = 'Password must be at least 6 characters';
			valid = false;
		}
		if (values.confirmPassword !== values.newPassword) {
			newErrors.confirmPassword = 'Passwords do not match';
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	const handleSubmit = () => {
		if (validate()) {
			// Handle password change logic here (e.g., API call)
			alert('Password changed successfully!');
			router.back();
		}
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={tw`flex-1 bg-white p-4`}>
				<View style={tw`flex-1 bg-white gap-4 items-center`}>
					<View style={tw`flex flex-col gap-2 w-full`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>
							Current Password
						</Text>
						<View
							style={tw`w-full flex flex-row items-center justify-between gap-2 px-4 py-1 border-2 border-lightGray rounded-xl`}
						>
							<SvgXml xml={iconLock} width={18} />
							<TextInput
								placeholder="Enter your current password"
								value={values.currentPassword}
								onChangeText={handleChange('currentPassword')}
								style={tw`flex-1`}
								secureTextEntry={hidePassword.current}
							/>
							<TouchableOpacity
								style={tw`flex px-1 py-3`}
								onPress={() =>
									setHidePassword(prev => ({ ...prev, current: !prev.current }))
								}
							>
								<SvgXml
									xml={hidePassword.current ? iconVisible : iconInvisible}
								/>
							</TouchableOpacity>
						</View>
						{errors.currentPassword ? (
							<Text style={tw`text-xs text-red-500`}>
								{errors.currentPassword}
							</Text>
						) : null}
					</View>
					<View style={tw`flex flex-col gap-2 w-full`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>New Password</Text>
						<View
							style={tw`w-full flex flex-row items-center justify-between gap-2 px-4 py-1 border-2 border-lightGray rounded-xl`}
						>
							<SvgXml xml={iconLock} width={18} />
							<TextInput
								placeholder="Enter your new password"
								value={values.newPassword}
								onChangeText={handleChange('newPassword')}
								style={tw`flex-1`}
								secureTextEntry={hidePassword.new}
							/>
							<TouchableOpacity
								style={tw`flex px-1 py-3`}
								onPress={() =>
									setHidePassword(prev => ({ ...prev, new: !prev.new }))
								}
							>
								<SvgXml xml={hidePassword.new ? iconVisible : iconInvisible} />
							</TouchableOpacity>
						</View>
						{errors.newPassword ? (
							<Text style={tw`text-xs text-red-500`}>{errors.newPassword}</Text>
						) : null}
					</View>
					<View style={tw`flex flex-col gap-2 w-full`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>
							Confirm Password
						</Text>
						<View
							style={tw`w-full flex flex-row items-center justify-between gap-2 px-4 py-1 border-2 border-lightGray rounded-xl`}
						>
							<SvgXml xml={iconLock} width={18} />
							<TextInput
								placeholder="Confirm your new password"
								value={values.confirmPassword}
								onChangeText={handleChange('confirmPassword')}
								style={tw`flex-1`}
								secureTextEntry={hidePassword.confirm}
							/>
							<TouchableOpacity
								style={tw`flex px-1 py-3`}
								onPress={() =>
									setHidePassword(prev => ({ ...prev, confirm: !prev.confirm }))
								}
							>
								<SvgXml
									xml={hidePassword.confirm ? iconVisible : iconInvisible}
								/>
							</TouchableOpacity>
						</View>
						{errors.confirmPassword ? (
							<Text style={tw`text-xs text-red-500`}>
								{errors.confirmPassword}
							</Text>
						) : null}
					</View>
				</View>
				<FullRoundedButton text="Change Password" onPress={handleSubmit} />
			</View>
		</TouchableWithoutFeedback>
	);
}
