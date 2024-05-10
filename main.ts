radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        while (input.soundLevel() <= 120) {
            basic.pause(1)
        }
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendNumber(1)
    }
})
radio.setGroup(197)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
