<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">Gestion des Projets</h2>

    <!-- Ajouter un projet -->
    <div class="card mb-4">
      <h5 class="card-header">Ajouter un projet</h5>
      <div class="card-body">
        <form @submit.prevent="ajouterNouveauProjet">
          <div class="mb-3">
            <label for="nom" class="form-label">Nom du Projet</label>
            <input v-model="nouveauProjet.nom" type="text" class="form-control" id="nom" required />
          </div>
          <div class="mb-3">
            <label for="dateDebut" class="form-label">Date de début</label>
            <input
              v-model="nouveauProjet.dateDebut"
              type="date"
              class="form-control"
              id="dateDebut"
              required
            />
          </div>
          <div class="mb-3">
            <label for="dateFin" class="form-label">Date de fin</label>
            <input
              v-model="nouveauProjet.dateFin"
              type="date"
              class="form-control"
              id="dateFin"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Ajouter Projet</button>
        </form>
      </div>
    </div>

    <!-- Liste des projets -->
    <div class="card mb-4">
      <h5 class="card-header">Liste des projets</h5>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Date de début</th>
              <th>Date de fin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="projet in projets" :key="projet.id">
              <td>{{ projet.nom }}</td>
              <td>{{ projet.dateDebut }}</td>
              <td>{{ projet.dateFin }}</td>
              <td>
                <button @click="voirDetails(projet.id)" class="btn btn-info">Voir</button>
                <button @click="supprimerProjet(projet.id)" class="btn btn-danger">
                  Supprimer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Détails du projet sélectionné -->
    <div v-if="projetSelectionne" class="card mb-4">
      <h5 class="card-header">Détails du Projet</h5>
      <div class="card-body">
        <form @submit.prevent="mettreAJourProjet">
          <div class="mb-3">
            <label for="nom" class="form-label">Nom du Projet</label>
            <input
              v-model="projetSelectionne.nom"
              type="text"
              class="form-control"
              id="nom"
              required
            />
          </div>
          <div class="mb-3">
            <label for="dateDebut" class="form-label">Date de début</label>
            <input
              v-model="projetSelectionne.dateDebut"
              type="date"
              class="form-control"
              id="dateDebut"
              required
            />
          </div>
          <div class="mb-3">
            <label for="dateFin" class="form-label">Date de fin</label>
            <input
              v-model="projetSelectionne.dateFin"
              type="date"
              class="form-control"
              id="dateFin"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Mettre à Jour</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProjetsStore } from '../stores/projets'

const projetsStore = useProjetsStore()

const projets = projetsStore.projets
const projetSelectionne = ref(null)

const nouveauProjet = ref({
  nom: '',
  dateDebut: '',
  dateFin: ''
})

function ajouterNouveauProjet() {
  projetsStore.ajouterProjet({ ...nouveauProjet.value, id: Date.now() })
  nouveauProjet.value = {
    nom: '',
    dateDebut: '',
    dateFin: ''
  }
}

function voirDetails(id) {
  projetSelectionne.value = projetsStore.obtenirProjet(id)
}

function mettreAJourProjet() {
  projetsStore.mettreAJourProjet(projetSelectionne.value)
  projetSelectionne.value = null
}

function supprimerProjet(id) {
  projetsStore.supprimerProjet(id)
}
</script>

<style scoped>
.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

.card-header {
  background-color: #f7f7f7;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.card-body {
  padding: 20px;
}

.form-label {
  font-weight: bold;
}

.form-control {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.btn {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #1b67f4;
  color: #fff;
  cursor: pointer;
}

.btn:hover {
  background-color: #1b67f4;
}
.btn-danger {
  background-color: #dc3545; /* Rouge foncé */
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.btn-danger:hover {
  background-color: #c82333; /* Rouge clair */
  color: #fff;
}

.btn-danger:active {
  background-color: #dc3545; /* Rouge foncé */
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.table th {
  background-color: #f7f7f7;
}
</style>
