import colors from '@/styles/exports/colors.scss'

import { uuid4 } from '@/utilities/uuid'

/**
 * Labels are used to group issues into categories.
 */
export class Label {
  static COLOR_CODES = {
    berry: colors.labelBerry,
    green: colors.labelGreen,
    teal: colors.labelTeal,
    sky: colors.labelSky,
    grape: colors.labelGrape,
    violet: colors.labelViolet,
    lavender: colors.labelLavender,
    salmon: colors.labelSalmon
  }

  static COLOR_NAMES = Object.fromEntries(Object
    .keys(Label.COLOR_CODES)
    .map(colorName => [
      colorName,
      colorName.replace(/^./, str => str.toLocaleUpperCase())
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
