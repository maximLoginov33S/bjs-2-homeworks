class AlarmClock {
    constructor (alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(timeAlarm, action, id) {
        if(typeof id != 'number') {
            throw new Error('id не указан');
        }
       for (const alarmObject of this.alarmCollection) {       
           if(alarmObject.id === id){
               return console.error('id существует');
            }
        }

        let arrTime = timeAlarm.split(':');
        if((arrTime.length > 2) || (0 > arrTime[0]) || (arrTime[0] > 23) || (0 > arrTime[1]) || (arrTime[1] > 59)) {
            throw new Error("Введён не верный формат времени. Пример: \"23:59\"");            
        };

        this.alarmCollection.push({timeAlarm, action, id});       
    };

    removeClock(id){
        let arrLenght = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(i => i.id != id);
        if(arrLenght === this.alarmCollection.length) {
            console.log('Будильник не найден')
        } else {
            console.log('Будильник удален');
        }
    }

    getCurrentFormattedTime() {
         return new Date().toLocaleTimeString("ru-Ru", {
    		hour: "2-digit",
 			minute: "2-digit",
	        });
    }
    
    start() {
        let checkClock = (call) => {
            let nowDate = this.getCurrentFormattedTime();
            if(nowDate === call.timeAlarm) {
                call.action();
                }
            }

            if(this.timerId === null) {
                this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkClock(item)), 1000)
            }
        }

    stop() {
        if(this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(`Будильник № ${item.id} заведен на: ${item.timeAlarm}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let a = new AlarmClock();
    a.addClock('04:26', () => console.log('Get up'), 5);
    a.addClock('23:29', () => console.log('Get up'), 6);
    a.addClock('01:00', () => console.log('Get up'), 2);
    a.addClock('01:00', () => console.log('Get up'), 3);
    a.addClock('01:00', () => console.log('Get up'), 4);
    console.log(`текущее время: ${a.getCurrentFormattedTime()}`);
    a.printAlarms();
    a.removeClock(6);
    a.printAlarms();
    a.start();
    //a.stop();
    //a.clearAlarms();
}
