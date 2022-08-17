const getTime = Date => Date.toLocaleTimeString();

const getDate = Date => Date.toLocaleDateString();

const showHoursAndMinutes = Date => `${
    Date.getHours().toString().padStart(2, '0')}:${
        Date.getMinutes().toString().padStart(2, '0')}`;

export {
    getTime,
    getDate,
    showHoursAndMinutes
}