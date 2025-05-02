<script setup>
import { ref } from 'vue'

const name = ref('John')
const isVisible = ref(true)
</script>

<template>
  <section>
    <div class="container mx-auto">
      <h1>Hello, world!</h1>
      <p>Welcome to my Vue app.</p>
      <p>Here are some examples of how to use Vue:</p>
      <ul>
        <li>
          <strong>Variables:</strong> Use the <code>{{}}</code> syntax to display variables. For example:
          <p>Hello, {{ name }}!</p>
        </li>
        <li>
          <strong>Conditionals:</strong> Use the <code>v-if</code> directive to conditionally render elements. For
          example:
          <p v-if="isVisible">This text is visible!</p>
        </li>
      </ul>
    </div>
  </section>
</template>
