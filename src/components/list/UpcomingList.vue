<template>
  <div class="upcoming_list overflow-auto">
    <!-- <button @click="unsub('2021-12-15')">View last month</button> -->
    <div v-if="parsedLists.length === 0" class="p-2">
      Rest assure, no upcoming moves ahead!
    </div>
    <ul v-else class="flex gap-1 w-100 h-100 px-1 py-1">
      <li v-for="list in parsedLists" :key="list.id">
        <base-card :color="color(list.listType)" class="h-100">
          <UpcomingCard :list="list" />
        </base-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import { computed } from "vue";
  import { mapActions } from "@/store/helpers";

  import UpcomingCard from "@/components/card/UpcomingCard.vue";

  export default {
    name: "UpcomingList",
    props: {
      list: Object,
    },
    setup(props) {
      // LIST
      const parsedLists = computed(() => props.list);

      // UNSUB - not! actually it update query to date passed
      const { upcomingListener } = mapActions("getData");
      const unsub = (date) => upcomingListener(date);

      // CARD COLOR
      const color = (type, _date) => {
        // const listDate = date.toDate();
        // const today = new Date();
        // return listDate > today ? "gray" : "none";
        return type === "income" ? "green" : "red";
      };

      // PRINT
      return {
        parsedLists,
        unsub,
        color,
      };
    },
    components: {
      UpcomingCard,
    },
  };
</script>

<style scoped lang="scss">
  .upcoming_list {
    //
    h4 {
      text-align: left;
      font-size: 1.25rem;
      font-family: $font-title;
    }

    ul {
      list-style: none;

      li:last-child {
        padding-right: 1rem;
      }
    }
  }
</style>
