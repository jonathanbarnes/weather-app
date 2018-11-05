Brief
We want you to create a React application that uses openweathermap.org API (you will need to register on their free tier to get an API key) and allows the user to search and display the 5 day forecast for a city

The application should:

-   Allow the user to search for a city
-   Render the 5 days weather forecast for that given city displaying:
-   Weather icon
-   Min/max temperature
-   Humidity
-   Be covered by tests
-   Be statically typed
-   Be hosted on Github
-   Include instructions to get it up and running

Bonus points:

● Be creative, use and mix any other data that is available to you
● Dockerise your application
● Auto-complete city search

--- MY NOTES ---

Canidate: Jonathan Barnes
Time spent: ~6 hours.

Hi! Thanks for letting me do the tech task.

My weather-app is built using `create-react-app` and satisfies all of the criteria for the base submission.

Current limitations:

-   Country code is hardcoded as `GB` for the OpenWeatherMap API integration. I didn't have time to extend the app to use the auto-complete city functionality (which is where this would be dynamic). Began the redux configuration/boilerplate but didn't have time to implement the associated functionality. However: here is how I would have approached this:

        	- Using Google's Places API. Dispatch an action on user input from <SearchBar/> which in turn would fetch results from this API - would then update a connected component displaying the most relevant result for the partially completed city name. Allow user to <TAB> or <RETURN> to auto fill the city name.
        	- Using a serviceWorker to iterate over the 4.1MB file OWM provides containing city names and codes. (not preferable).

-   App is partially covered by unit tests: See the following for an example of unit tests for: - Component: `src/components/SearchBar.test.js` - Reducer: `src/reducers/__tests__/forecast.test.js` - Action creator: `src/actions/__tests__/forecast.test.js` - Function suite: `src/utils/groupForecastDataByDay`

-   Images/SVG need refactoring. Difficult to test cleanly and the `src/images/` module isn't very flexible.

-   The app definitely does not _need_ Redux, however IRL I could see this app being extended to include more functionality.

-   I would also have added a more colorful, friendly interface. However I would assume I'd be working towards a design so it's more MVP right now.

-   CI config for GitLab is included (real simple). However, GitHub/GitLab integration wasnt working for me at the time of submission so don't have a working example of a deployment pipeline.

And that's it! Thanks for checking it out.

Built with CRA so to get started you can:

`npm run start` | `yarn start` to serve the app locally.
`npm run build` | `yarn build` to create a production-ready build.
`npm run test` | `yarn test` to run unit tests.
