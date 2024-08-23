<template>
    <div class="homepage-container">
        <h1>Bienvenue sur la page d'accueil</h1>
    </div>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/src/assets/49.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/src/assets/4066.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/src/assets/gestion-de-projets.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style scoped>
.homepage-container {
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>