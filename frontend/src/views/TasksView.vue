<template>
  <HeaderDefault />
  <main class="c-tasks">
    <div class="container">
      <div class="c-tasks__title d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <font-awesome-icon icon="fa-solid fa-clipboard-list" />
          <h4 class="fs-4">My tasks</h4>
        </div>

        <button @click="modalOpen = true" class="js-btn-add-task btn">
          <font-awesome-icon icon="fa-solid fa-circle-plus" />
        </button>
      </div>

      <ul class="c-tasks__list">
        <Task v-for="task in tasks" :key="task.id" :task="task" />
      </ul>
    </div>
    <AddTask :modalOpen="modalOpen" @closeModal="modalOpen = false"/>
  </main>
  <FooterDefault />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderDefault from '@/components/common/HeaderDefault.vue'
import FooterDefault from '@/components/common/FooterDefault.vue'
import Task from '@/components/tasks/Task.vue'
import AddTask from '@/components/tasks/AddTask.vue'

export default defineComponent({
  name: 'TasksView',
  components: {
    HeaderDefault,
    FooterDefault,
    Task,
    AddTask
  },
  data () {
    return {
      modalOpen: false,
      tasks: [
        {
          id: 'any_id',
          status: 'NEW',
          name: 'Lays A Bela!',
          message: 'any_message',
          hourEvent: 'any_hour',
          dateEvent: new Date(),
          userId: 'any_userId'
        },
        {
          id: 'any_id',
          status: 'IN_PROGRESS',
          name: 'Não vivo sem minha pricesa Lays',
          message: 'any_message',
          hourEvent: 'any_hour',
          dateEvent: new Date(),
          userId: 'any_userId'
        },
        {
          id: 'any_id',
          status: 'STOPPED',
          name: 'Lays maravilhosa',
          message: 'any_message',
          hourEvent: 'any_hour',
          dateEvent: new Date(),
          userId: 'any_userId'
        },
        {
          id: 'any_id',
          status: 'DONE',
          name: 'Lays linda demais',
          message: 'any_message',
          hourEvent: 'any_hour',
          dateEvent: new Date(),
          userId: 'any_userId'
        }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
  @import '@/assets/scss/main';
  .c-tasks__title {
    h4 {
      margin-left: $gutter;
    }

    .js-btn-add-task {
      background-color: transparent;
      border: none;
      box-shadow: none;
      padding: 0;
      margin: 0;
      svg {
        width: 40px;
        height: 40px;
        transition: .2s;
        color: $primaryColor;

        &:hover {
          color: $primaryColorDark;
        }
      }
    }
  }

  .c-tasks__list {
    padding: ($gutter*2) 0;
  }

</style>
