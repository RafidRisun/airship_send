import React from 'react';
import { ImageBackground } from 'react-native';

export default function OnBoardingWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ImageBackground
			source={require('../../assets/images/onboardingWrapper.png')}
			style={{ flex: 1 }}
		>
			{children}
		</ImageBackground>
	);
}
