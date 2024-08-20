<template>
  <NavbarComp/>
  <div class="about-page">
    <h1>Welcome to AuraArtistry</h1>
    <p>
      At AuraArtistry, we believe that makeup is not just about covering up, but about revealing the beauty within. Our mission is to empower individuals to express themselves through the art of makeup, and to provide high-quality products and services that help them achieve their desired look.
    </p>
    <p>
      Our team of expert makeup artists and beauty enthusiasts are dedicated to staying up-to-date on the latest trends and techniques, ensuring that our clients receive the best possible experience. Whether you're looking for a natural everyday look or a dramatic transformation, we're here to help.
    </p>
    <h2>Our Story</h2>
    <p>
      AuraArtistry was founded by partners Tyra Parring & Simanye Somdaka, a passionate makeup artist with a vision to create a community where individuals can come together to share their love of beauty and self-expression. With years of experience in the industry, [Your Name] has worked with numerous clients, from brides to celebrities, and has developed a unique approach to makeup that emphasizes enhancing one's natural features.
    </p>
    <h2>Our Values</h2>
    <ul>
      <li>Empowerment: We believe that makeup should be a tool for self-expression and confidence, not just a way to cover up.</li>
      <li>Quality: We're committed to providing high-quality products and services that meet the highest standards of the industry.</li>
      <li>Community: We're dedicated to building a community of like-minded individuals who share our passion for beauty and self-expression.</li>
    </ul>
  </div>

  <FooterComp/>
</template>
<script>
// // eslint-disable-next-line no-unused-vars
import NavbarComp from '../components/NavBarComp.vue';

// // eslint-disable-next-line no-unused-vars
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
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.about-page h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.about-page h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.about-page p {
  margin-bottom: 20px;
}

.about-page ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.about-page li {
  margin-bottom: 10px;
}

.about-page li::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #333;
  border-radius: 50%;
  margin-right: 10px;
}
</style>