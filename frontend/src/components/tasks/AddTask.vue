<template>
  <div class="c-add-task" :class="modalOpen ?  'open' : 'close'" @click.stop="$emit('closeModal')">
    <div class="c-add-task__modal text-start">
      <div class="c-add-task__header d-flex align-items-center justify-content-between">
        <h5 class="c-add-task__title">Add task</h5>
        <button type="button" class="btn-close"></button>
      </div>

      <div class="c-add-task__body">
        <div class="mb-3">
          <label for="taskName" class="form-label">Name</label>
          <input type="text" class="form-control" id="taskName">
        </div>
        <div class="mb-3">
          <label for="taskMessage" class="form-label">Message</label>
          <textarea class="form-control" id="taskMessage" rows="3"></textarea>
        </div>
      </div>

      <div class="c-add-task__body d-flex">
        <div class="c-add-task__hour mb-3">
          <label for="taskHour" class="form-label">Hour</label>
          <select id="taskHour" class="form-select">
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
          <input type="date" class="form-control" id="taskDate">
        </div>
      </div>

      <div class="c-add-task__footer text-end">
        <button type="button" class="btn o-btn-close btn-secondary" @click.stop="$emit('closeModal')">Close</button>
        <button type="button" class="btn o-btn-save btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AddTask',
  props: {
    modalOpen: Boolean
  }

})
</script>

<style scoped lang="scss">
@import '@/assets/scss/_main.scss';
.c-add-task {
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

.c-add-task__modal {
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

.c-add-task__header {
  padding-bottom: $gutter * 2;
  margin-bottom: $gutter * 2;
  border-bottom: 1px solid $light;
}

.c-add-task__hour {
  margin-right: $gutter;
}

.c-add-task__footer {
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

</style>
