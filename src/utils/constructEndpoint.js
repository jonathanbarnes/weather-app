import { API_KEY } from "../config/constants";

export default (city = "London", countryCode = "GB") =>
	`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&mode=json&APPID=${API_KEY}&units=metric`;
