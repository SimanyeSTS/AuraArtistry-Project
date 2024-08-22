<template>
    <div>
      <NavbarComp/>
      <div>
        <h1>Admin Page</h1>
        <br>
        <h2>Products Table</h2>
        <button class="btn btn-primary" @click="showAddProductModal = true">Add Product</button>
        <div v-if="isLoading">Loading...</div>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <div v-if="!isLoading && products.length">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.prodID">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.Category }}</td>
                <td>{{ product.prodDescription }}</td>
                <td>{{ product.amount }}</td>
                <td>{{ product.quantity }}</td>
                <td>
                  <button class="btn btn-warning" @click="updateProduct(product.prodID)">Edit</button>
                  <button class="btn btn-danger" @click="deleteProduct(product.prodID)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <b-modal v-model="showAddProductModal" title="Add Product">
          <b-form @submit.prevent="addProduct">
            <b-form-group label="Product Name">
              <b-form-input v-model="newProduct.prodName" required></b-form-input>
            </b-form-group>
            <b-form-group label="Category">
              <b-form-input v-model="newProduct.Category" required></b-form-input>
            </b-form-group>
            <b-form-group label="Description">
              <b-form-textarea v-model="newProduct.prodDescription" required></b-form-textarea>
            </b-form-group>
            <b-form-group label="Price">
              <b-form-input type="number" v-model="newProduct.amount" required></b-form-input>
            </b-form-group>
            <b-form-group label="Quantity">
              <b-form-input type="number" v-model="newProduct.quantity" required></b-form-input>
            </b-form-group>
            <b-form-group label="Image URL">
              <b-form-input v-model="newProduct.prodURL" required></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Add Product</b-button>
          </b-form>
        </b-modal>
      </div>
      <FooterComp/>
    </div>
  </template>
  
  <script>
  import NavbarComp from '../components/NavBarComp.vue';
  import FooterComp from '../components/FooterComp.vue';
  import { mapGetters, mapActions } from 'vuex';
  import { BModal, BForm, BFormGroup, BFormInput, BFormTextarea, BButton } from 'bootstrap-vue-next';
  
  export default {
    components: {
      NavbarComp,
      FooterComp,
      BModal, BForm, BFormGroup, BFormInput, BFormTextarea, BButton
    },
    data() {
      return {
        showAddProductModal: false,
        newProduct: {
          prodName: '',
          Category: '',
          prodDescription: '',
          amount: '',
          quantity: '',
          prodURL: ''
        }
      };
    },
    computed: {
      ...mapGetters(['allProducts', 'isLoading', 'error']),
      products() {
        return this.allProducts;
      }
    },
    methods: {
      ...mapActions(['fetchProducts', 'addProduct', 'updateProduct', 'deleteProduct']),
      async fetchData() {
        await this.fetchProducts();
      },
      // eslint-disable-next-line no-unused-vars
      async updateProduct(productId) {
    try {
      const product = this.products.find(p => p.prodID === productId);
      if (product) {
        this.newProduct = { ...product }; 
        this.showAddProductModal = true; 
        this.isUpdating = true; 
      }
    } catch (error) {
      console.error('Error fetching product for update:', error);
    }
  },
//   async saveProduct() {
//     try {
//       if (this.isUpdating) {
//         await this.$store.dispatch('updateProduct', this.newProduct);
//       } else {
//         await this.$store.dispatch('addProduct', this.newProduct);
//       }
//       this.showAddProductModal = false;
//       this.newProduct = {
//         prodName: '',
//         Category: '',
//         prodDescription: '',
//         amount: '',
//         quantity: '',
//         prodURL: ''
//       };
//       await this.fetchData(); // Refresh product list
//     } catch (error) {
//       console.error('Error saving product:', error);
//     }
//   }
// }

      async deleteProduct(productId) {
    try {
        await this.$store.dispatch('deleteProduct', productId); 
        this.fetchData(); 
    } catch (error) {
        console.error('Error deleting product:', error);
    }
    },
      async addProduct() {
        console.log('Adding product...')
  try {
    await this.$store.dispatch('addProduct', this.newProduct); 
    this.showAddProductModal = false;
    this.newProduct = {
      prodName: '',
      Category: '',
      prodDescription: '',
      amount: '',
      quantity: '',
      prodURL: ''
    };
    await this.fetchData(); 
  } catch (error) {
    console.error('Error adding product:', error);
  }
}
    },
    created() {
      this.fetchData();
    }
  };
  </script>
  
  <style>
  
  </style>
  