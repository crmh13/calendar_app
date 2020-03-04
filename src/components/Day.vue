<template>
  <div class="calendar">
    <div v-for="(date, index) in dates" :key="index" class="date" :class="{ thin: !date.thisMonth, today: date.today }">
      {{ date.day }}
    </div>
  </div>
</template>

<script>

export default {
  props: {
    dates: Array
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

</style>