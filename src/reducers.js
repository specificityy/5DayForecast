import _ from 'lodash';

export const forecast = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			
			// Eight data elements are received for each day (forecast every 3 hours),
			// so combine all to get an average

			let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
			
			let result = _.map(_.groupBy(action.data, item => item.dt_txt.split(' ')[0]),
				(group, id) => {
					let { maxTemp, minTemp, humidity } = _.reduce(group, (acc, next) => ({
						maxTemp: acc.maxTemp + next.main.temp_max,
						minTemp: acc.minTemp + next.main.temp_min,
						humidity: acc.humidity + next.main.humidity		
					}), { maxTemp:0, minTemp:0, humidity:0 });
			
					let len = group.length;

					return {
						day: days[(new Date(id)).getDay()],
						icon: _.get(group, '[0].weather[0].icon'),
						desc: _.get(group, '[0].weather[0].description'),
						maxTemp: Math.round(maxTemp/len),
						minTemp: Math.round(minTemp/len),
						humidity: Math.round(humidity/len)
					};
				}
			);

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