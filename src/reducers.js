import forecastCalc from './forecastCalc';

export const forecast = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			
			let result = forecastCalc(action.data);

      return result || state;

		case 'FETCH_FAIL':
			console.log('Fetch error:', action);
      return state;

    default:
    	return state || [];
	}
};

export const city = (state, action) => {
	switch (action.type) {
		case 'SET_CITY':
			return action.data;

    default:
    	return state || '';
	}
};