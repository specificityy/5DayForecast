import React from 'react';

const DayForecast = ({ forecastData }) => {
	let img = `http://openweathermap.org/img/w/${forecastData.icon}.png`;
	return (<div className='col-md-2 col-sm-4 col-xs-6'>
		<div className='panel panel-default'>
			<div className='panel-heading text-center'>{forecastData.day}</div>
			<div className='panel-body'>
				<img src={img}></img>
				<h4 className='desc'>{forecastData.desc}</h4>
				<h3>
					<span className='text-info'>{forecastData.temp_max}°</span>
					<span className='text-muted'> / {forecastData.temp_min}°</span>
				</h3>
				<h4 className='text-primary'>{forecastData.humidity}%</h4>
			</div>
		</div>
	</div>);
};

export default DayForecast;