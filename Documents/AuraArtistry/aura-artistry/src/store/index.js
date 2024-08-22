import { createStore } from 'vuex'
import axios from 'axios';

const hostedData = "https://auraartistry-project.onrender.com/";


export default createStore({
  state: {
    products: [],
    product: null,
    error: null,
    isLoading: false,
    user: null,
    users: []
  },
  getters: {
    allProducts: (state) => state.products,
    currentUser: (state) => state.user,
    allUsers: (state) => state.users,
    singleProduct: (state) => state.product,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    REMOVE_PRODUCT(state, productId) {
      state.products = state.products.filter(product => product.prodID !== productId);
    }
  },
  actions: {
  //  async fetchProducts({ commit }) {
  //   commit('SET_LOADING', true);
  //   try {
  //     const response = await axios.get(`${hostedData}product`);
  //     if (response.status === 200) {
  //       commit('SET_PRODUCTS', response.data.results);
  //     }
  //   } catch (error) {
  //     commit('SET_ERROR', error.message);
  //     console.error("Error fetching products:", error);
  //   } finally {
  //     commit('SET_LOADING', false);
  //   }
  async fetchProducts({ commit }) {
    commit('SET_LOADING', true);
    try {
      const response = await axios.get(`${hostedData}product`);
      if (response.status === 200) {
        commit('SET_PRODUCTS', response.data.results);
      }
    } catch (error) {
      commit('SET_ERROR', error.message);
      console.error("Error fetching products:", error);
    } finally {
      commit('SET_LOADING', false);
    }
  },  

  async fetchProduct({ commit }, productId) {
    commit('SET_LOADING', true);
    try {
      const response = await axios.get(`${hostedData}product/${productId}`);
      if (response.status === 200) {
        commit('SET_PRODUCT', response.data.result);
      }
    } catch (error) {
      commit('SET_ERROR', error.message);
      console.error("Error fetching product:", error);
    } finally {
      commit('SET_LOADING', false);
    }
  },

  async fetchUsers({ commit }) {
    try {
      const response = await axios.get(`${hostedData}user`);
      if (response.status === 200) {
        commit('SET_USERS', response.data.results);
      }
    } catch (error) {
      commit('SET_ERROR', error.message);
      console.error("Error fetching users:", error);
    }
  },

  async fetchUser({ commit }, userId) {
    try {
      const response = await axios.get(`${hostedData}user/${userId}`);
      if (response.status === 200) {
        commit('SET_USER', response.data.result);
      }
    } catch (error) {
      commit('SET_ERROR', error.message);
      console.error("Error fetching user:", error);
    }
  },

  async register({ commit }, payload) {
    try {
      const response = await axios.post(`${hostedData}user/register`, payload);
      if (response.status === 200) {
        commit('SET_USER', response.data.result);
      }
    } catch (error) {
      commit('SET_ERROR', error.message);
      console.error("Error registering user:", error);
    }
  },

  async addProduct({ dispatch }, payload) {
    try {
      const response = await axios.post(`${hostedData}product/add`, payload);
      if (response.status === 200) {
        dispatch('fetchProducts');
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  },

  async updateProduct({ dispatch }, payload) {
    try {
      const response = await axios.patch(`${hostedData}product/${payload.prodID}`, payload);
      if (response.status === 200) {
        dispatch('fetchProducts');
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  },

  async deleteProduct({ dispatch }, productId) {
    try {
      const response = await axios.delete(`${hostedData}product/${productId}`);
      if (response.status === 200) {
        dispatch('fetchProducts');
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
},
  modules: {
  }
})