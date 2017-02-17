import _ from 'lodash';

function reduceGroups(group) {
	let firstMin = group[0].main.temp_min;

	return _.reduce(group, (acc, next, i) => ({
		temp_max: Math.max(acc.temp_max, next.main.temp_max),
		temp_min: Math.min(acc.temp_min, next.main.temp_min),
		humidity: acc.humidity + next.main.humidity
		}), { temp_max: 0, temp_min: firstMin, humidity: 0 });
}

function calc(actionData) {
  // Eight data elements are received for each day (forecast every 3 hours),
  // so combine all to get an average

  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  let result = _.map(_.groupBy(actionData, item => item.dt_txt.split(' ')[0]),
    (group, id) => {
      
      let { temp_max, temp_min, humidity } = reduceGroups(group);

      return {
        day: days[(new Date(id)).getDay()],
        icon: _.get(group, '[0].weather[0].icon'),
        desc: _.get(group, '[0].weather[0].description'),
        temp_max: Math.ceil(temp_max),
        temp_min: Math.floor(temp_min),
        humidity: Math.round(humidity / group.length)
      };
    }
  );

  return result;
}

export default calc;