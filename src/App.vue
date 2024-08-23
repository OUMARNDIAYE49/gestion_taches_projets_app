<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./assets/12643932_5031659.ico" alt="logo" class="d-inline-block align-text-top" width="70"
            height="50">
          Gestion Tâches & Projets
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link active" to="/" exact>Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/taches">Tâches</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projets">Projets</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Plus
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link class="dropdown-item" to="/about">À Propos</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <!-- Router View -->
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  padding: 1rem;
}

.navbar-brand img {
  margin-right: 0.5rem;
}

.navbar-nav .nav-link {
  font-weight: 500;
  transition: color 0.3s;
}

.navbar-nav .nav-link:hover {
  color: #f8f9fa;
}

.navbar-nav .dropdown-menu {
  border-radius: 0.5rem;
}

.navbar-dark .navbar-nav .nav-link.active {
  color: #ffcc00;
}
</style>
