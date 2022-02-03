// import store from "../data/index";
import { db } from "@/config/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

// Db References
const incomeRef = collection(db, "incomes");
const expenseRef = collection(db, "expenses");

// Constants
const LISTEN_UPCOMING_INCOMES = "LISTEN_UPCOMING_INCOMES";
const LISTEN_UPCOMING_EXPENSES = "LISTEN_UPCOMING_EXPENSES";
const ALL_INCOMES = "ALL_INCOMES";
const ALL_EXPENSES = "ALL_EXPENSES";

const getData = {
  namespaced: true,
  state: {
    upcomingIncomes: {},
    upcomingExpenses: {},
    allIncomes: {},
    allExpenses: {},
  },
  getters: {
    upcomings: ({ upcomingIncomes, upcomingExpenses }) =>
      Object.values({ ...upcomingIncomes, ...upcomingExpenses }).sort(
        (a, b) => a.date.toDate() - b.date.toDate()
      ),
    all: ({ allIncomes, allExpenses }) =>
      Object.values({ ...allIncomes, ...allExpenses }).sort(
        (a, b) => a.date.toDate() - b.date.toDate()
      ),
    user: (state, getters, rootState, rootGetters) => {
      return rootGetters["auth/user"];
    },
  },
  mutations: {
    [LISTEN_UPCOMING_INCOMES](state, income) {
      state.upcomingIncomes[income.id] = income;
    },
    [LISTEN_UPCOMING_EXPENSES](state, expense) {
      state.upcomingExpenses[expense.id] = expense;
    },
    [ALL_INCOMES](state, income) {
      state.allIncomes[income.id] = income;
    },
    [ALL_EXPENSES](state, expense) {
      state.allExpenses[expense.id] = expense;
    },
  },
  actions: {
    init({ dispatch }) {
      dispatch("upcomingListener");
    },
    upcomingListener({ dispatch, getters }, date = new Date()) {
      // UPCOMING INCOMES
      const incomeQuery = query(
        incomeRef,
        where("uid", "==", getters.user.uid),
        where("date", ">=", new Date(date))
      );
      dispatch("incomeListener", incomeQuery);

      // UPCOMING EXPENSES
      const expenseQuery = query(
        expenseRef,
        where("uid", "==", getters.user.uid),
        where("date", ">=", new Date(date))
      );
      dispatch("expenseListener", expenseQuery);
    },
    incomeListener({ commit }, query) {
      if (unsub) unsub();
      const unsub = onSnapshot(query, (snapshot) => {
        snapshot.forEach((doc) => {
          commit(LISTEN_UPCOMING_INCOMES, {
            id: doc.id,
            listType: "income",
            ...doc.data(),
          });
        });
      });
    },
    expenseListener({ commit }, query) {
      if (unsub) unsub();
      const unsub = onSnapshot(query, (snapshot) => {
        snapshot.forEach((doc) => {
          commit(LISTEN_UPCOMING_EXPENSES, {
            id: doc.id,
            listType: "expense",
            ...doc.data(),
          });
        });
      });
    },
    getAllData({ commit, getters }) {
      // ALL INCOMES
      const q1 = query(incomeRef, where("uid", "==", getters.user.uid));
      var unsub1 = onSnapshot(q1, (snapshot) => {
        snapshot.forEach((doc) => {
          commit(ALL_INCOMES, {
            id: doc.id,
            listType: "income",
            ...doc.data(),
          });
        });
        unsub1();
      });

      // ALL EXPENSES
      const q2 = query(expenseRef, where("uid", "==", getters.user.uid));
      var unsub2 = onSnapshot(q2, (snapshot) => {
        snapshot.forEach((doc) => {
          commit(ALL_EXPENSES, {
            id: doc.id,
            listType: "expense",
            ...doc.data(),
          });
        });
        unsub2();
      });
    },
  },
};

export default getData;
