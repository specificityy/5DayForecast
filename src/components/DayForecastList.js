import React from 'react';
import { connect } from 'react-redux';
import DayForecast from './DayForecast';

const mapStateToProps = ({ forecast }) => ({
	forecast
});

export const DayForecastList = ({ forecast }) => {
	return (<div className='container'>
		<div className='row'>
			{forecast.map((item, i) => <DayForecast forecastData={item} key={i} />)}
		</div>
	</div>);
}

export default connect(mapStateToProps)(DayForecastList);