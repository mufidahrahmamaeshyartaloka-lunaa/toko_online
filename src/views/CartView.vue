<template>
  <div class="cart-view">
    <h1>Keranjang Belanja Kamu</h1>

    <!-- Kondisi 1: Jika keranjang kosong -->
    <div v-if="cartStore.items.length === 0" class="empty-cart">
      <p>Waduh, keranjang belanjaanmu masih kosong!</p>
      <router-link to="/" class="back-btn">Belanja Dulu Yuk</router-link>
    </div>

    <!-- Kondisi 2: Jika ada produk di dalam keranjang -->
    <div v-else>
      <div class="cart-list">
        <!-- Loop data item yang ada di store Pinia -->
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" />
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <p>Harga: Rp {{ item.price }}</p>
            <p>Jumlah: <strong>{{ item.quantity }}</strong></p>
            <button @click="cartStore.removeFromCart(item.id)" class="delete-btn">Hapus</button>
          </div>
        </div>
      </div>

      <!-- Bagian Total Belanja -->
      <div class="cart-summary">
        <h3>Total Barang: {{ cartStore.totalItems }} pcs</h3>
        <h3>Total Harga: Rp {{ cartStore.totalPrice }}</h3>
        <button class="checkout-btn" @click="alert('Fitur checkout belum dibuat!')">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

// Memanggil store Pinia agar data keranjang bisa diakses di sini
const cartStore = useCartStore()
</script>

<style scoped>
.cart-view {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
.empty-cart {
  text-align: center;
  margin-top: 40px;
}
.back-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
.cart-item {
  display: flex;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
}
.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}
.item-info {
  flex-grow: 1;
}
.delete-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 5px;
}
.delete-btn:hover {
  background-color: #cc0000;
}
.cart-summary {
  margin-top: 30px;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 8px;
}
.checkout-btn {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 15px;
  font-size: 16px;
}
.checkout-btn:hover {
  background-color: #35495e;
}
</style>