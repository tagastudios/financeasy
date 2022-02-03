<template>
  <div class="singleExpense">
    <h1>Single Expense</h1>
    <form @submit.prevent="submitHandler">
      <div>
        <label for="type">What's the Expense type? </label>
        <select v-model="form.type" name="type" id="type" required>
          <option value="">Select an option</option>
          <option value="clothing">Clothing</option>
          <option value="entertainment">Entertainment</option>
          <option value="hobbies">Hobbies</option>
          <option value="gift">Gift</option>
          <option value="groceries">Groceries</option>
          <option value="restaurants">restaurants</option>
          <option value="travel">Travel</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div>
        <label for="title">Expense Title... </label>
        <input
          v-model="form.title"
          type="text"
          name="title"
          id="title"
          required
        />
      </div>
      <div>
        <label for="description">Expense description... </label>
        <textarea
          v-model="form.description"
          name="description"
          id="description"
          style="resize: none"
          rows="2"
        />
      </div>
      <div>
        <label for="amount">Expense amount in $$ </label>
        <input
          v-model="form.amount"
          type="number"
          name="amount"
          id="amount"
          required
        />
      </div>
      <div>
        <label for="source">Where did you spent it? (Store/Location)</label>
        <input v-model="form.source" type="text" name="source" required />
      </div>
      <div>
        <label for="frequency">Frequency of expense</label>
        <select
          v-model="form.frequency"
          name="frequency"
          id="frequency"
          required
        >
          <option value="">Select an option</option>
          <option value="once">Once</option>
          <option value="weekly">Weekly</option>
          <option value="biweekly">Bi-Weekly</option>
          <option value="twicemonth">Twice a Month</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label for="date">Next payment date </label>
        <input v-model="form.date" type="date" name="date" id="date" />
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
  import { reactive } from "vue";
  import { mapActions } from "@/store/helpers";

  export default {
    setup() {
      // HELPERS
      const { addExpense } = mapActions("setData");

      // FORM
      const today = new Date().toISOString().split("T")[0];
      const form = reactive({
        type: "",
        title: null,
        description: null,
        amount: null,
        frequency: "",
        source: null,
        date: today,
      });
      const submitHandler = () => {
        addExpense(form);
      };

      // PRINT
      return {
        form,
        submitHandler,
      };
    },
  };
</script>

<style lang="sass" scoped></style>
