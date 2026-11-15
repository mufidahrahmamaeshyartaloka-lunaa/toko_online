<template>
  <div class="product-card">
    <!-- Menampilkan gambar produk -->
    <img :src="product.image" :alt="product.name" />
    
    <!-- Menampilkan nama dan harga produk -->
    <h3>{{ product.name }}</h3>
    <p>Rp {{ product.price }}</p>
    
    <!-- Tombol untuk memasukkan produk ke keranjang -->
    <button @click="handleAddToCart">Beli Sekarang</button>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

// 1. Menerima data produk dari halaman utama (HomeView)
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

// 2. Memanggil store Pinia yang sudah dibuat sebelumnya
const cartStore = useCartStore()

// 3. Fungsi yang dijalankan saat tombol diklik (menggunakan props.product)
const handleAddToCart = () => {
  cartStore.addToCart(props.product)
  alert('Produk berhasil ditambahkan ke keranjang!')
}
</script>

<style scoped>
/* Styling sederhana untuk kartu produk */
.product-card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  background: white;
  max-width: 200px;
}
.product-card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
}
button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #35495e;
}
</style>