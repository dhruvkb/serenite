<template>
  <SereneHeader
    :heading="day"
    :subheading="date"/>
</template>

<script>
  import SereneHeader from '@/atoms/serene-header/SereneHeader'

  export default {
    name: 'Today',
    components: {
      SereneHeader
    },
    data () {
      return {
        now: {
          dayOfWeek: null,

          date: null,
          month: null,
          year: null
        },

        looper: null,
        interval: 5 // minutes
      }
    },
    computed: {
      /**
       * Get the current day of the week. The first day of the week is taken to
       * be Sunday.
       *
       * @return {string} the name of the current day of the week
       */
      day () {
        const DAYS_OF_WEEK = [
          'Sunday',
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', // Workdays
          'Saturday'
        ]
        return DAYS_OF_WEEK[this.now.dayOfWeek]
      },
      /**
       * Get the current date in the format `d mmmm, yyyy` according to the
       * Wikipedia time coding format. These components are
       * - `d`: one-digit month for months below 10
       * - `mmmm`: month spelled out in full
       * - `,`: an actual comma
       * - `yyyy`: four-digit year
       *
       * This is equivalent to the Python `strftime` format `%-d %B, %Y`.
       *
       * @return {string} the date in a readable format
       * @see {@link https://strftime.org|Python `strftime` reference}
       */
      date () {
        const MONTHS = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ]
        const month = MONTHS[this.now.month]

        return `${this.now.date} ${month}, ${this.now.year}`
      }
    },
    methods: {
      /**
       * Get the current date and populate the data variables with the current
       * day of the week, date, month and year.
       */
      setDate () {
        const now = new Date()

        this.now.dayOfWeek = now.getDay()

        this.now.date = now.getDate()
        this.now.month = now.getMonth()
        this.now.year = now.getFullYear()
      },

      /**
       * Start the looper that updates the day and date at fixed intervals. The
       * function first stops the looper if already running.
       */
      startInterval () {
        if (this.looper !== null) {
          this.stopInterval()
        }

        this.setDate() // Set the date now
        // Set it to auto-update at regular intervals
        this.looper = setInterval(() => {
          this.setDate()
        }, this.interval * 60 * 1000)
      },
      /**
       * Stop the looper that updates the day and date at fixed intervals.
       */
      stopInterval () {
        if (this.looper !== null) {
          clearInterval(this.looper)
        }
        this.looper = null
      }
    },
    created () {
      this.startInterval()
    },
    beforeDestroy () {
      this.stopInterval()
    }
  }
</script>
