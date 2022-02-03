<template>
  <div :class="`card ${color}`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "BaseCard",
    props: {
      color: {
        type: String,
        default: "gray",
      },
    },
  };
</script>

<style lang="scss" scoped>
  .card {
    background-color: $white;
    padding: 1rem;
    border-radius: 30px;
  }
  .green {
    box-shadow: 0 30px 60px 0 rgba($light-green, 0.6),
      inset 0 -8px 16px 0 rgba($light-green, 0.7);
  }
  .red {
    box-shadow: 0 30px 60px 0 rgba($light-red, 0.6),
      inset 0 -8px 16px 0 rgba($light-red, 0.7);
  }
  .gray {
    box-shadow: 0 30px 60px 0 rgba($gray, 0.3),
      inset 0 -8px 16px 0 rgba($gray, 0.3);
  }
</style>
