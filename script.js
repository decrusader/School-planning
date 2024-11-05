
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
    { time: '8:30', activity: '' },
    { time: '9:20', activity: '' },
    { time: '10:10', activity: 'Speeltijd' },
    { time: '10:25', activity: '' },
    { time: '11:15', activity: '' },
    { time: '12:05', activity: 'Middagpauze' },
    { time: '13:10', activity: '' },
    { time: '14:00', activity: '' },
    { time: '14:50', activity: 'Speeltijd' },
    { time: '15:05', activity: '' },
    { time: '15:55', activity: '' },
    { time: '16:45', activity: 'vrij' },
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
