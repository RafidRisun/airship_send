import { iconPhone } from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import AuthWrapper from '@/src/components/authWrapper';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as Yup from 'yup';

const ForgotPasswordSchema = Yup.object().shape({
	phone: Yup.string().required('Phone number is required'),
});

export default function ForgotPassword() {
	const router = useRouter();
	return (
		<AuthWrapper skippable={false}>
			<Formik
				initialValues={{ phone: '' }}
				validationSchema={ForgotPasswordSchema}
				onSubmit={(values, { setSubmitting }) => {
					console.log(values); // Handle form submission logic here
					setSubmitting(false); // Ensure Formik knows submission is complete
					router.push('/auth/otp'); // Navigate after submission is complete
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
						style={tw`flex flex-col items-center justify-start w-full gap-8 py-4`}
					>
						<View
							style={tw`flex flex-col items-center justify-center w-full px-10 gap-2`}
						>
							<Text style={tw`font-geistSemiBold text-2xl`}>
								Forgot Password
							</Text>
							<Text
								style={tw`text-center font-manropeRegular text-sm text-gray`}
							>
								Enter your registered mobile number to receive an OTP.
							</Text>
						</View>
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
						</View>
						<View style={tw`flex flex-col w-full gap-2`}>
							<FullRoundedButton text="Send OTP" onPress={handleSubmit} />
							<TouchableOpacity
								style={tw`flex items-center justify-center w-full py-2 rounded-xl`}
							>
								<Text style={tw`font-manropeMedium text-sm`}>Cancel</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</Formik>
		</AuthWrapper>
	);
}
