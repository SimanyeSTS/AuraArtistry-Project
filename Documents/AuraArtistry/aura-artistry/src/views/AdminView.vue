<template>
    <div class="one">
      <NavbarComp/>
      <div>
        <h1>Admin Page</h1>
        <br>
        <h2>Products Table</h2>
        <div class="btn-container">
        <button class="btn btn-custom-pink" @click="showAddProductModal = true">Add Product</button>
        </div>
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
                    <div class="btn-container">
                  <button class="btn btn-custom-pink" @click="updateProduct(product.prodID)">Edit</button>
                  <button class="btn btn-dark" @click="deleteProduct(product.prodID)">Delete</button>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br>
      <h2 id="uh">Users Table</h2>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <div v-if="!isLoading && users.length">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userRole }}</td>
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
    name: 'AdminView',
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
      ...mapGetters(['allProducts', 'isLoading', 'error', 'allUsers']),
      products() {
        return this.allProducts || [];
      },
      users() {
      return this.allUsers || [];
    }
    },
    methods: {
      ...mapActions(['fetchProducts', 'addProduct', 'updateProduct', 'deleteProduct']),
      async fetchData() {
        await this.$store.dispatch('fetchUsers');
        console.log("Fetched Users:", this.$store.getters.allUsers)
        await this.$store.dispatch('fetchProducts');
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
  
.btn-custom-pink {
  background-color: #f982fb !important;
  color: white !important;
  border-color: #f982fb !important;
}

.btn-custom-pink:hover {
  background-color: #fd9fff !important; 
  border-color: #fd9fff !important;
  color: white!important;
}

.btn-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    margin-top: 1em;
}

.btn-container button {
    margin: 0 10px;
}

.one {
    background-image: url('https://tyra-parring.github.io/host-/image/pexels-paduret-1377034.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    margin: 0;
}

.one h1, h2 {
    display: flex;
    justify-content: center;
    margin-block: 1em;
    color: #ffff;
}

.one h2 {
    color: #ffff;
}

.table {
  font-size: 0.9em; 
  border-collapse: collapse; 
}

.table th, .table td {
  padding: 5px; 
}

#uh {
    color: black
}

  </style>
  