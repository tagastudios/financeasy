import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Entry from "@/views/Entry.vue";
import Expense from "@/views/Entry/Expense.vue";
import Income from "@/views/Entry/Income.vue";
import Personal from "@/views/Entry/Personal.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/entry",
    name: "Entry",
    component: Entry,
    children: [
      {
        path: "expense",
        name: "Expense",
        component: Expense,
      },
      {
        path: "income",
        name: "Income",
        component: Income,
      },
      {
        path: "personal",
        name: "Personal",
        component: Personal,
      },
    ],
  },

  // DYNAMIC ROUTER FOR WHEN LOGIN CREDS REDIRECT
  // {
  //   path: "/test/:id?",
  //   redirect: (to) => {
  //     console.log(to);
  //     const { hash, params, query } = to;
  //     if (query.to === "foo") {
  //       return { path: "/foo", query: null };
  //     }
  //     if (hash === "#baz") {
  //       return { name: "baz", hash: "" };
  //     }
  //     if (params.id) {
  //       return "/with-params/:id";
  //     } else {
  //       return "/bar";
  //     }
  //   },
  // },
  {
    path: "/:notfound(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
