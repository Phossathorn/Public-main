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
      
      
      
      
      
      <!-- Main Content -->
      <div class="container-fluid" style="margin-left: 280px;">
             <div class="container text-center">
  <div class="row">
    <h2 class="pb-2 border-bottom " style="font-size: 5.0rem;"> Products In Stock</h2>
<!-- Product 1 -->
    <!-- Product 1 -->
    <div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/single-item.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px; width: 90%;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;"> Brocoli</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">บล็อกโคลี</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">24.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">18.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
<!-- Product 2 -->
<div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/featur-2 (1).jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;"> Strawbery</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">สตอเบอรี่</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">90.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">74.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
<!-- Product 3 -->
<div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/vegetable-item-4.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;"> Bell papper</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;"> พริกหลวก</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">70.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">58.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
<!-- Product 4 -->
<div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/vegetable-item-6.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;"> Parsley</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">ผักชีฝรั่ง</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">32.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">25.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
<!-- Product 5 -->
<div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/vegetable-item-5.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;"> Potaptoes</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">มันฝรั่ง</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">60.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">34.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
<!-- Product 6 -->
<div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/featur-1.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">Apple</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">แอปเปิล</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">70.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">65.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
<!-- Product 7 -->
<div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/vegetable-item-1.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">Tomatos</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">มะเขือเทศ</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">42.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">27.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
    <!-- Product 8 -->
    <div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/product-8.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px; width: 90%;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">Banana</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">กล้วย</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">24.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">12.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>

  <div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/single-item.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px; width: 90%;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;"> Brocoli</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">บล็อกโคลี</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">24.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">18.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
<!-- Product 2 -->
<div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/featur-2 (1).jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;"> Strawbery</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">สตอเบอรี่</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">90.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">74.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
<!-- Product 3 -->
<div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/vegetable-item-4.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;"> Bell papper</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;"> พริกหลวก</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">70.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">58.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
<!-- Product 4 -->
<div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/vegetable-item-6.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;"> Parsley</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">ผักชีฝรั่ง</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">32.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">25.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
<!-- Product 5 -->
<div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/vegetable-item-5.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;"> Potaptoes</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">มันฝรั่ง</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">60.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">34.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
<!-- Product 6 -->
<div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/featur-1.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">Apple</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">แอปเปิล</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">70.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">65.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
<!-- Product 7 -->
<div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/vegetable-item-1.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">Tomatos</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">มะเขือเทศ</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">42.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">27.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
    <!-- Product 8 -->
    <div class="col-md-3 col-sm-6 mb-4">
      <div class="border rounded p-3 product-card">
        <img src="../assets/product-8.jpg" alt="Japan" class="rounded mb-3 img-fluid" style="object-fit: cover; height: 200px; width: 90%;">
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">Banana</p>
        <p class="fw-semibold" style="font-size: 1.0rem; font-family: 'Roboto', sans-serif; font-weight: 600; line-height: 1.5; letter-spacing: 0.5px; margin-bottom: 8px; color: #333;">กล้วย</p>
        <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
       <del class="text-danger" style="font-size: 1.0rem; margin-right: 10px;">24.00</del>
       <span class="text-dark fw-semibold" style="font-size: 1.2rem; padding: 2px 40px; border: 2px solid #333; border-radius: 20px; background-color: #f5f5f5;">12.00</span>
  </div>
  <span class="badge border text-bg-dark fw-normal fs-6 badge-right">10% OFF</span>
</div>
        <p>
          <a href="Productdetail">
            <button class="btn btn-success mt-2 w-100 py-2 btn-custom" style="font-size: 1rem; border-radius: 10px;">Add to Cart</button>
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</template>
  