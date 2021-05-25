class Player{
    constructor(name,shootAcc,deffAcc){
        this.name = name;
        this.shootAcc = shootAcc;
        this.deffAcc = deffAcc;
        this.active = null;
        this.miss = 0;
        this.points = 0;
    }
    shoot(){
        let rand = Math.ceil(Math.random()*10);
        if (this.shootAcc >= rand) {
            this.points +=2;
            if(this.team == "team1"){
                team1.score+=2;
                console.log(team1);
            }else{
                team2.score+=2;
                console.log(team2);
            }
            
            return this.name+" ***SCORE***";
        }else{
            this.miss++;
            console.log(this);
            return this.name+" ---MISS---";
        }
    }
}

class Defender extends Player{
    constructor(name,shootAcc,deffAcc){
        super(name,shootAcc,deffAcc);
    }
}

class Middle extends Player {
    constructor(name, shootAcc, deffAcc) {
        super(name, shootAcc, deffAcc);
    }
}


class Attacker extends Player {
    constructor(name, shootAcc, deffAcc) {
        super(name, shootAcc, deffAcc);
    }
    // shoot(){
    //     
    // }
}

var attackers = [
    new Attacker("Fiego",7,2),
    new Attacker("Thoms",6,4),
    new Attacker("Sims",8,1)
]

var middlers = [
    new Middle("John",5,5),
    new Middle("Harry",4,5),
    new Middle("Jacks",5,4)
]

var defenders = [
    new Defender("Smith",2,8),
    new Defender("Drago",3,7),
    new Defender("Lucijan",4,6)
]