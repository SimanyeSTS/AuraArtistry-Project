<template>
    <NavbarComp/>
    <div class="products-view">
      <h1>Products</h1>
      <div class="products-grid">
        <CardComp v-for="product in products" :key="product.id" :product="product"/>
      </div>
    </div>
    <FooterComp/>
  </template>
  
  <script>
  // // eslint-disable-next-line no-unused-vars
import NavbarComp from '../components/NavBarComp.vue';

// // eslint-disable-next-line no-unused-vars
import FooterComp from '../components/FooterComp.vue'
  import axios from 'axios';
  import CardComp from '@/components/CardComp.vue';
  import { useStore } from 'vuex'
  
  export default {
    name: 'ProductsView',
    components: {
        NavbarComp,
        FooterComp,
      CardComp
    },
    setup() {
        const store = useStore() 
        return { store }
    },
    data() {
      return {
        products: []
      };
    },
    async created() {
      try {
        const response = await axios.get('https://auraartistry-project.onrender.com/');
        this.products = response.data.results;
        console.log('Products:', this.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    mounted() {
        this.$options.setup().store.dispatch('fetchProducts')
        }
    }

  </script>
  
  <style scoped>
  .products-view {
    padding: 16px;
  }
  
  .products-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  </style>
  