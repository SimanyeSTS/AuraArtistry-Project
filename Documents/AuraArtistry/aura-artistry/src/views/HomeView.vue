<template>
  <NavbarComp/>
  <div class="home">
    <section class="landing">
      <h1>Welcome to AuraArtistry</h1>
      <p>Your go-to destination for luxury makeup artistry. Unlock your unique aura and let your true beauty radiate.</p>
      <router-link to="/products">
          <button class="cta-button">Shop Now</button>
        </router-link>
    </section>

    <section class="products">
      <div class="product-categories">
        <h2>Product Categories</h2>
        <ul>
          <li><a href="./ProductsView.vue">Eyeshadows</a></li>
          <li><a href="./ProductsView.vue">Lipsticks</a></li>
          <li><a href="./ProductsView.vue">Foundations</a></li>
          <li><a href="./ProductsView.vue">Mascaras</a></li>
          <li><a href="./ProductsView.vue">Highlighters</a></li>
          <li><a href="./ProductsView.vue">Blush</a></li>
        </ul>
        <h2>Our Collections</h2>
        <p>Explore our exclusive range of luxury cosmetics, crafted with care and style. Where art meets beauty, and beauty meets you.</p>
      </div>
      <div class="product-grid">
    <div class="product-item">
      <img src="product-image-1.jpg" alt="Product 1">
      <h3>Eye Shadow <br> Palette</h3>
      <p>Multiple shade palette with long-lasting, high-pigmentation colors.</p>
      <router-link to="/products">
          <button class="cta-button">Shop Now</button>
        </router-link>
    </div>
    <div class="product-item">
      <img src="product-image-2.jpg" alt="Product 2">
      <h3>Lipstick <br> Collection</h3>
      <p>5 vibrant shades with a comfortable, moisturizing formula.</p>
      <router-link to="/products">
          <button class="cta-button">Shop Now</button>
        </router-link>
    </div>
    <div class="product-item">
      <img src="product-image-2.jpg" alt="Product 3">
      <h3>Foundation Collection</h3>
      <p>5 vibrant shades with a comfortable, moisturizing formula.</p>
      <router-link to="/products">
          <button class="cta-button">Shop Now</button>
        </router-link>
    </div>
    <div class="product-item">
      <img src="product-image-2.jpg" alt="Product 4">
      <h3>Mascara <br> Collection</h3>
      <p>5 vibrant shades with a comfortable, moisturizing formula.</p>
      <router-link to="/products">
          <button class="cta-button">Shop Now</button>
        </router-link>
    </div>
    <div class="product-item">
      <img src="product-image-2.jpg" alt="Product 5">
      <h3>Highlighter Collection</h3>
      <p>5 vibrant shades with a comfortable, moisturizing formula.</p>
      <router-link to="/products">
          <button class="cta-button">Shop Now</button>
        </router-link>
    </div>
    <div class="product-item">
      <img src="product-image-2.jpg" alt="Product 6">
      <h3>Blush <br> Collection</h3>
      <p>5 vibrant shades with a comfortable, moisturizing formula.</p>
      <router-link to="/products">
          <button class="cta-button">Shop Now</button>
        </router-link>
    </div>
  </div>

  <div class="customer-testimonials">
    <h2>What Our Customers Say</h2>
    <p>"I'm obsessed with the eyeshadow palette! The colors are so pigmented and easy to blend." - Emily R.</p>
    <p>"The lipstick collection is amazing! The formula is so comfortable and the shades are gorgeous." - David K.</p>
    <p>"The AuraArtistry foundation blends like a dream! My skin has never looked so flawless and natural. It's my new go-to!" - Sarah K.</p>
    <p>"AuraArtistry's mascara is a game-changer! My lashes are fuller, longer, and beautifully defined without clumping." - Emily R.</p>
    <p>"I'm obsessed with the AuraArtistry blush! It gives my cheeks the perfect pop of color, and it lasts all day. Absolute perfection!" - Jasmine T.</p>
    <p>"The highlight from AuraArtistry is pure magic! It adds the perfect amount of glow without being too overpowering. I'm in love!" - Vanessa L.</p>
  </div>
    </section>
  </div>
  <FooterComp/>
</template>

<script>
// // eslint-disable-next-line no-unused-vars
import NavbarComp from '../components/NavBarComp.vue';

// // eslint-disable-next-line no-unused-vars
import FooterComp from '../components/FooterComp.vue'
import AOS from 'aos';

export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    FooterComp
    },
    mounted() {
      AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      offset: 200, 
    });
  }
}
</script>

<style scoped>
.home {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #333;
}

.landing {
  background-image: url(https://tyra-parring.github.io/host-/image/7290139-uhd_3840_2160_25fps-ezgif.com-optimize.gif);
  height: fit-content;
  background-size: contain; 
  background-position: center;
  color: #FAF0E6; 
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px;
}

.landing h1 {
  font-size: 3em;
  margin-bottom: 10px;
  font-weight: bold;
}

.landing p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.cta-button {
  background-color: #f982fb; 
  color: #FAF0E6; 
  border: none;
  padding: 15px 30px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
}

.cta-button:hover {
  background-color: #fd9fff; 
  color: #FAF0E6; 
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}

.products {
  background-color: #FAF0E6; 
  color: #333;
  padding: 30px;                               
  text-align: center;
}

.products h2 {
  color: #FFC0CB; 
  margin-bottom: 20px;
}

.products p {
  font-size: 1.2em;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-item {
  background-color: #FFFFFF; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.product-item h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.product-item p {
  font-size: 1em;
  margin-bottom: 20px;
}

.product-categories {
  margin-top: 40px;
}

.product-categories h2 {
  /* margin-bottom: 1em; */
  margin-top: 1.9em;
}

.product-categories ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-categories li {
  margin-right: 20px;
}

.product-categories a {
  color: #333;
  text-decoration: none;
}

.product-categories a:hover {
  color: #fdc2fe; 
}

.customer-testimonials {
  margin-top: 70px;
}

.customer-testimonials p {
  font-size: 1em;
  margin-bottom: 20px;
  font-style: italic;
}
</style>

