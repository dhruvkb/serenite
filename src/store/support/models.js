const uuid4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
  const r = Math.random() * 16 | 0
  const v = c === 'x' ? r : (r & 0x3 | 0x8)
  return v.toString(16)
})

/**
 * Labels are used to group issues into categories.
 */
export class Label {
  static COLOR_CODES = {
    berryRed: 'rgb(184, 37, 95)',
    red: 'rgb(219, 64, 53)',
    green: 'rgb(41, 148, 56)',
    teal: 'rgb(21, 143, 173)',
    skyBlue: 'rgb(20, 170, 245)',
    grape: 'rgb(136, 77, 255)',
    violet: 'rgb(175, 56, 235)',
    lavender: 'rgb(235, 150, 235)',
    salmon: 'rgb(255, 141, 133)'
  }

  static COLOR_NAMES = Object.fromEntries(Object
    .keys(Label.COLOR_CODES)
    .map(colorName => [
      colorName,
      colorName
        .replace(/([A-Z])/g, str => ` ${str.toLocaleLowerCase()}`)
        .replace(/^./, str => str.toLocaleUpperCase())
    ])
  )

  constructor (name, colorName) {
    this.id = uuid4()
    this.name = name
    this.colorName = colorName
  }

  /**
   * Get the RGB color code associated with the label.
   * @return {string} the color code associated with the label
   */
  get colorCode () {
    return Label.COLOR_CODES[this.colorName]
  }
}

/**
 * A task describes a major goal to be accomplished.
 */
export class Task {
  constructor (title) {
    this.id = uuid4()
    this.title = title
    this.isComplete = false
  }
}
