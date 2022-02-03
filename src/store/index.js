import { createStore } from "vuex";

// Stores Modules
import auth from "./auth";
import getData from "./data/getData";
import setData from "./data/setData";

const store = createStore({
  modules: {
    auth,
    getData,
    setData,
  },
});

// export the store
export default store;
