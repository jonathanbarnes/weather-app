import moment from "moment";

export const sortData = data =>
	data.reduce((acc, entry) => {
		const entryMoment = moment.unix(entry.dt);
		const toBePushed = {
			moment: entryMoment,
			...entry.main,
			...entry.weather[0]
		};

		const date = entryMoment.format("YYYYMMDD");

		if (acc[date] !== undefined) {
			acc[date].entries.push(toBePushed);
		} else {
			acc[date] = {
				dayOfWeek: entryMoment.format("dddd, Do"),
				entries: [toBePushed]
			};
		}

		return acc;
	}, {});

export const groupForecastDataByDay = data => {
	const sortedData = sortData(data);

	Object.keys(sortedData).forEach(key => {
		const dayData = sortedData[key];
		const temps = dayData.entries.map(e => e.temp);
		const humidities = dayData.entries.map(e => e.humidity);

		dayData.minTemp = Math.min(...temps);
		dayData.maxTemp = Math.max(...temps);
		dayData.humidity =
			humidities.reduce((acc, h) => acc + h) / humidities.length;
	});

	return sortedData;
};

export default groupForecastDataByDay;
