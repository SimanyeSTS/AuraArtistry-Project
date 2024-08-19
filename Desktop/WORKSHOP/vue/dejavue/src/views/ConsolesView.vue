<template>
    <div>
      <h1>Consoles View</h1>
      <card-comp v-for="console in gamingConsoles" :key="console.name">
        <template #cardTitle>
          {{ console.name }}
        </template>
        <template #cardContent>
          <p>Manufacturer: {{ console.manufacturer }}</p>
          <p>Release Year: {{ console.release_year }}</p>
          <p>Storage: {{ console.storage }}</p>
          <p>Price: {{ console.price }}</p>
          <p>Best Selling Game: {{ console.best_selling_game }}</p>
        </template>
      </card-comp>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gamingConsoles: [
          {
            "name": "PlayStation 5",
            "manufacturer": "Sony",
            "release_year": 2020,
            "storage": "825GB SSD",
            "price": 499,
            "best_selling_game": "Spider-Man: Miles Morales"
          },
          {
            "name": "Xbox Series X",
            "manufacturer": "Microsoft",
            "release_year": 2020,
            "storage": "1TB SSD",
            "price": 499,
            "best_selling_game": "Halo Infinite"
          },
          {
            "name": "Nintendo Switch",
            "manufacturer": "Nintendo",
            "release_year": 2017,
            "storage": "32GB",
            "price": 299,
            "best_selling_game": "Mario Kart 8 Deluxe"
        },
        {
            "name": "Steam Deck",
            "manufacturer": "Valve",
            "release_year": 2022,
            "storage": "64GB eMMC",
            "price": 399,
            "best_selling_game": "Elden Ring"
        },
        {
            "name": "PlayStation 4 Pro",
            "manufacturer": "Sony",
            "release_year": 2016,
            "storage": "1TB HDD",
            "price": 399,
            "best_selling_game": "God of War (2018)"
        }
        ]
      }
    }, 
    components:{
        
    }
  }
  </script>