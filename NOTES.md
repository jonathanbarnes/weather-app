didnt have time to add cities functionality

added reducer/actions

would have used google API / service worker to run through 4MB file of cities, and use corresponding city ID in OWM api rather than city name.

reducers/forecast is tested
actions/forecast is tested

refactor images/svg - difficult to test cleanly and not very flexible. would refactor to use ENUM and switch statement in images.getSvg(SVG_ID) etc.

countryCode is hardcoded at the moment

example of unit-tested Component > see src/components/SearchBar
example of unit-tested Reducer > see src/reducers/forecast
example of unit-tested Action creator > see src/actions/forecast
example of unit-tested function > see src/utils/groupForecastDataByDay

instructions:

built with CRA

yarn start to run
yarn build to create a production ready build
yarn test to run tests
