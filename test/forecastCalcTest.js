import React from 'react';
import test from 'tape';

import * as forecastCalc from '../src/forecastCalc';
import { forecastServicePayload, forecastResultFiveDays, singleDayRawForecast, reducedSingleDayForecast } from './mocks';

test('Forecast calculation works', t => {
  let resultFiveDays = forecastCalc.default(forecastServicePayload);
  let resultSingleDay = forecastCalc.reduceGroups(forecastServicePayload);

  t.deepEqual(resultSingleDay, reducedSingleDayForecast, 'single day get calculated');
  t.deepEqual(resultFiveDays, forecastResultFiveDays, 'Five days get calculated');
  t.end();
});
