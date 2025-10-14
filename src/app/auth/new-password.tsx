import { iconInvisible, iconLock, iconVisible } from '@/assets/icons';
import AuthWrapper from '@/src/components/AuthWrapper';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as Yup from 'yup';

const NewPasswordSchema = Yup.object().shape({
	password: Yup.string().required('Password is required'),
	reEnterPassword: Yup.string()
		.required('Re-enter password is required')
		.oneOf([Yup.ref('password')], 'Passwords must match'),
});

export default function NewPassword() {
	const [hidePassword, setHidePassword] = useState(true);
	const [hideReEnterPassword, setHideReEnterPassword] = useState(true);

	const router = useRouter();
	return (
		<AuthWrapper skippable={false}>
			<Formik
				initialValues={{ password: '', reEnterPassword: '' }}
				validationSchema={NewPasswordSchema}
				onSubmit={(values, { setSubmitting }) => {
					console.log(values); // Handle form submission logic here
					setSubmitting(false); // Ensure Formik knows submission is complete
					router.push('/auth/sign-in'); // Navigate after submission is complete
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
						<Text style={tw`font-geistSemiBold text-2xl`}>New Password</Text>
						<View style={tw`flex flex-col w-full gap-4`}>
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
							<View
								style={tw`w-full flex flex-row items-center justify-between gap-2 px-4 py-1 border-2 border-lightGray rounded-xl`}
							>
								<SvgXml xml={iconLock} width={18} />
								<TextInput
									placeholder="Re Enter Password"
									value={values.reEnterPassword}
									onChangeText={handleChange('reEnterPassword')}
									style={tw`flex-1`}
									secureTextEntry={hideReEnterPassword}
									onBlur={() => setFieldTouched('reEnterPassword')}
								/>
								<TouchableOpacity
									style={tw`flex px-1 py-3`}
									onPress={() => setHideReEnterPassword(!hideReEnterPassword)}
								>
									<SvgXml
										xml={hideReEnterPassword ? iconVisible : iconInvisible}
									/>
								</TouchableOpacity>
							</View>
							{errors.reEnterPassword && touched.reEnterPassword && (
								<Text style={tw`text-red-500 text-sm`}>
									{errors.reEnterPassword}
								</Text>
							)}
						</View>
						<FullRoundedButton text="Set Password" onPress={handleSubmit} />
					</View>
				)}
			</Formik>
		</AuthWrapper>
	);
}
