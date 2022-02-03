import store from "./index";
//Firebase Imports
import { auth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const SET_USER = "SET_USER";
const SET_AUTH_IS_READY = "SET_AUTH_IS_READY";

const authStore = {
  namespaced: true,
  state: {
    user: null,
    authIsReady: false,
  },
  getters: {
    user: ({ user }) => user,
    authIsReady: ({ authIsReady }) => authIsReady,
  },
  mutations: {
    [SET_USER](state, payload) {
      state.user = payload;
    },
    [SET_AUTH_IS_READY](state, payload) {
      state.authIsReady = payload;
    },
  },
  actions: {
    signup({ commit }, { email, password }) {
      console.log("signup action");

      setPersistence(auth, browserSessionPersistence).then(() => {
        const res = createUserWithEmailAndPassword(auth, email, password);
        if (res) {
          commit(SET_USER, res.user);
        } else {
          throw new Error("could not complete signup");
        }
      });
    },
    login({ commit }, { email, password }) {
      console.log("login action");

      setPersistence(auth, browserSessionPersistence).then(() => {
        const res = signInWithEmailAndPassword(auth, email, password);
        if (res) {
          commit(SET_USER, res.user);
        } else {
          throw new Error("could not complete login");
        }
      });
    },
    logout({ commit }) {
      console.log("logout action");

      signOut(auth);
      commit(SET_USER, null);
    },
  },
};

// wait until auth is ready
onAuthStateChanged(auth, (user) => {
  store.commit("auth/" + SET_AUTH_IS_READY, true);
  store.commit("auth/" + SET_USER, user);
  if (user) store.dispatch("getData/init");
  // unsub();
});

export default authStore;
