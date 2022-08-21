<template>
  <div>
    <label class="radio-container">
      <input v-if="checked"
             type="radio"
             name="color"
             :value="color.id"
             @input="$emit('input', $event.target.value)"
             checked
      >
      <input v-else type="radio" name="color" :value="color.id" @input="$emit('input', $event.target.value)">
      <span class="checkmark" :style="{ backgroundColor: color.color }"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ColorRadioInput',
  auth: false,
  props: ['color', 'checked']
}
</script>
<style scoped>
.radio-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 32px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.radio-container > input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border: 1px solid gray;
  border-radius: 50%;

}

/* When the radio button is checked, add a blue background */
.radio-container input:checked ~ .checkmark {
  border: 2px solid #818181;
  opacity: 1;
  border-radius: 50%;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-container input:checked ~ .checkmark:after {
  display: block;
}
</style>
