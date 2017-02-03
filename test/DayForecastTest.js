import React from 'react';
import test from 'tape';

import { shallow } from 'enzyme';

import DayForecast from '../src/components/DayForecast';

var data = {day:"Sat",icon:"10n",desc:"light rain",maxTemp:5,minTemp:4,humidity:95};

test('<DayForecast /> renders correctly', function (t) {
  var wrapper = shallow(<DayForecast forecastData={data} />);

  t.equal(wrapper.find('div.panel-heading').text().trim(), data.day, 'day renders');
  t.equal(wrapper.find('h4.desc').text().trim(), data.desc, 'desc renders');
  t.equal(wrapper.find('span.text-info').text().trim(), data.maxTemp+'°', 'maxTemp renders');
  t.equal(wrapper.find('span.text-muted').text().trim(), '/ '+data.minTemp+'°', 'minTemp renders');
  t.equal(wrapper.find('h4.text-primary').text().trim(), data.humidity+'%', 'humidity renders');
  t.end();
});
