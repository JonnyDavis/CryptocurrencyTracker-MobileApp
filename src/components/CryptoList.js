import React from 'react';
import { FlatList, Text } from 'react-native';
import CryptoListItem from './CryptoListItem';
import CryptoListSeperator from './CryptoListSeperator';


const noop = () => null;

const extractCryptoItemKey = (item) => {
	return item.id;
}

const CryptoList = ({ crypto }) => {
	
	const renderCryptoItem = ({ item }) => {
		return (
			<CryptoListItem item={item} />
		)
	}

	return (
		<FlatList
		data={ crypto }
		renderItem={ renderCryptoItem }
		keyExtractor={ extractCryptoItemKey}
		ItemSeparatorComponent={CryptoListSeperator}
		/>
	)	
}


export default CryptoList;