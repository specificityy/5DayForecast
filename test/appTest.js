import React from 'react';
import { Provider } from 'react-redux';
import test from 'tape';

import { mount } from 'enzyme';
import { spy } from 'sinon';
import { jsdom } from 'jsdom';

global.window = global.document = jsdom();

import DayForecastList from '../src/components/DayForecastList';
import Toolbar from '../src/components/Toolbar';
import DayForecast from '../src/components/DayForecast';

import { setCity, fetchData } from '../src/actions';

import { store, forecastResultFiveDays } from './mocks';

test('App renders correctly', t => {

  let wrapper = mount(
		<Provider store={store}>
			<div>
				<Toolbar />
				<DayForecastList />
			</div>
		</Provider>);

  t.equal(wrapper.find(Toolbar).length, 1, '<Toolbar> component renders');
  t.equal(wrapper.find(DayForecastList).length, 1, '<DayForecastList> component renders');
  t.equal(wrapper.find(DayForecast).length, 5, '<DayForecast> component renders');
  t.end();

});

test('fetchData action', t => {
   let dispatch = spy(),
   		 action = fetchData();

   action(dispatch).then(() => {
      t.equal(dispatch.called, true, 'fetchData action was called');
  		t.end();
   });
});