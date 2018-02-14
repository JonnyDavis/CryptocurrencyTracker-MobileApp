import { Constants } from 'expo';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

const extraStyles = Platform.select({
	android: {
		marginTop: Constants.statusBarHeight
	}
});

export default StackNavigator({
	List: { screen: FilmListScreen },
	Detail: { screen: FilmDetailScreen }
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