<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="https://tyra-parring.github.io/host-/image/AURA%20ARTTISRY.png" alt="AuraArtistry Logo" />
        </div>
        <ul class="footer-links">
          <li><a href="home">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="products">Products</a></li>
          <li><a href="contact">Contact Us</a></li>
        </ul>
        <div class="footer-social">
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright ©{{ year }} AuraArtistry. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    components: {},
    data(){
        return{
            year: new Date().getFullYear()
        }
    },
    name: 'FooterComp',
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #ffffff; 
    color: #000000; 
    padding: 20px;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .footer-logo img {
    max-height: 180px;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-links li {
    display: inline;
    margin: 0 10px;
  }
  
  .footer-links a {
    color: #000000; 
    text-decoration: none;
  }
  
  .footer-links a:hover {
    color: #fdc2fe; 
  }
  
  .footer-social {
    margin: 10px 0;
  }
  
  .footer-social a {
    color: #000000; 
    margin: 0 10px;
    text-decoration: none;
  }
  
  .footer-social a:hover {
    color: #fdc2fe; 
  }
  
  .footer-bottom {
    margin-top: 20px;
    border-top: 1px solid #F7CAC9; 
    padding-top: 10px;
  }
  
  .footer-bottom p {
    margin: 0;
  }
  </style>
  