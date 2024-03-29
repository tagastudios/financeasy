import { db } from "@/config/firebase";
import {
  collection,
  addDoc,
  Timestamp,
  serverTimestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";

// Db References
const incomeRef = collection(db, "incomes");
const expenseRef = collection(db, "expenses");

// Constants
const SET_INCOME = "SET_INCOME";
const SET_EXPENSE = "SET_EXPENSE";
const DEL_DOC = "DEL_DOC";

const setData = {
  namespaced: true,
  state: {
    // upcomings: {},
  },
  getters: {
    user: (state, getters, rootState, rootGetters) => {
      return rootGetters["auth/user"];
    },
  },
  mutations: {
    [SET_INCOME](
      _state,
      { title, description, source, type, amount, frequency, date, uid }
    ) {
      addDoc(incomeRef, {
        title,
        description,
        source,
        type,
        amount,
        frequency,
        date: Timestamp.fromDate(new Date(`${date}T00:00:00`)),
        timestamp: serverTimestamp(),
        uid,
      });
    },
    [SET_EXPENSE](
      _state,
      { title, description, source, type, amount, frequency, date, uid }
    ) {
      addDoc(expenseRef, {
        title,
        description,
        source,
        type,
        amount,
        frequency,
        date: Timestamp.fromDate(new Date(`${date}T00:00:00`)),
        timestamp: serverTimestamp(),
        uid,
      });
    },
    [DEL_DOC](_state, { collection, id }) {
      deleteDoc(doc(db, collection, id));
    },
  },
  actions: {
    async addIncome({ commit, getters }, data) {
      await commit(SET_INCOME, { uid: getters.user.uid, ...data });
    },
    async addExpense({ commit, getters }, data) {
      await commit(SET_EXPENSE, { uid: getters.user.uid, ...data });
    },
    deleteDocument({ commit }, docId) {
      commit(DEL_DOC, docId);
    },
  },
};

export default setData;
