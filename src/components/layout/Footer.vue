<template>
  <footer>{{ year }}. All rights reserved, Financeasy&trade;</footer>
</template>

<script>
  import moment from "moment-timezone";
  moment.tz.setDefault("America/New_York");

  export default {
    name: "Footer",
    data: function () {
      return {
        year: "",
      };
    },
    created: function () {
      const today = moment().format("YYYY");
      this.year = today;
    },
  };
</script>

<style lang="scss">
  footer {
    font-weight: bold;
    font-size: 12px;
    color: $white;
    // background: $dark-green;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
