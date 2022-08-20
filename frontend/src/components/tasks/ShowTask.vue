<template>
  <article class="c-show-task" :class="modalShowTask ? 'open' : 'close'" @click.self="$emit('closemodalShowTask')">
    <div class="c-show-task__modal">
      <div class="c-show-task__header d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <font-awesome-icon :icon="formatStatusIcon()" :class="'l-task__status-icon--'+ formatStatusClass()" />
          <div class="l-show-task__title text-start">
            <p>{{task.name}}</p>
            <span>Status: {{formatStatus()}}</span>
          </div>
        </div>
        <button type="button" class="btn-close" @click.self="$emit('closemodalShowTask')"></button>
      </div>
      <div class="c-show-task__body">
        <div class="c-show-task__message card">
          <div class="card-body">
            <p>{{task.message}}</p>
          </div>
        </div>

        <div class="c-show-task__time d-flex align-items-center justify-content-between">
          <span class="c-show-task__hour">Event hour: {{task.hourEvent}}</span>
          <span class="c-show-task__date">Event date: {{formatDate()}}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ShowTask',
  props: {
    modalShowTask: Boolean,
    task: { type: Object, required: true }
  },
  methods: {
    formatDate () {
      const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
      const data = new Date(this.task.dateEvent)
      const dataFormatada = ((data.getDate() + ' ' + meses[(data.getMonth())] + ' ' + data.getFullYear()))
      return dataFormatada
    },
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
@import '@/assets/scss/_main.scss';

.c-show-task {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $backgroundTransparent;
  &.open {
    display: block;
  }

  &.close {
    display: none;
  }
}

.l-show-task__title {
  margin-left: $gutter;
  cursor: default;
  span {
    font-size: .8rem;
  }
}

.c-show-task__modal {
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 90%;
  max-width: 500px;
  padding: $gutter *2;
  border-radius: $gutter;
  background-color: $white;
}

.c-show-task__message {
  min-height: 100px;
  margin: ($gutter * 2) 0;
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
