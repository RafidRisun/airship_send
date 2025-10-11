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
import { Link, useRouter } from 'expo-router';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
	phone: Yup.string().required('Phone number is required'),
	password: Yup.string().required('Password is required'),
});

export default function SignIn() {
	const [hidePassword, setHidePassword] = useState(true);
	const router = useRouter();
	return (
		<AuthWrapper skippable={true}>
			<Formik
				initialValues={{ phone: '', password: '' }}
				validationSchema={SignInSchema}
				onSubmit={(values, { setSubmitting }) => {
					console.log(values); // Handle form submission logic here
					setSubmitting(false); // Ensure Formik knows submission is complete
					router.push('(tabs)'); // Navigate after submission is complete
				}}
			>
				{({
					handleChange,
					handleSubmit,
					values,
					errors,
					touched,
					setFieldTouched,
				}) => (
					<View
						style={tw`flex flex-col items-center justify-start w-full gap-15 py-4`}
					>
						<Text style={tw`font-geistSemiBold text-2xl`}>Sign In</Text>
						<View style={tw`flex flex-col w-full gap-4`}>
							<View
								style={tw`w-full flex flex-row items-center justify-between gap-2 px-4 py-1 border-2 border-lightGray rounded-xl`}
							>
								<SvgXml xml={iconPhone} width={18} />
								<TextInput
									placeholder="Phone Number"
									keyboardType="phone-pad"
									value={values.phone}
									onChangeText={handleChange('phone')}
									style={tw`flex-1`}
									onBlur={() => setFieldTouched('phone')}
								/>
							</View>
							{errors.phone && touched.phone && (
								<Text style={tw`text-red-500 text-sm`}>{errors.phone}</Text>
							)}
							<View
								style={tw`w-full flex flex-row items-center justify-between gap-2 px-4 py-1 border-2 border-lightGray rounded-xl`}
							>
								<SvgXml xml={iconLock} width={18} />
								<TextInput
									placeholder="Password"
									value={values.password}
									onChangeText={handleChange('password')}
									style={tw`flex-1`}
									secureTextEntry={hidePassword}
									onBlur={() => setFieldTouched('password')}
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
							<View style={tw`flex flex-row justify-end`}>
								<Link
									href="/auth/forgot-password"
									style={tw`text-blue font-manropeMedium text-xs`}
								>
									Forgot Password?
								</Link>
							</View>
						</View>
						<View style={tw`flex flex-col w-full gap-2`}>
							<FullRoundedButton text="Sign In" onPress={handleSubmit} />
							<Text style={tw`font-manropeRegular text-base text-center`}>
								Already have an account?{' '}
								<Link href="/auth" style={tw`text-blue font-manropeBold`}>
									Sign Up
								</Link>
							</Text>
						</View>
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
