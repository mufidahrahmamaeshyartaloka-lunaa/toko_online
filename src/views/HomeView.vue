<template>
  <div class="home">
    <h1>Katalog Produk</h1>

    <!-- Container untuk menampilkan daftar produk -->
    <div class="product-list">
      <!-- v-for digunakan untuk merender ProductCard sebanyak data produk yang ada -->
      <ProductCard 
        v-for="item in products" 
        :key="item.id" 
        :product="item" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 1. Import komponen ProductCard yang sudah kita buat
import ProductCard from '@/components/ProductCard.vue'

// 2. Data dummy produk yang akan ditampilkan
const products = ref([
  {
    id: 1,
    name: 'Sepatu Sneaker',
    price: 250000,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Baju Kaos Polos',
    price: 75000,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Celana Jeans',
    price: 180000,
    image: 'https://via.placeholder.com/150'
  }
])
</script>

<style scoped>
.home {
  padding: 20px;
}
/* Mengatur agar kartu produk sejajar kesamping memakai Grid */
.product-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>