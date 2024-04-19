input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    matrix.comment("alle Zeichen aus Programmspeicher anzeigen")
    matrix.clearMatrix()
    matrix.writeCharset()
    matrix.displayMatrix()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    matrix.comment("alle Zeichen aus Programmspeicher in EEPROM F800-FFFF programmieren")
    matrix.clearMatrix()
    matrix.writeCharset()
    if (matrix.burnEEPROM("F800", 0, 15, 128, 63488)) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
    matrix.clearMatrix()
    matrix.writeCharsetEEPROM()
    matrix.displayMatrix()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    matrix.comment("EEPROM F800-FFFF leer, wenn 128 Byte mit Wert 255 gezählt werden")
    matrix.clearMatrix()
    for (let Index = 0; Index <= 15; Index++) {
        adr = matrix.matrix_eEEPROM_Startadresse(matrix.eEEPROM_Startadresse.F800) + Index * 128
        matrix.writeTextCharset(Index, 0, matrix.matrix_text("" + matrix.formatHex(adr, NumberFormat.UInt16BE) + " " + matrix.checkEEPROM(adr, 255)))
    }
    matrix.displayMatrix()
})
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    matrix.comment("alle Zeichen aus EEPROM anzeigen")
    matrix.clearMatrix()
    matrix.writeCharsetEEPROM()
    matrix.displayMatrix()
})
let adr = 0
matrix.init(matrix.ePages.y128)
matrix.displayMatrix()
