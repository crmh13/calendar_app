<template>
  <main>
    <Header :month="month" @changePrev="changePrev" @changeNext="changeNext"/>
    <Week/>
    <Day :dates="dates" />
  </main>
</template>

<script>
import moment from "moment"
import Header from "./Header.vue"
import Week from "./Week.vue"
import Day from "./Day"

export default {
  components: {
    Header,
    Week,
    Day
  },
  data: function() {
    return {
      dates: [],
      month: "",
      selectMonth: null,
      today: moment()
    }
  },
  methods: {
    changePrev: function() {
      this.selectMonth = moment(this.selectMonth).subtract(1, "M")
    },
    changeNext: function() {
      this.selectMonth = moment(this.selectMonth).add(1, "M")
    }
  },
  created() {
    this.selectMonth = moment()
  },
  watch: {
    selectMonth: function() {
      this.month = moment(this.selectMonth).format("YYYY年MM月")
      this.dates = []
      const today = moment()
      for (let i = 0; i < moment(this.selectMonth).daysInMonth(); i++) {
        if (today.isSame(moment(this.selectMonth).startOf("M").add(i, "d"), 'day')) {
          this.dates[i] = {
            day: moment(this.selectMonth).startOf("M").add(i, "d").format("DD"),
            thisMonth: true,
            today: true
          }
          continue
        }
        this.dates[i] = {
          day: moment(this.selectMonth).startOf("M").add(i, "d").format("DD"),
          thisMonth: true,
          today: false
        }
      }
      const lastDays = []
      const startDay = moment(this.selectMonth).startOf("M").day()
      for (let i = 0; i < startDay; i++) {
        lastDays[i] = {
          day: moment(this.selectMonth).startOf("M").add(i - startDay, "d").format("DD"),
          thisMonth: false,
          today: false
        }
      } 
      const nextDays = []
      const endDay = moment(this.selectMonth).endOf("M").day()
      let num = 0
      for (let i = 6; i > endDay; i--) {
        nextDays[num] = {
          day: moment(this.selectMonth).endOf("M").subtract(endDay - i, "d").format("DD"),
          thisMonth: false,
          today: false
        },
        num++
      }
      return this.dates = lastDays.concat(this.dates).concat(nextDays.reverse())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: rgb(179, 178, 178);
  padding: 16px;
}
</style>
