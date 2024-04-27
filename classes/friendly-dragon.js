const Dragon = require('./dragon')


class FriendlyDragon extends Dragon{
    constructor(name, color, lifeGoals, friend){
       super(name, color)
       this.lifeGoals = lifeGoals
       this.friend = friend
    }
    hasLifeGoals(){
        // the reason we use this.lifeGoals is because its referring to the properties in that instance life goals is expected to be an array
        this.lifeGoals.forEach(element => {
           console.log(`${this.name} likes to ${element}`)
        });
    }
    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}`
    }

}

module.exports = FriendlyDragon
