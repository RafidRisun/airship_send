import {
	iconFacebook,
	iconGoogle,
	iconInvisible,
	iconLock,
	iconPhone,
	iconVisible,
} from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import AuthWrapper from '@/src/components/authWrapper';
import tw from '@/src/lib/tailwind';
import { Link } from 'expo-router';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
	phone: Yup.string().required('Phone number is required'),
	password: Yup.string().required('Password is required'),
});

export default function Index() {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [hidePassword, setHidePassword] = useState(true);
	return (
		<AuthWrapper skippable={true}>
			<Formik
				initialValues={{ phone: '', password: '' }}
				validationSchema={SignUpSchema}
				onSubmit={values => {
					console.log(values); // Handle form submission
				}}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					touched,
				}) => (
					<View
						style={tw`flex flex-col items-center justify-start w-full gap-15 py-4`}
					>
						<Text style={tw`font-geistSemiBold text-2xl`}>Sign Up</Text>
						<View style={tw`flex flex-col w-full gap-4`}>
							{/* Phone Input */}
							<View
								style={tw`w-full flex flex-row items-center justify-between gap-2 px-4 py-1 border-2 border-lightGray rounded-xl`}
							>
								<SvgXml xml={iconPhone} width={18} />
								<TextInput
									placeholder="Phone Number"
									keyboardType="phone-pad"
									value={values.phone}
									onChangeText={handleChange('phone')}
									onBlur={handleBlur('phone')}
									style={tw`flex-1`}
								/>
							</View>
							{errors.phone && touched.phone && (
								<Text style={tw`text-red-500 text-sm`}>{errors.phone}</Text>
							)}

							{/* Password Input */}
							<View
								style={tw`w-full flex flex-row items-center justify-between gap-2 px-4 py-1 border-2 border-lightGray rounded-xl`}
							>
								<SvgXml xml={iconLock} width={18} />
								<TextInput
									placeholder="Password"
									value={values.password}
									onChangeText={handleChange('password')}
									onBlur={handleBlur('password')}
									style={tw`flex-1`}
									secureTextEntry={hidePassword}
								/>
								<TouchableOpacity
									style={tw`flex px-1 py-3`}
									onPress={() => setHidePassword(!hidePassword)}
								>
									<SvgXml xml={hidePassword ? iconVisible : iconInvisible} />
								</TouchableOpacity>
							</View>
							{errors.password && touched.password && (
								<Text style={tw`text-red-500 text-sm`}>{errors.password}</Text>
							)}
						</View>

						{/* Submit Button */}
						<View style={tw`flex flex-col w-full gap-2`}>
							<FullRoundedButton text="Sign Up" onPress={handleSubmit} />{' '}
							{/* handleSubmit */}
							<Text style={tw`font-manropeRegular text-base text-center`}>
								Already have an account?{' '}
								<Link
									href="/auth/sign-in"
									style={tw`text-blue font-manropeBold`}
								>
									Sign In
								</Link>
							</Text>
						</View>

						{/* Social Login */}
						<View style={tw`flex flex-col items-center w-full gap-4`}>
							<View style={tw`flex flex-row items-center w-full gap-2`}>
								<View style={tw`flex-1 border-t border-gray`} />
								<Text style={tw`font-manropeRegular text-base text-gray`}>
									Or Continue with
								</Text>
								<View style={tw`flex-1 border-t border-gray`} />
							</View>
							<View
								style={tw`flex flex-row items-center justify-center w-full gap-2`}
							>
								<TouchableOpacity>
									<SvgXml xml={iconGoogle} />
								</TouchableOpacity>
								<TouchableOpacity>
									<SvgXml xml={iconFacebook} />
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)}
			</Formik>
		</AuthWrapper>
	);
}
