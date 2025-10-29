import tw from '@/src/lib/tailwind';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Image } from 'expo-image';
import { useRef, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
	const [permission, requestPermission] = useCameraPermissions();
	const ref = useRef<CameraView>(null);
	const [uri, setUri] = useState<string | null>(null);

	if (!permission) {
		return null;
	}

	if (!permission.granted) {
		return (
			<View style={styles.container}>
				<Text style={{ textAlign: 'center' }}>
					We need your permission to use the camera
				</Text>
				<Button onPress={requestPermission} title="Grant permission" />
			</View>
		);
	}

	const takePicture = async () => {
		const photo = await ref.current?.takePictureAsync();
		if (photo?.uri) setUri(photo.uri);
	};

	const renderPicture = (uri: string) => {
		return (
			<View style={tw`flex flex-col items-center justify-center gap-4`}>
				<Image
					source={{ uri }}
					contentFit="contain"
					style={{ width: 300, aspectRatio: 1 }}
				/>
				<Button onPress={() => setUri(null)} title="Upload Prescription" />
				<Button onPress={() => setUri(null)} title="Take another picture" />
			</View>
		);
	};

	const renderCamera = () => {
		return (
			<View style={styles.cameraContainer}>
				<CameraView
					style={styles.camera}
					ref={ref}
					mode={'picture'}
					facing={'back'}
					mute={false}
					responsiveOrientationWhenOrientationLocked
				/>
				<View style={styles.shutterContainer}>
					<Pressable onPress={takePicture}>
						{({ pressed }) => (
							<View
								style={[
									styles.shutterBtn,
									{
										opacity: pressed ? 0.5 : 1,
									},
								]}
							>
								<View style={[styles.shutterBtnInner]} />
							</View>
						)}
					</Pressable>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			{uri ? renderPicture(uri) : renderCamera()}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cameraContainer: StyleSheet.absoluteFillObject,
	camera: StyleSheet.absoluteFillObject,
	shutterContainer: {
		position: 'absolute',
		bottom: 44,
		left: 0,
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		paddingHorizontal: 30,
	},
	shutterBtn: {
		backgroundColor: 'transparent',
		borderWidth: 5,
		borderColor: 'white',
		width: 85,
		height: 85,
		borderRadius: 45,
		alignItems: 'center',
		justifyContent: 'center',
	},
	shutterBtnInner: {
		width: 70,
		height: 70,
		borderRadius: 50,
		backgroundColor: 'white',
	},
});
