<template>
    <NavbarComp/>
    <div class="contact-page">
      <h2>Get in Touch</h2>
      <p>
        Want to learn more about AuraArtistry or book a makeup session with one of our artists? Fill out the form below and we'll get back to you soon!
      </p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" @blur="validateName">
          <div v-if="nameError" class="error">{{ nameError }}</div>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" @blur="validateEmail">
          <div v-if="emailError" class="error">{{ emailError }}</div>
        </div>
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" v-model="phone" @blur="validatePhone">
          <div v-if="phoneError" class="error">{{ phoneError }}</div>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" @blur="validateMessage"></textarea>
          <div v-if="messageError" class="error">{{ messageError }}</div>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <FooterComp/>
  </template>
  
  <script>
  // // eslint-disable-next-line no-unused-vars
import NavbarComp from '../components/NavBarComp.vue';

// // eslint-disable-next-line no-unused-vars
import FooterComp from '../components/FooterComp.vue'

  export default {
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        message: '',
        nameError: '',
        emailError: '',
        phoneError: '',
        messageError: ''
      }
    },
    methods: {
      validateName() {
        if (this.name.trim() === '') {
          this.nameError = 'Please enter your name'
        } else {
          this.nameError = ''
        }
      },
      validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(this.email)) {
          this.emailError = 'Please enter a valid email address'
        } else {
          this.emailError = ''
        }
      },
      validatePhone() {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/
        if (!phoneRegex.test(this.phone)) {
          this.phoneError = 'Please enter a valid phone number (XXX-XXX-XXXX)'
        } else {
          this.phoneError = ''
        }
      },
      validateMessage() {
        if (this.message.trim() === '') {
          this.messageError = 'Please enter a message'
        } else {
          this.messageError = ''
        }
      },
      submitForm() {
        if (this.nameError || this.emailError || this.phoneError || this.messageError) {
            alert('Please fix the errors before submitting the form')
        } else {
            const formData = new FormData()
            formData.append('name', this.name)
            formData.append('email', this.email)
            formData.append('phone', this.phone)
            formData.append('message', this.message)

            fetch('https://formspree.io/your-formspree-email', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
        }
        }
    },
    components: {
    NavbarComp,
    FooterComp
    }
  }
  </script>
  
  <style>
  .contact-page {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
  }
  
  .error {
    color: #f00;
    font-size: 12px;
    margin-bottom: 10px;
  }
  
  button[type="submit"] {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #444;
  }
  </style>