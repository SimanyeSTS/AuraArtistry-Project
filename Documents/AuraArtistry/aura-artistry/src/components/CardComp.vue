<template>
    <div class="product-card">
      <img :src="product.imageUrl" alt="Product Image" class="product-image" />
      <div class="product-details">
        <h2 class="product-title">{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price"> ${{ product.price.toFixed(2) }} </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 16px;
    padding: 16px;
    text-align: center;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
  }
  
  .product-details {
    padding: 16px;
  }
  
  .product-title {
    font-size: 1.25em;
    margin: 0;
  }
  
  .product-description {
    color: #555;
    margin: 8px 0;
  }
  
  .product-price {
    font-weight: bold;
    margin-top: 8px;
  }
  </style>
  