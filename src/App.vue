<template>
  <div id="app">
    <!-- Header / Navbar Aplikasi -->
    <header class="navbar">
      <div class="logo">
        <h2>Toko Online</h2>
      </div>
      
      <nav class="nav-links">
        <!-- Route Link ke Halaman Utama -->
        <router-link to="/">Beranda</router-link>
        
        <!-- Route Link ke Halaman Keranjang dengan Indikator Jumlah -->
        <router-link to="/cart" class="cart-link">
          🛒 Keranjang 
          <span v-if="cartStore.totalItems > 0" class="badge">
            {{ cartStore.totalItems }}
          </span>
        </router-link>
      </nav>
    </header>

    <!-- Tempat Tampilan Halaman (HomeView / CartView) Berubah-ubah -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

// Memanggil store Pinia untuk mengambil data total barang
const cartStore = useCartStore()
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  color: #2c3e50;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #35495e;
  color: white;
}

.logo h2 {
  margin: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-weight: bold;
}

.nav-links a.router-link-exact-active {
  color: #42b883;
}

.cart-link {
  position: relative;
}

/* Badge angka di atas ikon keranjang */
.badge {
  background-color: #ff4d4d;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 50%;
  margin-left: 5px;
}

.main-content {
  padding: 20px;
}
</style>