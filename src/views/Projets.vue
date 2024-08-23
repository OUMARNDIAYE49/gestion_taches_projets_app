<template>
  <div class="container">
      <h2>Ajouter un projet</h2>
      <form @submit.prevent="ajouterNouveauProjet">
          <div class="mb-3">
              <label for="nom" class="form-label">Nom du Projet</label>
              <input v-model="nouveauProjet.nom" type="text" class="form-control" id="nom" required />
          </div>
          <div class="mb-3">
              <label for="dateDebut" class="form-label">Date de début</label>
              <input v-model="nouveauProjet.dateDebut" type="date" class="form-control" id="dateDebut" required />
          </div>
          <div class="mb-3">
              <label for="dateFin" class="form-label">Date de fin</label>
              <input v-model="nouveauProjet.dateFin" type="date" class="form-control" id="dateFin" required />
          </div>
          <button type="submit" class="btn btn-primary">Ajouter Projet</button>
      </form>
      <hr />

      <h2>Liste des projets</h2>
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
                      <button @click="supprimerProjet(projet.id)" class="btn btn-danger">Supprimer</button>
                  </td>
              </tr>
          </tbody>
      </table>

      <!-- Détails du projet sélectionné -->
      <div v-if="projetSelectionne" class="mt-4">
          <h2>Détails du Projet</h2>
          <form @submit.prevent="mettreAJourProjet">
              <div class="mb-3">
                  <label for="nom" class="form-label">Nom du Projet</label>
                  <input v-model="projetSelectionne.nom" type="text" class="form-control" id="nom" required />
              </div>
              <div class="mb-3">
                  <label for="dateDebut" class="form-label">Date de début</label>
                  <input v-model="projetSelectionne.dateDebut" type="date" class="form-control" id="dateDebut"
                      required />
              </div>
              <div class="mb-3">
                  <label for="dateFin" class="form-label">Date de fin</label>
                  <input v-model="projetSelectionne.dateFin" type="date" class="form-control" id="dateFin" required />
              </div>
              <button type="submit" class="btn btn-primary">Mettre à Jour</button>
          </form>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProjetsStore } from '../stores/projets';

const projetsStore = useProjetsStore();

const projets = projetsStore.projets;
const projetSelectionne = ref(null);

const nouveauProjet = ref({
  nom: '',
  dateDebut: '',
  dateFin: '',
});

function ajouterNouveauProjet() {
  projetsStore.ajouterProjet({ ...nouveauProjet.value, id: Date.now() });
  nouveauProjet.value = {
      nom: '',
      dateDebut: '',
      dateFin: '',
  };
}

function voirDetails(id) {
  projetSelectionne.value = projetsStore.obtenirProjet(id);
}

function mettreAJourProjet() {
  projetsStore.mettreAJourProjet(projetSelectionne.value);
  projetSelectionne.value = null;
}

function supprimerProjet(id) {
  projetsStore.supprimerProjet(id);
}
</script>