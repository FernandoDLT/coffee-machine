class CoffeeMachineMaker{
    constructor(machineMake,machineModel,machineColor,machineBrewers) {
        this.make = machineMake
        this.model = machineModel
        this.color = machineColor
        this.machineBrewers = machineBrewers
    }
    power() {
        alert('Now Powering on...')
    }
    brew() {
        alert('COUTION!...WWWWWWWery HOT!')
    }
    brewingFinished() {
        alert('Poor with CAUTION!')
    }
}
let blackAndDecker = new CoffeeMachineMaker('Black & Decker', 'B&D Brew Beast', 'Devil Red', 2)
let coffeeMate = new CoffeeMachineMaker('Coffee Mate', 'The Sleeper Waker', 'Tomb Stone Black', 1)

class ExpressoMachine {
    constructor(color,make,model,price) {
        this.color = color
        this.make = make
        this.model = model
        this.price = price
    }
    power() {
        alert('Now Powering on...')
    }
    steam() {
        alert('Pfffffffffffffff!!!!...')
    }
    brew() {
        alert('COUTION!...Very HOT!')
    }
    brewingFinished() {
        alert('Poor with CAUTION!')
    }
}
let kurig = new ExpressoMachine('Kurig', 'The Sleeper Waker-Upper', 'Alluminum', '$200')