<template>
  <section class="section p-2 pt-0">
    <div class="container">
      <div class="columns">
        <div class="column is-full has-text-centered">
          <h2 class="main-subtitle">Главный экран</h2>
        </div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "HomePage",

  components: {
    Card,
  },
  transition: {
    name: "home",
    mode: "out-in",
  },
};
</script>
