<template>
  <div class="one">
    <NavbarComp />
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
      <div class="btn-container">
        <button class="btn btn-custom-pink" @click="showAddUserModal = true">Register User</button>
      </div>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <div v-if="!isLoading && users.length">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.UserID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userRole }}</td>
              <td>
                <div class="btn-container">
                  <button class="btn btn-custom-pink" @click="updateUser(user.UserID)">Edit</button>
                  <button class="btn btn-dark" @click="deleteUser(user.userID)">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <b-modal v-model="showAddUserModal" title="Register/Edit User">
        <b-form @submit.prevent="addUser">
          <b-form-group label="First Name">
            <b-form-input v-model="newUser.firstName" required></b-form-input>
          </b-form-group>
          <b-form-group label="Last Name">
            <b-form-input v-model="newUser.lastName" required></b-form-input>
          </b-form-group>
          <b-form-group label="Age">
            <b-form-input type="number" v-model="newUser.userAge" required></b-form-input>
          </b-form-group>
          <b-form-group label="Gender">
            <b-form-select v-model="newUser.Gender" :options="['Male', 'Female']" required></b-form-select>
          </b-form-group>
          <b-form-group label="Email">
            <b-form-input type="email" v-model="newUser.emailAdd" required></b-form-input>
          </b-form-group>
          <b-form-group label="Password">
          </b-form-group>
          <b-form-group label="Role">
          </b-form-group>
          <b-form-group label="Profile Picture URL">
            <b-form-input v-model="newUser.userProfile"></b-form-input>
            <br>
            <small class="text-muted">Leave blank to use the default profile picture.</small>
            <br>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-modal>
    </div>
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from '../components/NavBarComp.vue';
import FooterComp from '../components/FooterComp.vue';
import { mapGetters, mapActions } from 'vuex';
import { BModal, BForm, BFormGroup, BFormInput, BButton, BFormSelect } from 'bootstrap-vue-next';

export default {
  name: 'AdminView',
  components: {
    NavbarComp,
    FooterComp,
    BModal, BForm, BFormGroup, BFormInput, BButton, BFormSelect
  },
  data() {
    return {
      showAddProductModal: false,
      showAddUserModal: false,
      newProduct: {
        prodName: '',
        Category: '',
        prodDescription: '',
        amount: '',
        quantity: '',
        prodURL: ''
      },
      newUser: {
        firstName: '',
        lastName: '',
        userAge: '',
        Gender: '',
        emailAdd: '',
        userPass: '',
        userRole: '',
        userProfile: ''
      },
      isUpdatingUser: false
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
    ...mapActions(['fetchProducts', 'addProduct', 'updateProduct', 'deleteProduct', 'fetchUsers', 'addUser', 'updateUser', 'deleteUser']),
    async fetchData() {
      await this.fetchUsers();
      await this.fetchProducts();
    },
    async deleteUser(userId) {
      try {
        await this.deleteUser(userId);
        this.fetchData();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async updateUser(userId) {
      try {
        const user = this.users.find(u => u.userID === userId);
        if (user) {
          this.newUser = { ...user };
          this.showAddUserModal = true;
          this.isUpdatingUser = true;
        }
      } catch (error) {
        console.error('Error fetching user for update:', error);
      }
    },
    async addUser() {
      try {
        if (!this.newUser.userProfile) {
          this.newUser.userProfile = 'https://defaultprofilepic.url'; // Default profile picture
        }
        await this.addUser(this.newUser);
        this.showAddUserModal = false;
        this.newUser = {
          firstName: '',
          lastName: '',
          userAge: '',
          Gender: '',
          emailAdd: '',
          userPass: '',
          userRole: '',
          userProfile: ''
        };
        await this.fetchData();
      } catch (error) {
        console.error('Error adding user:', error);
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
    /* background-color: rgba(0, 0, 0, 1); */
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
  