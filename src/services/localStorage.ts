const COLLECTION = 'alarms'

const setAlarmToLocalStorage = (alarm: Date | null) => {    
    localStorage.setItem(COLLECTION, JSON.stringify(alarm));
}

const getAlarmsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(COLLECTION) as any)
}

const cleanAlarmsFromLocalStorage = () => {
    localStorage.removeItem(COLLECTION);
}

export {
    setAlarmToLocalStorage,
    getAlarmsFromLocalStorage,
    cleanAlarmsFromLocalStorage,
}