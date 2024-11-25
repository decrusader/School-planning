const dagnamen = ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"];

setInterval(function () {
    const d = new Date();
    let text = d.toLocaleTimeString();

    const huidigeMinuten = d.getMinutes() + d.getHours() * 60;

    document.querySelector("#dag").innerHTML = dagnamen[d.getDay()];
    document.querySelector("#tijd").innerHTML = d.getHours() + ":";
    if(d.getMinutes()<10){
    	document.querySelector("#tijd").innerHTML += "0" + d.getMinutes();
    }else{
    	document.querySelector("#tijd").innerHTML += d.getMinutes();
    }

    for (let index = 0; index < betterschedule.length; index += 1) {
        //als huidige minuten <= eind minuten van element en >= start minuten van element ==> das de huidige activiteit
        const huidigElement = betterschedule[index];
        if (huidigeMinuten <= huidigElement.eindMinuten && huidigElement.startMinuten <= huidigeMinuten) {
            document.querySelector("#activiteit").innerHTML = huidigElement.activity;
            document.querySelector("#startminuten").innerHTML = huidigElement.startTijd;
            document.querySelector("#eindminuten").innerHTML = huidigElement.eindTijd;

        }
    }
    document.getElementById("demo").innerHTML = text;
}, 100);

const zaterdag = [
    { time: '0:00', activity: 'weekend' },
    { time: '23:59', activity: 'weekend' },
]

const zondag = zaterdag;

const maandag = [
    { time: '8:30', activity: 'Wakker worden' },
    { time: '9:20', activity: 'Wetenschappen' },
    { time: '10:10', activity: 'Speeltijd' },
    { time: '10:25', activity: 'Nederlands' },
    { time: '11:15', activity: 'Biologie' },
    { time: '12:05', activity: 'Middagpauze' },
    { time: '13:10', activity: 'Wiskunde' },
    { time: '14:00', activity: 'Wiskunde' },
    { time: '14:50', activity: 'Speeltijd' },
    { time: '15:05', activity: 'Frans' },
    { time: '15:55', activity: 'vrij' },
    { time: '16:45', activity: 'vrij' }
]

const dinsdag = [
    { time: '8:30', activity: 'Wetenschappen' },
    { time: '9:20', activity: 'Wetenschappen' },
    { time: '10:10', activity: 'Speeltijd' },
    { time: '10:25', activity: 'Nederlands' },
    { time: '11:15', activity: 'Biologie' },
    { time: '12:05', activity: 'Middagpauze' },
    { time: '13:10', activity: 'Wiskunde' },
    { time: '14:00', activity: 'Wiskunde' },
    { time: '14:50', activity: 'Speeltijd' },
    { time: '15:05', activity: 'Frans' },
    { time: '15:55', activity: 'vrij' },
    { time: '16:45', activity: 'vrij' }
]

const woensdag = [
    { time: '8:30', activity: 'Wetenschappen' },
    { time: '9:20', activity: 'Wetenschappen' },
    { time: '10:10', activity: 'Speeltijd' },
    { time: '10:25', activity: 'Nederlands' },
    { time: '11:15', activity: 'Biologie' },
    { time: '12:05', activity: 'vrij' },
    { time: '16:45', activity: 'vrij' }
]

const donderdag = [
    { time: '8:30', activity: 'Wetenschappen' },
    { time: '9:20', activity: 'Wetenschappen' },
    { time: '10:10', activity: 'Speeltijd' },
    { time: '10:25', activity: 'Nederlands' },
    { time: '11:15', activity: 'Biologie' },
    { time: '12:05', activity: 'Middagpauze' },
    { time: '13:10', activity: 'Wiskunde' },
    { time: '14:00', activity: 'Wiskunde' },
    { time: '14:50', activity: 'Speeltijd' },
    { time: '15:05', activity: 'Frans' },
    { time: '15:55', activity: 'vrij' },
    { time: '16:45', activity: 'vrij' }
]

const vrijdag = [
    { time: '8:30', activity: 'Wetenschappen' },
    { time: '9:20', activity: 'Wetenschappen' },
    { time: '10:10', activity: 'Speeltijd' },
    { time: '10:25', activity: 'Nederlands' },
    { time: '11:15', activity: 'Biologie' },
    { time: '12:05', activity: 'Middagpauze' },
    { time: '13:10', activity: 'Wiskunde' },
    { time: '14:00', activity: 'Wiskunde' },
    { time: '14:50', activity: 'Speeltijd' },
    { time: '15:05', activity: 'Frans' },
    { time: '15:55', activity: 'vrij' },
    { time: '16:45', activity: 'vrij' }
]

const weekschedule = [zondag, maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag]

// bepaal de dag en de bijhorende schedule
const today = new Date().getDay();
let schedule = weekschedule[today];

// bouw de tabel
const dagtabel = document.querySelector("#schedule");

for (let i = 0; i < schedule.length; i++) {
  let row = dagtabel.insertRow(-1);
  let cell = row.insertCell(0);
  cell.id = "tijd_" + i;
  cell.innerHTML = schedule[i].time;
  cell = row.insertCell(1);
  cell.id = "activiteit_" + i;
  cell.innerHTML = schedule[i].activity;
}


let betterschedule = [];

for (let index = 0; index < schedule.length; index += 1) {
    const huidigElement = schedule[index];

    const uurEnMinuten = huidigElement.time.split(':').map(Number);

    const uur = uurEnMinuten[0] //22
    const minuten = uurEnMinuten[1]// 0 

    const startminuten = uur * 60 + minuten;

    const volgendeIndex = (index + 1) % schedule.length;

    const volgendElement = schedule[volgendeIndex];

    const volgendeuurEnMinuten = volgendElement.time.split(':').map(Number);
    const volgendeuur = volgendeuurEnMinuten[0]
    const volgendeminuten = volgendeuurEnMinuten[1]
    const volgendestartminuten = volgendeuur * 60 + volgendeminuten;


    const eindminuten = volgendElement.time
    const eindtijd = volgendestartminuten
    const beteritem = {
        startTijd: huidigElement.time,
        startMinuten: startminuten,
        eindMinuten: eindtijd,
        activity: huidigElement.activity,
        eindTijd: volgendElement.time

    }

    betterschedule.push(beteritem);
}

console.log(betterschedule);
