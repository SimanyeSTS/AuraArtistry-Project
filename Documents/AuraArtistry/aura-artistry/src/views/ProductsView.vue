<template>
    <NavbarComp/>
    <div class="container">
        <div class="row">
            <h2>Products</h2>
            <div class="col-md-6">
                <input type="search" v-model="searchQuery" class="form-control" placeholder="Search by name or category">
            </div>
            <div class="col-md-3">
                <select v-model="sortBy" class="form-select">
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>
        </div>
        <div v-if="Object.keys(filteredProducts).length > 0">
            <div v-for="(products, category) in filteredProducts" :key="category">
                <h3>{{ category }}</h3>
                <div class="row gap-2 justify-content-center my-2">
                    <CardComp v-for="product in products" :key="product.prodID">
                        <template #cardHeader>
                            <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
                        </template>
                        <template #cardBody>
                            <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                            <p class="lead"><span class="">Amount</span>: R{{ product.amount }}</p>
                            <div class="button-wrapper d-md-flex d-block justify-content-between">
                                <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                                    <button class="btn btn-custom-pink">View</button>
                                </router-link>
                                <button class="btn btn-dark">Cart</button>
                            </div>
                        </template>
                    </CardComp>
                </div>
            </div>
        </div>
        <div v-else-if="products.length > 0">
            <p>No products match your search query.</p>
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
    <FooterComp/>
</template>
<script setup>
import NavbarComp from '../components/NavBarComp.vue';
import FooterComp from '../components/FooterComp.vue'
import { useStore } from 'vuex'
import { computed, ref, onMounted } from 'vue'
import Spinner from '@/components/SpinnerComp.vue'
import CardComp from '@/components/CardComp.vue'

const store = useStore()
const searchQuery = ref('')
const sortBy = ref('price-asc')
const products = computed(() => {
    return store.state.products;
})
const categorizedProducts = computed(() => {
    if (!products.value) return {};
    return products.value.reduce((acc, product) => {
        if (!acc[product.Category]) {
            acc[product.Category] = [];
        }
        acc[product.Category].push(product);
        return acc;
    }, {});
})
const filteredProducts = computed(() => {
  if (!products.value) return {};

  const filtered = {};
  
  for (const category in categorizedProducts.value) {
    const products = categorizedProducts.value[category];
    const filteredProducts = products.filter(product => {

      return product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
             product.Category.toLowerCase().includes(searchQuery.value.toLowerCase());
    });
    
    if (filteredProducts.length > 0) {
      filtered[category] = filteredProducts;
    }
  }

  for (const category in filtered) {
    if (sortBy.value === 'price-asc') {
      filtered[category] = filtered[category].sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount));
    } else if (sortBy.value === 'price-desc') {
      filtered[category] = filtered[category].sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
    }
  }

  return filtered;
});
onMounted(() => {
    store.dispatch('fetchProducts');
});
</script>

<style scoped>
.container {
    margin-top: 2rem;
}
.btn-custom-pink {
  background-color: #F982FB;
  color: white;
  border-color: #F982FB;
}
.btn-custom-pink:hover {
  background-color: #FD9FFF;
  border-color: #FD9FFF;
  color: white;
}
</style>