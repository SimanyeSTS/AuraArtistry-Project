<template>
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/logo.png" alt="AuraArtistry Logo" />
      </div>
      <ul class="nav-links">
        <li><a href="home">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="products">Products</a></li>
        <li><a href="product">Product</a></li>
        <li><a href="admin">Admin</a></li>
        <li><a href="contact">Contact</a></li>
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
    background-color: #FF4500; 
    padding: 10px 20px;
  }
  
  .logo img {
    max-height: 50px; 
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
    color: #f5a95d; 
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
  