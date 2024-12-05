<template>
  <!--Login-->
<div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
<div class="modal-dialog" role="document">
  <div class="modal-content rounded-4 shadow">
    <div class="modal-header p-5 pb-4 border-bottom-0">
      <h1 class="fw-bold mb-0 fs-2">Login</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <div class="modal-body p-5 pt-0">
      <form class="">
        <div class="form-floating mb-3">
          <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
        <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        <hr class="my-4">
        <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
        <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
          <svg class="bi me-1" width="16" height="16"><use xlink:href="#twitter"></use></svg>
          Sign up with Twitter
        </button>
        <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
          <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"></use></svg>
          Sign up with Facebook
        </button>
        <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
          <svg class="bi me-1" width="16" height="16"><use xlink:href="#github"></use></svg>
          Sign up with GitHub
        </button>
        <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
          <a href="Dashboard" class="bi me-1" width="16" height="16"> Sing up Admin Organic fram</a>
        </button>
      </form>
    </div>
  </div>
<!--Login-->

<!--Footer-->
<div class="container">
<footer class="py-3 my-4">
  <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
  </ul>
  <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
</footer>
</div>
</div>
</div>
<!--Footer-->
</template>