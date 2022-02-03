<template>
  <div
    class="upcoming_card"
    :style="`--color: ${
      list.listType === 'income' ? 'rgb(113, 178, 128)' : 'rgb(230, 52, 52)'
    }`"
  >
    <div :class="['time_primary', { isDate: isDate(list.date) }]">
      {{ formattedDate(list.date, "calendar") }}
    </div>
    <div class="time_secondary">{{ formattedDate(list.date) }}</div>
    <div class="time_secondary">{{ formattedDate(list.date, "relative") }}</div>
    <!-- <hr class="divisor m-1" /> -->
    <div class="divisor noselect">--------------------------------------</div>
    <strong class="price">${{ list.amount }}</strong>
    <div class="desc">
      {{ list.title }} | {{ list.source || list.category }}
    </div>
  </div>
</template>

<script>
  import formattedDate, { isDate } from "@/utils/formattedDate";
  export default {
    name: "UpcomingCard",
    props: {
      list: Object,
    },
    setup() {
      //

      return {
        formattedDate,
        isDate,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .upcoming_card {
    width: 15rem;
    height: 10rem;
    color: $gray-blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .divisor {
      // border: 1px solid var(--color);
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: var(--color);
      color: $white;
      margin-bottom: 0.75rem;
    }

    .time_primary {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .time_secondary {
      font-size: 0.6rem;
      font-weight: 600;
      color: $color-text;
    }

    .isDate {
      font-size: 1rem;
      font-weight: 900;
      padding: 0.25rem 0;
      letter-spacing: 0.1rem;
    }

    .price {
      font-size: 1.5rem;
      color: var(--color);
    }

    .desc {
      font-weight: 100;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 90%;
    }
  }
</style>
