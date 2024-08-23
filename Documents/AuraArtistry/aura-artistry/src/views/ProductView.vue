<template>
   <div class="product-container">
   <NavbarComp/>
    <div class="content-wrapper">
        <div v-if="product">
            <div class="row">
                <div class="col-md-4">
                    <img :src="product.prodURL" alt="Product Image" class="img-fluid mb-3 product-image" />
                </div>
                <div class="col-md-8">
                    <h2>{{ product.prodName }}</h2>
                    <p><strong>Category:</strong> {{ product.Category }}</p>
                    <p><strong>Description:</strong> {{ product.prodDescription }}</p>
                    <p><strong>Amount:</strong> R{{ product.amount }}</p>
                    <p><strong>Quantity:</strong> {{ product.quantity }}</p>
                    <button class="btn btn-dark">Add to Cart</button>
                </div>
            </div>
        </div>
        <div v-else>
            <SpinnerComp/>
        </div>
    </div>
    </div>
    <FooterComp/>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import NavbarComp from '@/components/NavBarComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'ProductView',
    components: {
    NavbarComp,
    FooterComp,
    SpinnerComp,
},
computed: {
        ...mapGetters(['singleProduct']),
        product() {
            return this.singleProduct;
        }
    },
    created() {
        const productId = this.$route.params.id;
        this.$store.dispatch('fetchProduct', productId);
    }
};

</script>
<style>
.product-container {
    background: url(https://tyra-parring.github.io/host-/image/pexels-mdsnmdsnmdsn-1831234.jpg);
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.content-wrapper {
    /* flex: 1;
    padding: 20px; */
    margin-top: 50px;
    margin-left: 50px;
}

.product-image {
  display: block;
  margin: 0 auto;
}

.col-md-8 {
  text-align: center;
}

.row {
  justify-content: center;
  
}
</style>