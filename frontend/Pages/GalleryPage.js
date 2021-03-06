import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GallertPage = ({ route, navigation }) => {
	const { id, lastPage } = route.params;
	const [data, setData] = useState();
	const [viewImage, setViewImage] = useState();
	useEffect(() => {
		const roomDetail = async () => {
			const {
				data: { data }
			} = await axios.get(`http://192.168.43.28:3000/api/hotels/${id}`);
			setData(data);
			setViewImage(data.image);
		};
		roomDetail();
	}, [route]);
	return (
		<View style={styles.container}>
			<View style={styles.backBtn}>
				<TouchableOpacity onPress={() => navigation.navigate(lastPage)}>
					<Ionicons name="chevron-back" size={24} color="black" />
				</TouchableOpacity>
			</View>
			<Image
				style={styles.image}
				source={{
					uri: viewImage
				}}
			/>
			<View style={styles.detail}>
				<Text style={styles.detailTitle}>Detail Preview</Text>
				<View style={styles.detailCard}>
					{data?.gallery &&
						data?.gallery.map((img, id) => (
							<TouchableOpacity onPress={() => setViewImage(img)} key={id}>
								<View style={styles.detailImage}>
									<Image
										style={{ width: '100%', height: '100%' }}
										source={{
											uri: img
										}}
									/>
								</View>
							</TouchableOpacity>
						))}
				</View>
			</View>
		</View>
	);
};

export default GallertPage;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	backBtn: {
		backgroundColor: '#ccb8b8',
		padding: 2,
		borderRadius: 5,
		position: 'absolute',
		top: '4%',
		left: '6%',
		zIndex: 10
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	},
	detail: {
		width: '100%',
		position: 'absolute',
		bottom: 0,
		paddingBottom: '10%',
		paddingHorizontal: '3%'
	},
	detailTitle: {
		paddingBottom: 20,
		fontSize: 20,
		fontWeight: 'bold',
		color: '#F4F2F2',
		paddingLeft: 10
	},
	detailCard: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	detailImage: {
		width: 100,
		height: 100,
		borderRadius: 10,
		overflow: 'hidden'
	}
});
