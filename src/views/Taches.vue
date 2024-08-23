<template>
  <div class="container">
      <h2>Ajouter une tâche</h2>
      <form @submit.prevent="ajouterNouvelleTache">
          <div class="mb-3">
              <label for="nom" class="form-label">Nom de la Tâche</label>
              <input v-model="nouvelleTache.nom" type="text" class="form-control" id="nom" required />
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
              <div class="mb-3">
                  <label for="dateFin" class="form-label">Date de fin</label>
                  <input v-model="tacheSelectionnee.dateFin" type="date" class="form-control" id="dateFin" required />
              </div>
          </div>
          <button type="submit" class="btn btn-primary">Ajouter Tâche</button>
      </form>
      <hr />

      <h2>Liste des tâches</h2>
      <table class="table">
          <thead>
              <tr>
                  <th>Nom</th>
                  <th>Description</th>
                  <th>Date de début</th>
                  <th>Date de fin</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="tache in taches" :key="tache.id">
                  <td>{{ tache.nom }}</td>
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
      <div v-if="tacheSelectionnee" class="mt-4">
          <h2>Détails de la Tâche</h2>
          <form @submit.prevent=" voirDetails">
              <div class="mb-3">
                  <label for="nom" class="form-label">Nom de la Tâche</label>
                  <input v-model="tacheSelectionnee.nom" type="text" class="form-control" id="nom" required />
              </div>
              <div class="mb-3">
                  <label for="description" class="form-label">Description</label>
                  <input v-model="tacheSelectionnee.description" type="text" class="form-control" id="description" required />
              </div>
              <div class="mb-3">
                  <label for="dateDebut" class="form-label">Date de début</label>
                  <input v-model="tacheSelectionnee.dateDebut" type="date" class="form-control" id="dateDebut"
                      required />
              </div>
              <div class="mb-3">
                  <label for="dateFin" class="form-label">Date de fin</label>
                  <input v-model="tacheSelectionnee.dateFin" type="date" class="form-control" id="dateFin" required />
              </div>
              <div class="mb-3">
                  <label for="dateFin" class="form-label">Projet</label>
                  <input v-model="tacheSelectionnee.projet" type="date" class="form-control" id="dateFin" required />
              </div>
          </form>
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

const nouvelleTache = ref({
  nom: '',
  description: '',
  dateDebut: '',
  dateFin: '',
});

function ajouterNouvelleTache() {
  tachesStore.ajouterTache({ ...nouvelleTache.value, id: Date.now() });
  nouvelleTache.value = {
      nom: '',
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
