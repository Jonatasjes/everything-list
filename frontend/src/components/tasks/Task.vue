<template>

  <li class="l-task d-flex align-items-center justify-content-between" data-id="{{task.id}}" @click.self="modalShowTask = true">
    <div class="d-flex align-items-center">
      <font-awesome-icon :icon="formatStatusIcon()" :class="' btn l-task__status-icon--'+ formatStatusClass()" @click="$emit('changeStatus')" />
      <div class="l-task__title text-start">
        <p>{{task.name}}</p>
        <span>Status: {{formatStatus()}}</span>
      </div>
    </div>
    <div class="l-task__interation">
      <button class="l-task__edit js-btn-edit btn btn-outline-dark" @click="modalEditTask = true">
        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
      </button>
      <button class="l-task__delete js-btn-delete btn btn-outline-danger">
        <font-awesome-icon icon="fa-solid fa-trash-can" />
      </button>
    </div>
    <ShowTask v-if="modalShowTask" :modalShowTask="modalShowTask" :task="task" @closeModalShowTask="modalShowTask = false" />
    <EditTask v-if="modalEditTask" :modalEditTask="modalEditTask" :task="task" @closeModalEditTask="modalEditTask = false" />
  </li>

</template>

<script  lang="ts">
import { defineComponent } from 'vue'
import ShowTask from '@/components/tasks/ShowTask.vue'
import EditTask from '@/components/tasks/EditTask.vue'

export default defineComponent({
  name: 'AddTask',
  components: {
    ShowTask,
    EditTask
  },
  props: {
    task: { type: Object, required: true }
  },
  data () {
    return {
      modalShowTask: false,
      modalEditTask: false
    }
  },
  methods: {
    formatStatus () {
      return this.task.status.toLowerCase().replace('_', ' ')
    },

    formatStatusClass () {
      return this.task.status.toLowerCase()
    },

    formatStatusIcon () {
      if (this.task.status === 'NEW') return 'fa-solid fa-circle-exclamation'
      if (this.task.status === 'IN_PROGRESS') return 'fa-solid fa-circle-exclamation'
      if (this.task.status === 'STOPPED') return 'fa-solid fa-circle-stop'
      if (this.task.status === 'DONE') return 'fa-solid fa-circle-check'
    }
  }
})
</script>

<style scoped lang="scss">
  @import '@/assets/scss/main';
  .l-task {
    padding:0 $gutter;
    height: 60px;
    border-bottom: 1px solid $light;
    cursor: pointer;

    &:hover {
      box-shadow: -5px -5px 7px -6px $light;
    }

    input {
      margin-top: 0;
    }

    .l-task__title {
      margin-left: $gutter;
      cursor: default;
      span {
        font-size: .8rem;
      }
    }

    .l-task__interation {
      button {
        margin-left: $gutter;
      }
    }
  }

  .l-task__status-icon--new {
    color: $new;
  }

  .l-task__status-icon--in_progress {
    color: $inProgress;
  }

  .l-task__status-icon--stopped {
    color: $stoped;
  }
  .l-task__status-icon--done {
    color: $done;
  }
</style>
