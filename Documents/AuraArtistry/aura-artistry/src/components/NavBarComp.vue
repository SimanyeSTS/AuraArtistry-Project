<template>
    <nav class="navbar">
      <div class="logo">
        <img src="https://tyra-parring.github.io/host-/image/AURA%20ARTTISRY.png" alt="AuraArtistry Logo" />
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <!-- <li><router-link to="/product">Product</router-link></li> -->
      <li><router-link to="/admin">Admin</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComp',
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000000; 
    padding: 10px 20px;
  }
  
  .logo img {
    max-height: 100px; 
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    flex-wrap: nowrap;
  }
  
  .nav-links li {
    margin: 0;
  }
  
  .nav-links a {
    color: #FAF0E6; 
    text-decoration: none;
    font-size: 1.1em;
  }
  
  .nav-links a:hover {
    color:#fdc2fe; 
  }
  
  @media (max-width: 768px) {
    .nav-links {
      flex-direction: row;
      align-items: center;
      overflow-x: auto;
    }
  
    .navbar.active .nav-links {
      display: flex; 
    }
  }
  </style>
  