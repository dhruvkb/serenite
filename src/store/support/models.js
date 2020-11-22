import { uuid4 } from '@/utilities/uuid'

import colors from '@/styles/exports/colors.scss'

class Entity {
  /**
   * Create a new instance of `Entity` with the given data.
   *
   * @constructor
   * @param {string} id - the UUID that uniquely identifies the entity
   * @param {number} order - the position or priority of the entity
   * @param {number} timestampCreated - the creation timestamp of the entity
   */
  constructor ({
    id = uuid4(),
    order = 0,
    timestampCreated = (new Date()).getTime()
  }) {
    this.id = id
    this.order = order
    this.timestampCreated = timestampCreated
  }

  /**
   * Compare this entity to another entity. The outcome is a number, the sign
   * of which determines the outcome of the comparison. A positive number
   * indicates that the other entity should succeed this one, a negative number
   * suggests the opposite and zero implies equality.
   *
   * @param {Entity} other - the `Entity` instance to compare with this one
   * @return {number} a number indicating the order of precedence
   */
  compare (other) {
    if (this.order !== other.order) {
      return this.order - other.order
    } else {
      return other.timestampCreated - this.timestampCreated
    }
  }
}

/**
 * Labels are used to group issues into categories.
 */
export class Label extends Entity {
  /**
   * Enum for color names and their hexadecimal codes
   * @enum {string}
   */
  static COLOR_CODES = {
    grape: colors.labelGrape,
    violet: colors.labelViolet,
    sky: colors.labelSky,
    green: colors.labelGreen,
    salmon: colors.labelSalmon,
    orange: colors.labelOrange,
    berry: colors.labelBerry,
    red: colors.labelRed
  }

  /**
   * Enum for color names and their formatted display names
   * @enum {string}
   */
  static COLOR_NAMES = Object.fromEntries(
    Object.keys(Label.COLOR_CODES)
      .map(colorKey => [
        colorKey,
        colorKey.replace(/^./, str => str.toLocaleUpperCase())
      ])
  )

  /**
   * Create a new instance of `Label` with the given data.
   *
   * @constructor
   * @param {string} name - the name of the label
   * @param {string} colorKey - the name of the color assigned to the label
   * @param {Object} args - consists of `id`, `order` and `timestampCreated`
   */
  constructor ({
    name,
    colorKey = Object.keys(Label.COLOR_CODES)[0],
    ...args
  }) {
    super(args)

    this.name = name
    this.colorKey = colorKey
  }

  /**
   * Get a POJO representation of the data contained in the object.
   *
   * @return {Object} a plain representation of the encapsulated data
   */
  get pojo () {
    return {
      name: this.name,
      colorKey: this.colorKey,

      id: this.id,
      order: this.order,
      timestampCreated: this.timestampCreated
    }
  }

  /**
   * Get the hexadecimal code of the color associated with the label. This is
   * derived from the `colorKey` attribute on the `Label` instance.
   *
   * @return {string} the color code associated with the label
   */
  get colorCode () {
    return Label.COLOR_CODES[this.colorKey]
  }

  /**
   * Get the display name of the color associated with the label. This is
   * derived from the `colorKey` attribute on the `Label` instance.
   *
   * @return {string} the color name associated with the label
   */
  get colorName () {
    return Label.COLOR_NAMES[this.colorKey]
  }
}

/**
 * A task describes a major goal to be accomplished.
 */
export class Task extends Entity {
  /**
   * Create a new instance of `Task` with the given data.
   *
   * @constructor
   * @param {string} title - the title of the task
   * @param {boolean} isComplete - whether the task is checked off
   * @param {Object} args - consists of `id`, `order` and `timestampCreated`
   */
  constructor ({
    title,
    isComplete = false,
    ...args
  }) {
    super(args)

    this.title = title
    this.isComplete = isComplete
  }

  /**
   * Get a POJO representation of the data contained in the object.
   *
   * @return {Object} a plain representation of the encapsulated data
   */
  get pojo () {
    return {
      title: this.title,
      isComplete: this.isComplete,

      id: this.id,
      order: this.order,
      timestampCreated: this.timestampCreated
    }
  }
}
