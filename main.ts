radio.onReceivedNumber(function (receivedNumber) {
    if (chosen == 1 && receivedNumber == 2) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # .
            . # # # .
            . # # # .
            `)
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
let chosen = 0
let channel = 1
radio.setGroup(1)
basic.showNumber(channel)
while (!(input.buttonIsPressed(Button.B))) {
    if (input.buttonIsPressed(Button.A)) {
        channel += 1
        radio.setGroup(channel)
        basic.showNumber(channel)
    }
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(32)
        basic.showString("R")
        basic.showString("P")
        basic.showString("S")
        basic.pause(100)
        chosen = randint(1, chosen)
        radio.sendNumber(chosen)
    }
})
