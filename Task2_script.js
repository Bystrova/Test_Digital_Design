const DAYS = {
	1: `Понедельник`,
	2: `Вторник`,
	3: `Среда`,
	4: `Четверг`,
	5: `Пятница`,
	6: `Суббота`,
	7: `Воскресенье`
};

const MONTHS = {
	0: `Январь`,
	1: `Февраль`,
	2: `Март`,
	3: `Апрель`,
	4: `Май`,
	5: `Июнь`,
	6: `Июль`,
	7: `Август`,
	8: `Сентябрь`,
	9: `Октябрь`,
	10: `Ноябрь`,
	11: `Декабрь`
};

const WEEK_LENGTH = 7;
const MIN_DAYS_IN_MONTH = 1;
const MAX_DAYS_IN_MONTH = 31;
const MIN_MONTHS_IN_YEAR = 1;
const MAX_MONTHS_IN_YEAR = 12;

const getGenitiveCase = (monthName) => {
	if (monthName.endsWith(`т`)) {
		monthName = monthName.concat(`а`);
	} else {
		monthName = monthName.replace(monthName[monthName.length - 1], `я`);
	};
	return monthName;
};

const getDayInfo = (date) => {
	const dateNumbers = date.split(`.`).reverse().map((el) => Number(el));
	const dayNumber = dateNumbers[2];
	const monthNumber = dateNumbers[1];
	let result;
	if (dayNumber > MAX_DAYS_IN_MONTH || dayNumber < MIN_DAYS_IN_MONTH || monthNumber < MIN_MONTHS_IN_YEAR || monthNumber > MAX_MONTHS_IN_YEAR) {
		result = `Вы ввели некорректную дату`;
	} else {
		const dateObj = new Date(dateNumbers);
		const day = dateObj.getDate();
		const month = dateObj.getMonth();
		const year = dateObj.getFullYear();
		const weekDay = dateObj.getDay() === 0 ? (dateObj.getDay() + WEEK_LENGTH) : dateObj.getDay();
		const weekNumber = Math.ceil((day + (WEEK_LENGTH - weekDay)) / WEEK_LENGTH);
		result = `${DAYS[weekDay]}, ${weekNumber} неделя ${getGenitiveCase(MONTHS[month])} ${year} года`;
	}
	return result;
};

const dayInfo = document.querySelector(`.day-info`);
dayInfo.innerHTML = getDayInfo(`13.03.2022`);