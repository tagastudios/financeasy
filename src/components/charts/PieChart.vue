<template>
  <div class="pie">
    <div v-for="(d, index) in data" :class="d.type" :key="index">
      <div class="text">
        {{ d.amount }}
        <hr />
        {{ d.type }}
      </div>
    </div>
  </div>
</template>

<script>
  // import { onMounted, ref } from "vue";
  // import * as d3 from "d3";

  export default {
    name: "PieChart",
    props: ["data"],
  };
</script>

<style lang="scss" scoped>
  .pie {
    position: relative;
    background-color: lightgray;
    border-radius: 300px;
    height: 300px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.75) 3px 3px 24px -2px;

    .income {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      width: 150px;

      &:nth-child(1) {
        background-color: $light-green;

        transform: translate(-50%, 50%);
        border-radius: 0 0 0 150px;
        -moz-border-radius: 0 0 0 150px;
        -webkit-border-radius: 0 0 0 150px;
      }
      &:nth-child(2) {
        background-color: $dark-green;

        transform: translate(-50%, -50%);
        border-radius: 150px 0 0 0;
        -moz-border-radius: 150px 0 0 0;
        -webkit-border-radius: 150px 0 0 0;
      }
    }
    .expense {
      background-color: $light-red;
      position: absolute;
      border-radius: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translate(50%, 0%);
      height: 300px;
      width: 150px;
      border-radius: 0 150px 150px 0;
    }

    .text {
      color: $color-bg;
      font-weight: 600;
      hr {
        border: $color-text 1px solid;
      }
    }
  }
</style>
