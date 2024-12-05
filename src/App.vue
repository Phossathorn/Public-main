<template>
<!--
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  -->
  <Menu/>
  <router-view/>

</template>

<script>
import Menu from './components/Menu.vue';
export default {
  components: {
     Menu
  }
   };
</script>




<style>

.border:hover {             /*Box สิ้นค้าเด้งขึ้นมาเล็กน้อย หน้า Home,Product*/
  transform: scale(1.05);
  transition: all 0.3s ease;
}

.badge-right {
  float: right; /* ขยับ */
}

.product-card {
  border: 2px solid #9fafc0; /* Dark border color (use any color you want) */
  background-color: #dacfb2; /* สีกรอบสินค้า  */
}

.product-card:hover {
  background-color: #82dfc7; /*  สีกรอบสินค้า เวลาเอาเม้าไปวาง  */
}

.container-fluid.banner.bg-Warning {
  width: 100%;          /* ปรับขนาดความกว้าง*/
  height: 700px;        /* ตั้งความสูง */
  background-color: #f39c12;  /* พื้นหลังด้านบนหน้าProduct (สี warning) */
}

/* ปรับแต่งมุมให้มีความโค้ง */
.bg-warning {
    border-radius: 15px; /* กำหนดขอบมุมให้โค้ง */
}

/* Hover effect for product box */
.border:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.carousel-caption {   
    color: black !important; /*หน้า Product detail*/
}


</style>