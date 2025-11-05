import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

export default function Notification() {
	const [isEmailNotificationEnabled, setIsEmailNotificationEnabled] =
		useState(true);

	const toggleEmailNotificationSwitch = () =>
		setIsEmailNotificationEnabled(previousState => !previousState);

	const [isSmsAlertEnabled, setIsSmsAlertEnabled] = useState(false);
	const toggleSmsAlertSwitch = () =>
		setIsSmsAlertEnabled(previousState => !previousState);

	const [isPushNotificationEnabled, setIsPushNotificationEnabled] =
		useState(true);
	const togglePushNotificationSwitch = () =>
		setIsPushNotificationEnabled(previousState => !previousState);

	const [isMarketingCommunicationEnabled, setIsMarketingCommunicationEnabled] =
		useState(false);
	const toggleMarketingCommunicationSwitch = () =>
		setIsMarketingCommunicationEnabled(previousState => !previousState);

	return (
		<View style={tw`flex-1 bg-white p-4`}>
			<View
				style={tw`flex flex-col w-full gap-8 border border-lightGray rounded-lg p-4`}
			>
				<View style={tw`flex flex-row items-center justify-between`}>
					<View style={tw`flex flex-col gap-1`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>
							Email Notification
						</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Receive updates via email
						</Text>
					</View>
					<Switch
						trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
						thumbColor={isEmailNotificationEnabled ? '#FFFFFF' : '#A0A0A0'}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleEmailNotificationSwitch}
						value={isEmailNotificationEnabled}
					/>
				</View>
				<View style={tw`flex flex-row items-center justify-between`}>
					<View style={tw`flex flex-col gap-1`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>SMS Alerts</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Receive updates via SMS
						</Text>
					</View>
					<Switch
						trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
						thumbColor={isSmsAlertEnabled ? '#FFFFFF' : '#A0A0A0'}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleSmsAlertSwitch}
						value={isSmsAlertEnabled}
					/>
				</View>

				<View style={tw`flex flex-row items-center justify-between`}>
					<View style={tw`flex flex-col gap-1`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>
							Push Notification
						</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Receive updates via push notification
						</Text>
					</View>
					<Switch
						trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
						thumbColor={isPushNotificationEnabled ? '#FFFFFF' : '#A0A0A0'}
						ios_backgroundColor="#3e3e3e"
						onValueChange={togglePushNotificationSwitch}
						value={isPushNotificationEnabled}
					/>
				</View>

				<View style={tw`flex flex-row items-center justify-between`}>
					<View style={tw`flex flex-col gap-1`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>
							Marketing Communications
						</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Receive promotional offers and updates
						</Text>
					</View>
					<Switch
						trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
						thumbColor={isMarketingCommunicationEnabled ? '#FFFFFF' : '#A0A0A0'}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleMarketingCommunicationSwitch}
						value={isMarketingCommunicationEnabled}
					/>
				</View>
			</View>
		</View>
	);
}
