import axios from 'axios';

export const setCity = query => ({ type: 'SET_CITY', data: query });
export const fetchSuccess = data => ({ type: 'FETCH_SUCCESS', data: data });
export const fetchFail = err => ({ type: 'FETCH_FAIL', data: err });

export const fetchData = query => dispatch => {
	return axios.get(`//api.openweathermap.org/data/2.5/forecast?q=${query}&mode=json&units=metric&appid=8da603b236dde573722ae04b5a16447b`)
  	.then(json => {
  		dispatch(fetchSuccess(json.data.list)),
  		dispatch(setCity(`${json.data.city.name}, ${json.data.city.country}`));
  	})
		.catch(err => dispatch(fetchFail(err)));
};