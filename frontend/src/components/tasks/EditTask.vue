<template>
  <div class="c-edit-task" :class="modalEditTask ?  'open' : 'close'" @click.self="$emit('closeModalEditTask')">
    <div class="c-edit-task__modal text-start">
      <div class="c-edit-task__header d-flex align-items-center justify-content-between">
        <h5 class="c-edit-task__title">Edit task</h5>
        <button type="button" class="btn-close" @click.self="$emit('closeModalEditTask')"></button>
      </div>

      <div class="c-edit-task__body">
        <div class="d-flex align-items-center justify-content-between">
          <div class="mb-3">
            <label for="taskName" class="form-label">Name</label>
            <input type="text" class="form-control" id="taskName" v-model="name">
          </div>
          <div class="l-edit-task__title text-start mb-3">
            <font-awesome-icon :icon="formatStatusIcon()" :class="'l-task__status-icon--'+ formatStatusClass()" />
            <label for="taskStatus" class="form-label">Status</label>
            <select id="taskStatus" class="form-select" v-model="status">
              <option value="NEW">New</option>
              <option value="IN_PROGRESS">In progress</option>
              <option value="STOPPED">Stopped</option>
              <option value="DONE">Done</option>
            </select>
          </div>
        </div>

        <div class="mb-3">
          <label for="taskMessage" class="form-label">Message</label>
          <textarea class="form-control" id="taskMessage" rows="3" v-model="message"></textarea>
        </div>
      </div>

      <div class="c-edit-task__body d-flex">
        <div class="c-edit-task__hour mb-3">
          <label for="taskHour" class="form-label">Hour</label>
          <select id="taskHour" class="form-select" v-model="hourEvent">
            <option selected>--</option>
            <option value="00h" >00h</option>
            <option value="01h">01h</option>
            <option value="02h">02h</option>
            <option value="03h">03h</option>
            <option value="04h">04h</option>
            <option value="05h">05h</option>
            <option value="06h">06h</option>
            <option value="07h">07h</option>
            <option value="08h">08h</option>
            <option value="09h">09h</option>
            <option value="10h">10h</option>
            <option value="11h">11h</option>
            <option value="12h">12h</option>
            <option value="13h">13h</option>
            <option value="14h">14h</option>
            <option value="15h">15h</option>
            <option value="16h">16h</option>
            <option value="17h">17h</option>
            <option value="18h">18h</option>
            <option value="19h">19h</option>
            <option value="20h">20h</option>
            <option value="21h">21h</option>
            <option value="22h">22h</option>
            <option value="23h">23h</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="taskDate" class="form-label">Date</label>
          <input type="date" class="form-control" id="taskDate" v-model="dateEvent">
        </div>
      </div>

      <div class="c-edit-task__footer text-end">
        <button type="button" class="btn o-btn-close btn-secondary" @click.self="$emit('closeModalEditTask')">Close</button>
        <button type="button" class="btn o-btn-save btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EditTask',
  props: {
    modalEditTask: Boolean,
    task: { type: Object, required: true }
  },
  data () {
    return {
      name: this.task.name,
      status: this.task.status,
      message: this.task.message,
      hourEvent: this.task.hourEvent,
      dateEvent: this.formatDate()
    }
  },
  methods: {
    formatDate () {
      const d = new Date(this.task.dateEvent)
      let month = '' + (d.getMonth() + 1)
      let day = '' + d.getDate()
      const year = d.getFullYear()

      if (month.length < 2) { month = '0' + month }
      if (day.length < 2) { day = '0' + day }

      return [year, month, day].join('-')
    },
    formatStatus () {
      return this.status.toLowerCase().replace('_', ' ')
    },

    formatStatusClass () {
      return this.status.toLowerCase()
    },

    formatStatusIcon () {
      if (this.status === 'NEW') return 'fa-solid fa-circle-exclamation'
      if (this.status === 'IN_PROGRESS') return 'fa-solid fa-circle-exclamation'
      if (this.status === 'STOPPED') return 'fa-solid fa-circle-stop'
      if (this.status === 'DONE') return 'fa-solid fa-circle-check'
    }
  }
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/_main.scss';

.c-edit-task {
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

.c-edit-task__header {
  padding-bottom: $gutter * 2;
  margin-bottom: $gutter * 2;
  border-bottom: 1px solid $light;
}
.l-edit-task__title {
  margin-left: $gutter;
  cursor: default;

  label {
    margin-left: $gutter;
  }
  span {
    font-size: .8rem;
  }
}

.c-edit-task__modal {
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

.c-edit-task__message {
  min-height: 100px;
  margin: ($gutter * 2) 0;
}

.c-edit-task__hour {
  margin-right: $gutter;
}

.c-edit-task__footer {
  padding-top: $gutter * 2;
  border-top: 1px solid $light;
  .o-btn-close {
    margin-right: $gutter;
  }

  .o-btn-save {
    background-color: $primaryColor;
    border: none;

    &:hover {
      background-color: $primaryColorDark;
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
