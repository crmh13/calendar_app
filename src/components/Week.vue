<template>
  <div class="calendar">
  <div v-for="(week, index) in weeks" :key="index" class="week" :class="{ sunday: week === '日', saturday: week === '土'}">
    {{ week }}
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      weeks: [ '日', '月', '火', '水', '木', '金', '土']
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

.week {
  font-weight: bold;
}

.sunday {
  color: red;
}

.saturday {
  color: blue;
}

</style>