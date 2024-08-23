import { defineStore } from 'pinia'

export const useTachesStore = defineStore('taches', {
  state: () => ({
    taches: []
  }),
  actions: {
    ajouterTache(tache) {
      this.taches.push(tache)
    },
    supprimerTache(id) {
      const index = this.taches.findIndex((tache) => tache.id === id)
      if (index !== -1) {
        this.taches.splice(index, 1)
      }
    },
    obtenirTache(id) {
      return this.taches.find((tache) => tache.id === id)
    },
    mettreAJourTache(tacheMisAJour) {
      const index = this.taches.findIndex((tache) => tache.id === tacheMisAJour.id)
      if (index !== -1) {
        this.taches[index] = tacheMisAJour
      }
    }
  }
})
