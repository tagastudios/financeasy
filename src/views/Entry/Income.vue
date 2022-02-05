<template>
  <div class="singleIncome">
    <h1>Single Income</h1>
    <form @submit.prevent="submitIncome">
      <div>
        <label for="type">What's the Income type? </label>
        <select v-model="form.type" name="type" id="type" required>
          <option value="">Select an option</option>
          <option value="employment">Employment</option>
          <option value="selfEmployment">Self-Employment</option>
          <option value="investment">Investment</option>
          <option value="realState">Real State</option>
          <option value="retirement">Retirement</option>
          <option value="gift">Gift</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label for="title">Income Title... </label>
        <input
          v-model="form.title"
          type="text"
          name="title"
          id="title"
          required
        />
      </div>
      <div>
        <label for="description">Income description... </label>
        <textarea
          v-model="form.description"
          name="description"
          id="description"
          style="resize: none"
          rows="2"
        />
      </div>
      <div>
        <label for="amount">Income amount in $$ </label>
        <input
          v-model="form.amount"
          type="number"
          name="amount"
          id="amount"
          required
        />
      </div>
      <div>
        <label for="source">From where does it coming? (Source)</label>
        <input v-model="form.source" type="text" name="source" required />
      </div>
      <div>
        <label for="frequency">Frequency of income</label>
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
    <button @click="submitIncome">Test</button>
  </div>
</template>

<script>
  import { reactive } from "vue";
  import { mapActions } from "@/store/helpers";

  export default {
    setup() {
      // HELPERS
      const { addIncome } = mapActions("setData");

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
      const submitIncome = () => {
        addIncome(form);
        form.type = "";
        form.title = null;
        form.description = null;
        form.amount = null;
        form.frequency = "";
        form.source = null;
        form.date = today;
      };

      // PRINT
      return {
        form,
        submitIncome,
      };
    },
  };
</script>

<style lang="sass" scoped></style>
