<template>
  <section>
    <div class="calendar">
      <div v-for="(date, index) in dates" :key="index" class="date" :class="{ thin: !date.thisMonth, today: date.today }">
        <a href="#" @click.prevent="open(index)">
          {{ date.day }}<br>{{ date.todoTitle }}
        </a>
      </div>
    </div>
    <Todo :active="active" :date="date" @close="close" @save="save" />
  </section>
</template>

<script>
import Todo from "./Todo"

export default {
  components: { Todo },
  props: {
    dates: Array
  },
  data: function() {
    return {
      active: false,
      date: {}
    }
  },
  methods: {
    open: function(num) {
      this.active = true
      this.date = this.dates[num]
    },
    close: function() {
      this.active = false
    },
    save: function(date) {
      this.$emit('save', date)
    }
  }
}
</script>

<style scoped>
.calendar {
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
}

.calendar div {
  width: calc(100% / 7);
  border: solid 1px rgb(201, 198, 198);
  box-sizing: border-box;
}

.date {
  cursor: pointer;
  height: 100px;
  padding-top: 8px;
  font-size: 24px;
}

.thin {
  opacity: 0.5;
}

.today {
  font-weight: bold;
}

a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color:#222;
}

@media screen and (max-width: 1000px) {
  .calendar {
    width: 100%;
  }
}
</style>