<template>
  <section>
    <div class="flex j-content-between p-1">
      <span
        >Welcome, <strong>{{ greetings }}</strong
        >.
      </span>
      <span
        >Last checkpoint: <strong>{{ lastConnection }}</strong
        >.
      </span>
    </div>
    <div class="upcoming">
      <h3>Upcoming moves...</h3>
      <UpcomingList :list="upcomings" />
    </div>
    <div class="row">
      <div class="insight flex gap-1 p-1">
        <div class="pie">
          <h4 class="pb-1">Chart</h4>
          <PieChart :data="chartData" />
        </div>
        <div class="stats">
          <h4 class="pb-1">Stats</h4>
          <Stats :stats="playerStats" />
        </div>
      </div>
      <div class="quests">Quest List</div>
    </div>
  </section>
</template>

<script>
  import { computed } from "vue";
  import { mapGetters } from "@/store/helpers";
  import moment from "moment";

  import UpcomingList from "@/components/list/UpcomingList.vue";
  import PieChart from "@/components/charts/PieChart.vue";
  import Stats from "@/components/gamification/Stats.vue";

  export default {
    setup() {
      // INCOMES
      const { upcomings } = mapGetters("getData");

      // USER
      const { user } = mapGetters("auth");
      const greetings = computed(
        () => user.value && (user.value.displayName || user.value.email)
      );
      const lastConnection = computed(
        () =>
          user.value &&
          moment(new Date(user.value.metadata.lastSignInTime)).fromNow()
      );

      // CHARTS DATA
      const chartData = [
        { type: "income", amount: 100 },
        { type: "income", amount: 100 },
        { type: "expense", amount: 200 },
      ];

      // PLAYER STATS
      const playerStats = [
        { ability: "Savings", value: 7 },
        { ability: "Investment", value: 1 },
        { ability: "Focus", value: 3 },
      ];

      // PRINT
      return {
        greetings,
        lastConnection,
        upcomings,
        chartData,
        playerStats,
      };
    },
    components: {
      UpcomingList,
      PieChart,
      Stats,
    },
  };
</script>

<style lang="scss" scoped>
  .insight {
    // display: flex;
  }
</style>
