<template>
  <NavbarComp/>
  <div class="about-page">
    <div class="hero">
      <h1>About AuraArtistry</h1>
      <p>
        At AuraArtistry, we believe that makeup is not just about covering up, but about revealing the beauty within. Our mission is to empower individuals to express themselves through the art of makeup, and to provide high-quality products and services that help them achieve their desired look.
      </p>
    </div>
    <div class="about-section">
      <h2>Our Mission</h2>
      <p>
        Our team of expert makeup artists and beauty enthusiasts are dedicated to staying up-to-date on the latest trends and techniques, ensuring that our clients receive the best possible experience. Whether you're looking for a natural everyday look or a dramatic transformation, we're here to help.
      </p>
    </div>
    <div class="about-section">
      <h2>Our Story</h2>
      <p>
        AuraArtistry was founded by partners Tyra Parring & Simanye Somdaka, a passionate makeup artist & a hard-working businessman with a vision to create a community where individuals can come together to share their love of beauty and self-expression. With years of experience in the industry, Tyra Parring has worked with numerous clients, from brides to celebrities, and has developed a unique approach to makeup that emphasizes enhancing one's natural features.
      </p>
    </div>
    <div class="about-section">
      <h2>Our Values</h2>
      <ul>
        <li>Empowerment: We believe that makeup should be a tool for self-expression and confidence, not just a way to cover up.</li>
        <li>Quality: We're committed to providing high-quality products and services that meet the highest standards of the industry.</li>
        <li>Community: We're dedicated to building a community of like-minded individuals who share our passion for beauty and self-expression.</li>
      </ul>
    </div>
  </div>

  <FooterComp/>
</template>

<script>
import NavbarComp from '../components/NavBarComp.vue';
import FooterComp from '../components/FooterComp.vue'

export default {
  name: 'AboutView',
  components: {
    NavbarComp,
    FooterComp
  }
}
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f7f7f7;
  text-align: center;
  background-image: url('https://tyra-parring.github.io/host-/image/4814827-uhd_4096_2160_25fps-ezgif.com-optimize.gif'); 
  background-size: cover;
  background-position: center;
  height: 100%;
}

.hero {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 20px;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #FFC0CB;
  font-size: 2.2em;
}

.hero p {
  font-size: 18px;
  margin-bottom: 20px;
}

.about-section {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  filter: blur(5px); /* Add this line */
  backdrop-filter: blur(5px);
}

.about-section h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #FFC0CB;
  font-size: 2.2em;
}

.about-section p {
  font-size: 16px;
  margin-bottom: 20px;
  font-size: 1.1em;
}

.about-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.1em;
}

.about-section li {
  margin-bottom: 10px;
}

.about-section li::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #333;
  border-radius: 50%;
  margin-right: 10px;
}
</style>