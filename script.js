
const element = document.getElementById("demo");
setInterval(function () {
    const d = new Date();
    let text = d.toLocaleTimeString();

    const huidigeMinuten = d.getMinutes() + d.getHours() * 60;

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

const schedule = [
    { time: '7:45', activity: 'nietvroeger douchen' },
    { time: '8:15', activity: 'wekken' },
    { time: '8:30', activity: 'eten' },
    { time: '9:15', activity: 'verzamelen arena - lesmoment 1' },
    { time: '10:45', activity: 'pauze bar' },
    { time: '11:05', activity: 'lesmoment 2' },
    { time: '12:30', activity: 'middageten en vrij' },
    { time: '13:45', activity: 'verzamelen arena - lesmoment 3' },
    { time: '15:15', activity: 'pauze - verzamelen' },
    { time: '15:20', activity: 'verzamelen bronne - start namiiddagactiviteiten' },
    { time: '17:45', activity: 'vrij' },
    { time: '18:30', activity: 'avondeten - vrij' },
    { time: '19:45', activity: 'verzamelen arena - start avondactiviteiten' },
    { time: '21:30', activity: 'vrij - bar' },
    { time: '22:00', activity: 'niet meer douchen' },
    { time: '22:00', activity: 'slapen gaan 1e graad blauw bandje' },
    { time: '22:30', activity: 'slapen gaan 2e graad groen bandje' },
    { time: '22:45', activity: 'slapen gaan 3e graad rood bandje' },
]

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
