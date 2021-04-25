import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CARD, SMALL_CARD } from '../dummy-data';
const { width, height } = Dimensions.get('window');

const DetailPage = ({ route, navigation }) => {
	const { id, lastPage } = route.params;
	const data = CARD.filter((data) => id === data.id)[0] || SMALL_CARD.filter((data) => id === data.id)[0];
	console.log(data);
	console.log('detail page');
	const [viewImage, setViewImage] = useState(data.image);
	return (
		<View style={styles.container}>
			<View style={styles.backBtn}>
				<TouchableOpacity pressDuration={0.1} onPress={() => navigation.navigate(lastPage)}>
					<Ionicons name="chevron-back" size={24} color="black" />
				</TouchableOpacity>
			</View>
			<View style={styles.image}>
				<Image
					style={{ width: '100%', height: '100%' }}
					source={{
						uri: viewImage
					}}
				/>
			</View>
			<View style={styles.bottomContainer}>
				<View style={styles.detailContent}>
					<View>
						<Text style={styles.title}>Humayun House</Text>
						<Text style={styles.subTitle}>Lahore Pakistan</Text>
					</View>
					<View style={styles.stars}>
						<MaterialIcons name="star" size={20} color="orange" />
						<MaterialIcons name="star" size={20} color="orange" />
						<MaterialIcons name="star" size={20} color="orange" />
						<MaterialIcons name="star-half" size={20} color="orange" />
						<MaterialIcons name="star-outline" size={20} color="orange" />
					</View>
				</View>
				<View style={styles.detailData}>
					<Text style={styles.detailText}>
						This House is very modern house which is close to the station and center of business.
					</Text>
					<View style={styles.galleryContainer}>
						<TouchableOpacity
							pressDuration={0.0}
							style={styles.gallery}
							onPress={() => navigation.navigate('Gallery', { id: data.id, lastPage: 'Detail' })}
						>
							<View>
								<Text>View Gallery</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.facilities}>
					<Text style={styles.facilityTitle}>Facilities</Text>
					<View style={styles.facilityCard}>
						<TouchableOpacity pressDuration={0.1} onPress={() => setViewImage(data.image)}>
							<View style={styles.cardImage}>
								<Image style={{ width: '100%', height: '100%' }} source={{ uri: data.image }} />
							</View>
						</TouchableOpacity>
						<TouchableOpacity pressDuration={0.1} onPress={() => setViewImage(data.detailImage[0])}>
							<View style={styles.cardImage}>
								<Image
									style={{ width: '100%', height: '100%' }}
									source={{ uri: data.detailImage[0] }}
								/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity pressDuration={0.1} onPress={() => setViewImage(data.detailImage[1])}>
							<View style={styles.cardImage}>
								<Image
									style={{ width: '100%', height: '100%' }}
									source={{ uri: data.detailImage[1] }}
								/>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.order}>
					<View style={styles.orderValue}>
						<Text style={styles.price}>Price</Text>
						<Text style={styles.priceValue}>$750</Text>
					</View>
					<TouchableOpacity pressDuration={0.1} onPress={() => navigation.navigate('Login')}>
						<View style={styles.orderBtn}>
							<Text style={styles.btnText}>Book Now</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default DetailPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width,
		flexDirection: 'column'
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
	bottomContainer: {
		paddingHorizontal: '5%',
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	image: {
		height: '45%'
	},
	detailContent: {
		marginTop: '2%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	galleryContainer: {
		alignItems: 'flex-end'
	},
	gallery: {
		alignItems: 'center',
		backgroundColor: '#e4d7d7',
		width: '35%',
		paddingVertical: 12,
		borderRadius: 5
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20
	},
	subTitle: {
		fontSize: 16,
		fontWeight: '300',
		color: '#9c8686'
	},
	stars: {
		flexDirection: 'row'
	},
	detailData: {
		paddingHorizontal: '2%'
	},
	detailText: {
		letterSpacing: 1,
		fontSize: 14,
		color: '#bba4a4'
	},
	facilityTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: -15
	},
	facilityCard: {
		paddingTop: '2%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	cardImage: {
		width: 105,
		height: 105,
		borderRadius: 10,
		overflow: 'hidden'
	},
	order: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: '7%',
		paddingHorizontal: '2%'
	},
	price: {
		fontSize: 14,
		fontWeight: 'normal'
	},
	priceValue: {
		fontSize: 23,
		fontWeight: 'bold'
	},
	orderBtn: {
		backgroundColor: '#FE6675',
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderRadius: 10
	},
	btnText: {
		color: '#fff'
	}
});
