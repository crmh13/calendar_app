<template>
  <div class="todo" v-if="active" @click.self="close">
    <div>
      <p class="close"><a href="#" @click.prevent="close">閉じる</a></p>
      <dl>
        <dt><label>タイトル</label></dt>
        <dd><input type="text" v-model="date.todoTitle"></dd>
        <dt><label>内容</label></dt>
        <dd><textarea v-model="date.todoDescription" rows="5"></textarea></dd>
      </dl>
      <button class="save" @click="save">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    date: Object
  },
  methods: {
    close: function() {
      this.$emit('close')
    },
    save: function() {
      const date = {
        date: this.date.date,
        title: this.date.todoTitle,
        description: this.date.todoDescription
      }
      this.$store.commit('save', date)
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.todo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}

.todo div {
  position: absolute;
  width: 500px;
  height: 250px;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

textarea {
  vertical-align: middle;
  width: 100%;
}

input {
  width: 100%;
}

.close {
  text-align: right;
  margin-right: 8px;
}

.close a {
  border: 1px solid #222;
  border-radius: 5px;
  padding: 5px;
  color: #222;
  text-decoration: none;
}

dt {
  width: 100px;
  display: inline-block;
  margin-bottom: 20px;
}
dd {
  margin-left: 16px;
  width: 350px;
  display: inline-block;
  text-align: left;
}

.save {
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

@media screen and (max-width: 1000px) {
  .todo div {
    width: 80%;
  }

  dt {
    display: block;
    text-align: center;
    margin: auto;
  }
  dd {
    display: block;
    text-align: center;
    margin: auto;
  }
}

@media screen and (max-width: 470px) {
  dd {
    margin-top: 5px;
    width: 80%;
  }
}
</style>