<template>
  <div class="month">
    <h1><a href="#" @click="changePrev()">&lt;</a>{{ month }}<a href="#" @click="changeNext()">&gt;</a></h1>
  </div>
</template>

<script>
export default {
  props: {
    month: String
  },
  methods: {
    changePrev: function() {
      this.$emit("changePrev")
    },
    changeNext: function() {
      this.$emit("changeNext")
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(179, 178, 178);
  padding: 16px;
}
</style>