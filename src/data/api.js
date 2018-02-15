import axios from 'axios';

function getCoinData() {
	const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
	const promise = axios.get(url);
	return promise;
}

export {
	getCoinData
};