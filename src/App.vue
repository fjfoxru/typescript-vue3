<script setup lang="ts">
import {ref, computed} from "vue"
import Card from "./components/Card.vue"
import {STATUSES, type Task} from "./types/types"


const task = ref<string>("")
const status = ref<STATUSES>(STATUSES.IMPORTANT)
const tasks = ref<Task[]>([])
const count = computed<{
  important: number,
  notimportant: number,
}>(() => {
  return tasks.value.reduce((countObj, task) => {
    return {
      important: task.status === STATUSES.IMPORTANT ? countObj.important += 1 : countObj.important,
      notimportant: task.status === STATUSES.NOTIMPORTANT ? countObj.notimportant += 1 : countObj.notimportant
    }
  }, {important: 0, notimportant: 0})
})

const handlerAdd = (): void => {
  tasks.value.push({
    id: Math.floor(Math.random() * 10000),
    task: task.value,
    status: status.value
  })

  let tg:any = window.Telegram.WebApp;
  const data = JSON.stringify(tasks);
  tg.sendData(data);
  tg.close();

  task.value = ""
  status.value = STATUSES.IMPORTANT
}

</script>

<template>

  <main>
    <input type="text" v-model="task">
    <div>
    <select v-model="status" @keypress.enter="handlerAdd">
      <option :value=STATUSES.IMPORTANT>Важное</option>
      <option :value=STATUSES.NOTIMPORTANT>Не важное</option>
    </select>
    <div
      @click="handlerAdd">
      Подтвердить
    </div>
  </div>
  <Card v-for="task in tasks" :key="task.id" :task="task" />
    <p>Важных: {{ count.important }}</p>
    <p>Не важных: {{ count.notimportant }}</p>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
