import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const itens = ref([])

    function updateProduct(id, quantity) {
        const item = itens.value.find(product => product.id === id);

        if (item)
            item.quantity = quantity
        else if (quantity > 0) 
            itens.value.push({ id: id, quantity: quantity});
    }

    function addProduct(id, quantity) {
        const item = itens.value.find(product => Number(product.id) === Number(id));

        if (item) {
            item.quantity += quantity
            console.log("New quantity: " + item.quantity)
        }
        else {
            console.warn("Product not found")
            itens.value.push({ id: id, quantity: quantity});
        }
    }

    function remProduct(id, quantity) {
        const item = itens.value.find(product => Number(product.id) === Number(id));

        if (item) {
            item.quantity -= quantity
            console.log("Remove value: " + item.quantity)
        }
    }

    function getQuantityProduct(id) {
        const item = itens.value.find(product => product.id === id);
        return item ? item.quantity : 0;
    }

    function findAll() {
        return itens;
    }

    return { itens, updateProduct, addProduct, remProduct, getQuantityProduct, findAll }
})

