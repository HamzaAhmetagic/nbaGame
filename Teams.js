class Team{
    constructor(defender,middle,attacker){
        this.members = [defender,middle,attacker];
        this.defender = defender;
        this.middle = middle;
        this.attacker = attacker;
        this.score = 0;        
    }
}

class Team1 extends Team{
    constructor(defender, middle, attacker) {
        super(defender,middle,attacker)
        this.defender.team = "team1";
        this.middle.team = "team1";
        this.attacker.team = "team1";
    }
    showStatistic(){
        let text = ``
        for (let i = 0; i < this.members.length; i++) {
            const player = this.members[i];
            if (player.active) {
                text +=`
                <p> <img src="ball11.png" class="ball" />${player.name}  stats : ${player.points} <span>${player.miss}</span> </p>
                `
            }else{
                text += `<p>${player.name}  points : ${player.points} <span>${player.miss}</span> </p>`
            }
        }
        return text;
    }
}

class Team2 extends Team{
    constructor(defender, middle, attacker) {
        super(defender, middle, attacker)
        this.defender.team = "team2";
        this.middle.team = "team2";
        this.attacker.team = "team2";
    }
    showStatistic() {
        let text = ``
        for (let i = 0; i < this.members.length; i++) {
            const player = this.members[i];
            if (player.active) {
                text += `
                <p> <img src="ball11.png" class="ball" />${player.name}  stats : ${player.points} <span>${player.miss}</span> </p>
                `
            } else {
                text += `<p>${player.name}  points : ${player.points} <span>${player.miss}</span> </p>`
            }
        }
        return text;
    }
}

var team1 = new Team1(defenders[0],middlers[1],attackers[2]);
var team2 = new Team2(defenders[1],middlers[2],attackers[0]);
console.log(team1,team2)