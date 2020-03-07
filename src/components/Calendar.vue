<template>
  <main>
    <Header :month="month" @changePrev="changePrev" @changeNext="changeNext"/>
    <Week/>
    <Day :dates="dates" />
  </main>
</template>

<script>
import moment from "moment"
import Header from "./Header"
import Week from "./Week"
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
      today: moment(),
    }
  },
  methods: {
    changePrev: function() {
      this.selectMonth = moment(this.selectMonth).subtract(1, "M")
    },
    changeNext: function() {
      this.selectMonth = moment(this.selectMonth).add(1, "M")
    },
  },
  created() {
    this.selectMonth = moment()
  },
  watch: {
    selectMonth: function() {
      this.month = moment(this.selectMonth).format("YYYY年MM月")
      this.dates = []
      const today = moment()
      console.log(this.$store.getters.todo)
      for (let i = 0; i < moment(this.selectMonth).daysInMonth(); i++) {
        const thisDay = moment(this.selectMonth).startOf("M").add(i, "d")
        const todo = this.$store.getters.todo.find(todo => thisDay.isSame(todo.date, 'day'))
        let todayFlg = false
        let todoTitle = ""
        let todoDescription = ""
        if (today.isSame(thisDay, 'day')) todayFlg = true
        if (todo) {
          todoTitle = todo.title
          todoDescription = todo.description
        }
        this.dates[i] = {
          day: thisDay.format("DD"),
          date: thisDay.format("YYYY-MM-DD"),
          thisMonth: true,
          today: todayFlg,
          todoTitle: todoTitle,
          todoDescription: todoDescription
        }
      }
      const lastDays = []
      const startDay = moment(this.selectMonth).startOf("M").day()
      for (let i = 0; i < startDay; i++) {
        const thisDay = moment(this.selectMonth).startOf("M").add(i, "d")
        const todo = this.$store.getters.todo.find(todo => thisDay.isSame(todo.date, 'day'))
        let todayFlg = false
        let todoTitle = ""
        let todoDescription = ""
        if (today.isSame(thisDay, 'day')) todayFlg = true
        if (todo) {
          todoTitle = todo.title
          todoDescription = todo.description
        }
        lastDays[i] = {
          day: moment(this.selectMonth).startOf("M").add(i - startDay, "d").format("DD"),
          date: thisDay.format("YYYY-MM-DD"),
          thisMonth: false,
          today: todayFlg,
          todoTitle: todoTitle,
          todoDescription: todoDescription
        }
      } 
      const nextDays = []
      const endDay = moment(this.selectMonth).endOf("M").day()
      let num = 0
      for (let i = 6; i > endDay; i--) {
        const thisDay = moment(this.selectMonth).startOf("M").add(i, "d")
        const todo = this.$store.getters.todo.find(todo => thisDay.isSame(todo.date, 'day'))
        let todayFlg = false
        let todoTitle = ""
        let todoDescription = ""
        if (today.isSame(thisDay, 'day')) todayFlg = true
        if (todo) {
          todoTitle = todo.title
          todoDescription = todo.description
        }
        nextDays[num] = {
          day: moment(this.selectMonth).endOf("M").subtract(endDay - i, "d").format("DD"),
          date: thisDay.format("YYYY-MM-DD"),
          thisMonth: false,
          today: todayFlg,
          todoTitle: todoTitle,
          todoDescription: todoDescription
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
