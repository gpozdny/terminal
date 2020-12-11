<template>
  <div>
    <section class="custom-layout">
      <nav
        class="navbar header has-shadow is-primary level"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand level-left">
          <a class="navbar-item" href="/">
            <img src="~assets/ICON.png" alt="vgafk" height="100" class="icon__vgafk" />
          </a>

          <div class="navbar-burger level-item">
            <span />
            <span />
            <span />
          </div>
        </div>
        <h1 class="main-title level-item has-text-centered">ФГБОУ ВО «ВГАФК»</h1>
      </nav>
      <section class="main-content columns">
        <aside class="column is-2 pl-4">
          <p class="menu-label is-hidden-touch"></p>
          <ul class="menu-list">
            <li v-for="(item, key) of items" :key="key">
              <nuxt-link :to="item.to" exact-active-class="is-active">
                <b-icon :icon="item.icon" /> {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </aside>

        <div class="container column is-10">
          <nuxt />
        </div>
      </section>
    </section>

    <footer class="footer">
      <div class="container-fluid">
        <h2 class="main-subtitle">Текст тут</h2>
        <div class="columns">
          <div class="column">
            <span>text tut</span>
          </div>
          <div class="column">
            <span>text tut</span>
          </div>
          <div class="column">
            <span>text tut</span>
          </div>
          <div class="column">
            <span>text tut</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.navbar-item {
  .icon__vgafk {
    max-height: 5rem;
  }
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Главный экран",
          icon: "home",
          to: { name: "index" },
        },
        {
          title: "Оздоровительное плавание",
          icon: "pool",
          to: { name: "pool" },
        },
        {
          title: "Обучение плаванию",
          icon: "brain",
          to: { name: "inspire" },
        },
        {
          title: "Аквааэробика",
          icon: "waves",
          to: { name: "aqua" },
        },
        {
          title: "Тренажёрный зал",
          icon: "weight-lifter",
          to: { name: "workout" },
        },
        {
          title: "Прочие услуги",
          icon: "dots-horizontal",
          to: { name: "offers" },
        },
      ],
    };
  },
};
</script>
