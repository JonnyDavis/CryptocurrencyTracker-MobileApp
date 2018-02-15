import { getCoinData } from '../data/api';

const types = {
	FETCH_COINS: '[Coins] Fetch',
	FETCH_COINS_SUCCESS: '[Coins] Fetch Success'
};


const actionCreators = {
	fetchCoinsSuccess: (data) => {
		return {
			type: types.FETCH_COINS_SUCCESS,
			payload: data
		}
	}

};

const fetchCoinData = () => {
	return (dispatch) => {
		const promise = getCoinData();
		promise.then((response) => {
			// have our films data
			// dipstach our 'FETCH_FILMS_SUCCESS' action
			dispatch(actionCreators.fetchCoinsSuccess(response.data));
		});
	};
};


function reducer(state = [], action) {

	return state;
}

export default reducer;