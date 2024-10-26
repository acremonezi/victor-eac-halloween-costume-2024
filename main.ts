input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString(" HAPPY HALLOWEEN VICTOR")
    pins.digitalWritePin(DigitalPin.P13, 0)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 20; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            # # # # #
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
