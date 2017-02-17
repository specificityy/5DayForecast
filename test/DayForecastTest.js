import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import DayForecast from '../src/components/DayForecast';
import { forecastData } from './mocks';

test('<DayForecast /> renders correctly', t => {
  let wrapper = shallow(<DayForecast forecastData={forecastData} />);

  t.equal(wrapper.find('div.panel-heading').text().trim(), forecastData.day, 'day renders');
  t.equal(wrapper.find('h4.desc').text().trim(), forecastData.desc, 'desc renders');
  t.equal(wrapper.find('span.text-info').text().trim(), forecastData.temp_max+'°', 'temp_max renders');
  t.equal(wrapper.find('span.text-muted').text().trim(), '/ '+forecastData.temp_min+'°', 'temp_min renders');
  t.equal(wrapper.find('h4.text-primary').text().trim(), forecastData.humidity+'%', 'humidity renders');
  t.end();
});
