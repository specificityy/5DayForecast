import React from 'react';
import test from 'tape';

import { shallow } from 'enzyme';

import { DayForecastList } from '../src/components/DayForecastList';
import { forecastResultFiveDays } from './mocks';

test('<DayForecastList /> renders correctly', t => {
  let wrapper = shallow(<DayForecastList forecast={forecastResultFiveDays} />);

  t.equal(wrapper.find('DayForecast').length, 5, '5 DayForecast components rendered');
  t.end();
});