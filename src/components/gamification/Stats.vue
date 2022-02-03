<template>
  <div class="stats">
    <div v-for="(stat, index) in stats" class="stat" :key="index">
      <div class="text">{{ stat.ability }}: {{ stat.value }}</div>
      <div class="add noselect">+</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PlayerStats",
    props: ["stats"],
  };
</script>

<style lang="scss" scoped>
  .stats {
    background: $gray;
    color: $color-bg;
    height: calc(100% - 2rem);
    width: 27vw;
    max-width: 350px;
    text-align: left;
    padding: 1rem;

    .stat {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin: 1rem 0;
      padding: 0.5rem;
      font-weight: 800;
      background-color: rgba(128, 128, 128, 0.5);
      letter-spacing: 0.15rem;

      .add {
        background-color: gray;
        padding: 0 0.5rem;
        font-weight: 900;
        font-family: $font-title;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover {
          background-color: #333;
        }
        &:active {
          background-color: #444;
        }
      }
    }
  }
</style>
