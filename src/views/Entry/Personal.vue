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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in displayData" :key="d.id" class="weight-500">
            <td>{{ d.date.toDate().toISOString().split("T")[0] }}</td>
            <td>{{ d.listType === "incomes" ? "$" + d.amount : "-" }}</td>
            <td>
              {{ d.listType === "expenses" ? "$" + d.amount : "-" }}
            </td>
            <td>{{ d.title }}</td>
            <td>{{ d.source }}</td>
            <td>{{ d.type }}</td>
            <td>
              <div
                @click="deleteDoc(d.listType, d.id)"
                class="mx-1 weight-700 cursor-pointer"
              >
                x
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { computed } from "vue";
  import { mapActions } from "@/store/helpers";
  export default {
    name: "PersonalViewer",
    props: {
      data: Array,
      default: [],
    },
    setup(props) {
      const displayData = computed(() => props.data);
      const { deleteDocument } = mapActions("setData");
      // DELETE
      const deleteDoc = (collection, id) => {
        deleteDocument({ collection, id });
      };

      // PRINT
      return {
        displayData,
        deleteDoc,
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
