<template>
    <NavbarComp/>
    <div class="container">
        <div class="row">
            <h2>Products</h2>
        </div>

        <div v-for="(products, category) in categorizedProducts" :key="category">
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

        <div v-if="!products">
            <Spinner />
        </div>
    </div>
    <FooterComp/>
</template>

<script setup>
// // eslint-disable-next-line no-unused-vars
import NavbarComp from '../components/NavBarComp.vue';

// // eslint-disable-next-line no-unused-vars
import FooterComp from '../components/FooterComp.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Spinner from '@/components/SpinnerComp.vue'
import CardComp from '@/components/CardComp.vue'

const store = useStore()

const products = computed(() => {
    console.log('products:', store.state.products);
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
    });
    
    onMounted(() => {
        console.log('onMounted called!');
        store.dispatch('fetchProducts');
    })
</script>

<style scoped>
.container {
    margin-top: 2rem;

}

.btn-custom-pink {
  background-color: #f982fb;
  color: white;
  border-color: #f982fb;
}

.btn-custom-pink:hover {
  background-color: #fd9fff; 
  border-color: #fd9fff;
  color: white;
}

</style>
