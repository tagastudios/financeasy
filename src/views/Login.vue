<template>
  <div class="login">
    <section>
      <form action="submit" @submit.prevent="handleSubmit">
        <h3>Login</h3>

        <label for="email">Email:</label>
        <input v-model="email" name="email" type="email" required />

        <label for="password">Password:</label>
        <input v-model="password" name="password" type="password" required />

        <button type="submit">Login</button>

        <div v-if="error">{{ error }}</div>
      </form>
    </section>
  </div>
</template>

<script>
  import { ref } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
      const error = ref(null);
      const store = useStore();
      const router = useRouter();
      const handleSubmit = async () => {
        try {
          await store.dispatch("auth/login", {
            email: email.value,
            password: password.value,
          });
          router.push("/");
        } catch (err) {
          error.value = err.message;
        }
      };
      return { handleSubmit, email, password, error };
    },
  };
</script>
