<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h2>Ajouter une tâche</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="ajouterNouvelleTache">
          <div class="mb-3">
            <label for="nom" class="form-label">Nom de la Tâche</label>
            <input v-model="nouvelleTache.nom" type="text" class="form-control" id="nom" required />
          </div>
          <div class="mb-3">
            <label for="projet" class="form-label">Projet</label>
            <select v-model="nouvelleTache.projet" class="form-control" id="projet" required>
              <option v-for="projet in projets" :key="projet.id" :value="projet.nom">{{ projet.nom }}</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <input v-model="nouvelleTache.description" type="text" class="form-control" id="description" required />
          </div>
          <div class="mb-3">
            <label for="dateDebut" class="form-label">Date de début</label>
            <input v-model="nouvelleTache.dateDebut" type="date" class="form-control" id="dateDebut" required />
          </div>
          <div class="mb-3">
            <label for="dateFin" class="form-label">Date de fin</label>
            <input v-model="nouvelleTache.dateFin" type="date" class="form-control" id="dateFin" required />
          </div>
          <button type="submit" class="btn">Ajouter Tâche</button>
        </form>
      </div>
    </div>
    <hr />

    <h2>Liste des tâches</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Projet</th>
          <th>Description</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tache in taches" :key="tache.id">
          <td>{{ tache.nom }}</td>
          <td>{{ tache.projet }}</td>
          <td>{{ tache.description }}</td>
          <td>{{ tache.dateDebut }}</td>
          <td>{{ tache.dateFin }}</td>
          <td>
            <button @click="voirDetails(tache.id)" class="btn btn-info">Voir</button>
            <button @click="supprimerTache(tache.id)" class="btn btn-danger">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Détails de la tâche sélectionnée -->
    <div v-if="tacheSelectionnee" class="card mt-4">
      <div class="card-header">
        <h2>Détails de la Tâche</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="voirDetails">
          <div class="mb-3">
            <label for="nom" class="form-label">Nom de la Tâche</label>
            <input v-model="tacheSelectionnee.nom" type="text" class="form-control" id="nom" required />
          </div>
          <div class="mb-3">
            <label for="projet" class="form-label">Projet</label>
            <select v-model="tacheSelectionnee.projet" class="form-control" id="projet" required>
              <option v-for="projet in projets" :key="projet.id" :value="projet.nom">{{ projet.nom }}</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <input v-model="tacheSelectionnee.description" type="text" class="form-control" id="description" required />
          </div>
          <div class="mb-3">
            <label for="dateDebut" class="form-label">Date de début</label>
            <input v-model="tacheSelectionnee.dateDebut" type="date" class="form-control" id="dateDebut" required />
          </div>
          <div class="mb-3">
            <label for="dateFin" class="form-label">Date de fin</label>
            <input v-model="tacheSelectionnee.dateFin" type="date" class="form-control" id="dateFin" required />
          </div>
          <button type="submit" class="btn">Mettre à jour</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTachesStore } from '../stores/taches';
import { onMounted } from 'vue';

const tachesStore = useTachesStore();

const taches = tachesStore.taches;
const tacheSelectionnee = ref(null);

const projets = ref([
  { id: 1, nom: 'Projet A' },
  { id: 2, nom: 'Projet B' },
  { id: 3, nom: 'Projet C' },
]);

const nouvelleTache = ref({
  nom: '',
  projet: projets.value[0]?.nom || '',
  description: '',
  dateDebut: '',
  dateFin: '',
});

function ajouterNouvelleTache() {
  tachesStore.ajouterTache({ ...nouvelleTache.value, id: Date.now() });
  nouvelleTache.value = {
    nom: '',
    projet: projets.value[0]?.nom || '',
    description: '',
    dateDebut: '',
    dateFin: '',
  };
}

function voirDetails(id) {
  tacheSelectionnee.value = tachesStore.obtenirTache(id);
}

function mettreAJourTache() {
  tachesStore.mettreAJourTache(tacheSelectionnee.value);
  tacheSelectionnee.value = null;
}

function supprimerTache(id) {
  tachesStore.supprimerTache(id);
}

onMounted(() => {
  // Charger les tâches depuis une API ou initialiser les données si nécessaire
});
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
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.btn-danger:hover {
  background-color: #c82333;
  color: #fff;
}

.btn-danger:active {
  background-color: #dc3545;
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