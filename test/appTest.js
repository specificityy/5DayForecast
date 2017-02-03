import React from 'react';
import { Provider } from 'react-redux';
import test from 'tape';

import { shallow, render, mount } from 'enzyme';
import { spy } from 'sinon';
import { jsdom } from 'jsdom';

global.window = global.document = jsdom();

import DayForecastList from '../src/components/DayForecastList';
import Toolbar from '../src/components/Toolbar';
import DayForecast from '../src/components/DayForecast';

import { setCity, fetchData } from '../src/actions';

var data = [{"day":"Sat","icon":"10n","desc":"light rain","maxTemp":5,"minTemp":4,"humidity":95},{"day":"Sun","icon":"02n","desc":"clear sky","maxTemp":2,"minTemp":2,"humidity":91},{"day":"Mon","icon":"01n","desc":"clear sky","maxTemp":1,"minTemp":1,"humidity":82},{"day":"Tue","icon":"10n","desc":"light rain","maxTemp":6,"minTemp":6,"humidity":96},{"day":"Wed","icon":"10n","desc":"light rain","maxTemp":2,"minTemp":2,"humidity":89}];

var store = {
	default: function() {},
	subscribe: function() {},
	dispatch: function() {},
	getState: function() {
		return { forecast: data, city: 'Edinburgh,GB' };
	}
};

test('App renders correctly', function(t) {

  var wrapper = mount(
		<Provider store={store}>
			<div>
				<Toolbar />
				<DayForecastList />
			</div>
		</Provider>);

  t.equal(wrapper.find(Toolbar).length, 1, '<Toolbar> component renders');
  t.equal(wrapper.find(DayForecastList).length, 1, '<DayForecastList> component renders');
  t.equal(wrapper.find(DayForecast).length, 5, '<DayForecast> component renders');

});

test('fetchData action', function(t) {

   var dispatch = spy(),
   		 action = fetchData();

   action(dispatch).then(() => {
      t.equal(dispatch.called, true, 'fetchData action was called');
  		t.end();
   });

});

