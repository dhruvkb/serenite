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
   * Create a new instance of `Label` with the given data.
   *
   * @constructor
   * @param {string} id - the UUID that uniquely identifies the label
   * @param {string} name - the name of the label
   * @param {string} colorName - the name of the color assigned to the label
   */
  constructor ({
    id = uuid4(),
    name,
    colorName
  }) {
    this.id = id
    this.name = name
    this.colorName = colorName
  }

  /**
   * Get a POJO representation of the data contained in the object.
   *
   * @return {Object} a plain representation of the encapsulated data
   */
  get pojo () {
    return {
      id: this.id,
      name: this.name,
      colorName: this.colorName
    }
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
  /**
   * Create a new instance of `Task` with the given data.
   *
   * @constructor
   * @param {string} id - the UUID that uniquely identifies the task
   * @param {string} title - the title of the task
   * @param {boolean} isComplete - whether the task is checked off
   * @param {number} order - the position or priority of the task
   * @param {number} timestampCreated - the timestamp when the task was created
   */
  constructor ({
    id = uuid4(),
    title,
    isComplete = false,
    order = 0,
    timestampCreated = (new Date()).getTime()
  }) {
    this.id = id
    this.title = title
    this.isComplete = isComplete

    this.order = order
    this.timestampCreated = timestampCreated
  }

  /**
   * Get a POJO representation of the data contained in the object.
   *
   * @return {Object} a plain representation of the encapsulated data
   */
  get pojo () {
    return {
      id: this.id,
      title: this.title,
      isComplete: this.isComplete,

      order: this.order,
      timestampCreated: this.timestampCreated
    }
  }
}
