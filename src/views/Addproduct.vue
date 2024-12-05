<template>
    <div class="d-flex">
      <!-- Sidebar -->
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px; height: 100vh; position: fixed;">
        <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi pe-none me-2" width="40" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span class="fs-4">Menu</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="/" class="nav-link active" aria-current="page">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
              Home
            </a>
          </li>
          <li>
            <a href="Dashboard" class="nav-link link-body-emphasis">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="Order" class="nav-link link-body-emphasis">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
              Orders
            </a>
          </li>
          <li>
            <a href="Addproduct" class="nav-link link-body-emphasis">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
              Add Products
            </a>
          </li>
          <li>
            <a href="Stock" class="nav-link link-body-emphasis">
              <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
              Stock
            </a>
          </li>
        </ul>
        <hr> 
      </div>
  
      <div class="container vh-100 col-md-6 col-lg-4 mt-4">
    <h2 class="text-center mb-4">เพิ่มข้อมูลสินค้า</h2>
    <form @submit.prevent="addProduct" class="shadow p-4 rounded bg-light">
      <div class="mb-3">
        <label for="name" class="form-label">ชื่อสินค้า:</label>
        <input v-model="newProduct.name" id="name" ref="nameInput" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="detail" class="form-label">รายละเอียด:</label>
        <input v-model="newProduct.detail" id="detail" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">ราคา:</label>
        <input type="number" v-model="newProduct.price" id="price" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="num" class="form-label">จำนวน:</label>
        <input type="number" v-model="newProduct.num" id="num" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-primary w-100 py-2">เพิ่มสินค้า</button>
    </form>

    <!-- Check if there are products to display -->
    <div v-if="products.length > 0" class="mt-5">
      <h2 class="text-center">รายการสินค้า</h2>
      <table class="table table-striped table-hover mt-3">
        <thead>
          <tr>
            <th>ชื่อสินค้า</th>
            <th>รายละเอียดสินค้า</th>
            <th>ราคา</th>
            <th>จำนวน</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.detail }}</td>
            <td>{{ product.price | currency }}</td>
            <td>{{ product.num }}</td>
          </tr>
        </tbody>
        <!-- Add a row for totals -->
        <tfoot>
          <tr>
            <th colspan="3" class="text-right">รวมสินค้า</th>
            <td>{{ totalItems }}</td>
          </tr>
          <tr>
            <th colspan="3" class="text-right">รวมราคา</th>
            <td>{{ totalPrice | currency }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const products = ref([]); // Store the list of products
    const newProduct = ref({ name: '', price: 0, num: 0, detail: '' }); // Store new product data
    const nameInput = ref(null); // Reference for the product name input

    // Function to add a new product
    const addProduct = () => {
      if (newProduct.value.name && newProduct.value.price && newProduct.value.num && newProduct.value.detail) {
        products.value.push({ ...newProduct.value }); // Add the new product to the list
        newProduct.value = { name: '', price: 0, num: 0, detail: '' }; // Clear the form
        nameInput.value.focus(); // Focus back on the name input
      }
    };

    // Focus on the name input when the component is mounted
    onMounted(() => {
      nameInput.value.focus();
    });

    // Computed property for total items
    const totalItems = computed(() => {
      return products.value.reduce((total, product) => total + product.num, 0);
    });

    // Computed property for total price
    const totalPrice = computed(() => {
      return products.value.reduce((total, product) => total + product.price, 0);
    });

    return {
      products,
      newProduct,
      addProduct,
      nameInput,
      totalItems,
      totalPrice,
    };
  },
};
</script>

<style scoped>
/* Container */
.container {
  max-width: 600px;
  margin-top: 20px;
}

/* Table styling */
.table {
  width: 100%;
  border-collapse: collapse; /* Collapse the borders */
  border: 2px solid #ddd; /* Add a border around the table */
}

.table th, .table td {
  text-align: center;
  vertical-align: middle;
  padding: 12px;
  border: 1px solid #ddd; /* Add a border for each cell */
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f8f9fa;
}

.table-hover tbody tr:hover {
  background-color: #f1f3f5;
}

.table th {
  background-color: #343a40;
  color: white;
  font-weight: bold;
}

/* Form Styling */
form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

/* Input focus effect */
input:focus {
  border-color: #495057;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Button hover and active effects */
button:hover {
  background-color: #0056b3;
}

button:active {
  background-color: #004085;
}

/* Heading styling */
h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>


  
  