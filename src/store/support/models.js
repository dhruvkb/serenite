import colors from '@/styles/exports/colors.scss'

import { uuid4 } from '@/utilities/uuid'

/**
 * Labels are used to group issues into categories.
 */
export class Label {
  /**
   * Enum for color names and their hexadecimal codes
   * @enum {string}
   */
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

  /**
   * Enum for color names and their formatted display names
   * @enum {string}
   */
  static COLOR_NAMES = Object.fromEntries(Object
    .keys(Label.COLOR_CODES)
    .map(colorName => [
      colorName,
      colorName.replace(/^./, str => str.toLocaleUpperCase())
    ])
  )

  /**
   * Create a new instance of `Label` with the given name and color name. The
   * name of the color is the key that can be mapped to the hexadecimal code of
   * the color.
   *
   * @constructor
   * @param {string} name - the name of the label
   * @param {string} colorName - the name of the color assigned to the label
   */
  constructor (name, colorName) {
    this.id = uuid4()
    this.name = name
    this.colorName = colorName
  }

  /**
   * Get the hexadecimal code of the color associated with the label. This is
   * derived from the `colorName` attribute on the `Label` instance.
   *
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
