
[![Build Status](https://travis-ci.org/wilsonjs/5DayForecast.svg?branch=master)](https://travis-ci.org/wilsonjs/5DayForecast)

# Five Day Forecast

## Simple React + Redux App using the [OpenWeatherMap API](http://openweathermap.org/forecast5)

### Live demo [Here](http://fivedayforecast.surge.sh/)

### How it works?

When opening the app you'll get the weahter forecast for the next 5 days, the default city is Edinburgh.

A search input is privided to get the forecast for pretty much every city, click Go! to search or just hit Enter.

### How do I run it?

Once the code is downloaded, go to the folder and run:

1. `$ npm install` to install the dependencies.
2. `$ npm run build` to build the project (this has a watch task that keeps running so you may need to stop it after the build or open another console tab for the other commands).
3. `$ npm run server` to kick start the app.
4. There's also `$ npm run test` to run the tests.

### Tech Stack

1. React + Redux
3. Redux Thunk (to handle actions as functions, needed for the async actions on the http requests)
2. Axios (for http requests)
3. Babel (ES6/7 transpiler)
4. Lodash (helper functions)
5. Twitter's Bootstrap (some css styling)
6. Tape, Enzyme and Sinon (unit testing)

### What could be done with more time?

This was a simple project that didn't take more than a couple of hours and there's a lot of room for improvement, with enough time, way more could be accomplished like:

* Adding routing so the cities you look for remain in the browser history.
* Having the app figure out your location and display that forecast first.
* The API retrieves forcast for every 3 hours of each day, currently the app displays an average of the whole day, we could add a driil down report so you could see the variations through out the day instead of just the overall values.
  * Display more data than just the max, min, humidity; things like wind speed or atmospheric pressure.
  * Maybe display the extra data on a small tooltip windown on-hover.
  * Let you save locations.
* Improve the styling
  * Add a bit of transition animations.
  * Add a loading spinner in between round trips to the server.
  * Have better images.

* Add more validation in case of a server error
* The app tries to figure out what you type and give you the result but could add some validation there to let users know when the location wasn't found.
  
