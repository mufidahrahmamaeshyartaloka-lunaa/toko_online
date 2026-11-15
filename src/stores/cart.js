
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  // Menambahkan produk ke keranjang
  function addToCart(product) {
    const existing = items.value.find(
      item => item.id === product.id
    )

    if (existing) {
      existing.qty++
    } else {
      items.value.push({
        ...product,
        qty: 1
      })
    }
  }

  // Menghitung jumlah seluruh barang
  const totalItems = computed(() =>
    items.value.reduce((total, item) => total + item.qty, 0)
  )

  // Menghitung total harga
  const totalPrice = computed(() =>
    items.value.reduce(
      (total, item) => total + item.price * item.qty,
      0
    )
  )

  return {
    items,
    addToCart,
    totalItems,
    totalPrice
  }
})
