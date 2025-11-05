import { iconCollapse, iconExpand } from '@/assets/icons';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Faq() {
	const router = useRouter();
	const [expanded, setExpanded] = useState<
		'mail' | 'password' | 'location' | 'order' | 'advance' | 'cancel' | null
	>(null);

	return (
		<PageWrapper>
			<View
				style={tw`flex flex-col w-full gap-8 border border-lightGray rounded-lg p-4`}
			>
				<TouchableOpacity
					style={tw`flex flex-col`}
					onPress={() => {
						setExpanded(expanded === 'mail' ? null : 'mail');
					}}
				>
					<View style={tw`flex flex-row w-full items-center`}>
						<Text style={tw`text-sm font-manropeSemiBold flex-1`}>
							How do i change my email address?
						</Text>
						<SvgXml xml={expanded === 'mail' ? iconCollapse : iconExpand} />
					</View>
					{expanded === 'mail' && (
						<View style={tw`mt-4`}>
							<Text style={tw`text-sm font-manropeRegular`}>
								To change your email address, go to your account settings and
								update your email.
							</Text>
						</View>
					)}
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-col`}
					onPress={() => {
						setExpanded(expanded === 'password' ? null : 'password');
					}}
				>
					<View style={tw`flex flex-row w-full items-center`}>
						<Text style={tw`text-sm font-manropeSemiBold flex-1`}>
							How do i reset my password?
						</Text>
						<SvgXml xml={expanded === 'password' ? iconCollapse : iconExpand} />
					</View>
					{expanded === 'password' && (
						<View style={tw`mt-4`}>
							<Text style={tw`text-sm font-manropeRegular`}>
								To reset your password, go to the login page and click on Forgot
								Password?.
							</Text>
						</View>
					)}
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-col`}
					onPress={() => {
						setExpanded(expanded === 'location' ? null : 'location');
					}}
				>
					<View style={tw`flex flex-row w-full items-center`}>
						<Text style={tw`text-sm font-manropeSemiBold flex-1`}>
							Can i order from any location?
						</Text>
						<SvgXml xml={expanded === 'location' ? iconCollapse : iconExpand} />
					</View>
					{expanded === 'location' && (
						<View style={tw`mt-4`}>
							<Text style={tw`text-sm font-manropeRegular`}>
								To order from any location, simply select your desired location
								during the checkout process.
							</Text>
						</View>
					)}
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-col`}
					onPress={() => {
						setExpanded(expanded === 'order' ? null : 'order');
					}}
				>
					<View style={tw`flex flex-row w-full items-center`}>
						<Text style={tw`text-sm font-manropeSemiBold flex-1`}>
							Can i edit my order?
						</Text>
						<SvgXml xml={expanded === 'order' ? iconCollapse : iconExpand} />
					</View>
					{expanded === 'order' && (
						<View style={tw`mt-4`}>
							<Text style={tw`text-sm font-manropeRegular`}>
								To edit your order, go to your order history and select the
								order you want to edit.
							</Text>
						</View>
					)}
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-col`}
					onPress={() => {
						setExpanded(expanded === 'advance' ? null : 'advance');
					}}
				>
					<View style={tw`flex flex-row w-full items-center`}>
						<Text style={tw`text-sm font-manropeSemiBold flex-1`}>
							Can I order in advance?
						</Text>
						<SvgXml xml={expanded === 'advance' ? iconCollapse : iconExpand} />
					</View>
					{expanded === 'advance' && (
						<View style={tw`mt-4`}>
							<Text style={tw`text-sm font-manropeRegular`}>
								To order in advance, simply select your desired delivery date
								and time during the checkout process.
							</Text>
						</View>
					)}
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-col`}
					onPress={() => {
						setExpanded(expanded === 'cancel' ? null : 'cancel');
					}}
				>
					<View style={tw`flex flex-row w-full items-center`}>
						<Text style={tw`text-sm font-manropeSemiBold flex-1`}>
							How do I cancel my order?
						</Text>
						<SvgXml xml={expanded === 'cancel' ? iconCollapse : iconExpand} />
					</View>
					{expanded === 'cancel' && (
						<View style={tw`mt-4`}>
							<Text style={tw`text-sm font-manropeRegular`}>
								To cancel your order, go to your order history and select the
								order you want to cancel.
							</Text>
						</View>
					)}
				</TouchableOpacity>
			</View>
		</PageWrapper>
	);
}
