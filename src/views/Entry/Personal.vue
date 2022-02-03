<template>
  <div class="personal">
    <h1>Personal</h1>
    <div class="personal_table_wrapper">
      <table class="personal_table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Income</th>
            <th>Expense</th>
            <th>Title</th>
            <th>Source</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in displayData" :key="d.id">
            <td>{{ d.date.toDate().toISOString().split("T")[0] }}</td>
            <td>{{ d.listType === "income" ? "$" + d.amount : "-" }}</td>
            <td>
              {{ d.listType === "expense" ? "$" + d.amount : "-" }}
            </td>
            <td>{{ d.title }}</td>
            <td>{{ d.source }}</td>
            <td>{{ d.type }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { computed } from "vue";
  export default {
    name: "PersonalViewer",
    props: {
      data: Array,
      default: [],
    },
    setup(props) {
      const displayData = computed(() => props.data);

      console.log(displayData);

      // PRINT
      return {
        displayData,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .personal {
    height: 100%;

    &_table {
      &_wrapper {
        height: 100%;
      }
      & tbody {
        height: 100%;
        overflow-y: auto;
      }

      height: 100%;
      width: 100%;
      margin-top: 1rem;
      border: 1px solid $dark-blue;
      border-spacing: 0;
      line-height: 2rem;

      & tbody tr:nth-child(even) {
        background: $shadow-green;
        &:hover {
          background: $light-green;
        }
      }
      & tbody tr:nth-child(odd) {
        background: $shadow-blue;
        &:hover {
          background: $shadow-black;
        }
      }

      & thead th {
        background: $dark-green;
        color: $white;
      }

      & tbody td {
        font-weight: 500;
      }

      & tbody td,
      & thead th {
        width: calc(100% / 6);
        max-width: calc(40vw - 2rem);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
</style>
