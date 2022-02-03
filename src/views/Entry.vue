<template>
  <section class="entry">
    <div class="entry_menu">
      <h2>Data Entry</h2>
      <router-link class="btn-green" to="/entry/expense">Expenses</router-link>
      <router-link class="btn-green" to="/entry/income">Incomes</router-link>
      <router-link class="btn-green" to="/entry/personal">Personal</router-link>
    </div>
    <div class="entry_viewer">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" :data="data" />
        </keep-alive>
      </router-view>
    </div>
  </section>
</template>

<script>
  import { watch } from "vue";
  import { mapActions, mapGetters } from "@/store/helpers";
  export default {
    name: "Entry",
    setup() {
      const { getAllData } = mapActions("getData");
      const { all } = mapGetters("getData");
      const { authIsReady } = mapGetters("auth");

      watch(authIsReady, (val) => {
        if (val) getAllData();
      });

      // PRINT
      return {
        data: all,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .entry {
    padding: 1rem;

    &_menu {
      padding-bottom: 1rem;
      border-bottom: 3px $dark-green ridge;
    }

    &_viewer {
      padding-top: 1rem;
      height: 100%;
    }
  }
</style>
