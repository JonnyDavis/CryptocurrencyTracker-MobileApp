import { Constants } from 'expo';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CryptoListScreen from './screens/CryptoListScreen';


const extraStyles = Platform.select({
	android: {
		marginTop: Constants.statusBarHeight
	}
});

export default StackNavigator({
	List: { screen: CryptoListScreen },
}, {
	cardStyle: {
		backgroundColor: '#fff'
	},
	navigationOptions: {
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#68aa63',
			...extraStyles
		}
	}
}
); 