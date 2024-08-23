import { defineStore } from 'pinia'

export const useProjetsStore = defineStore('projets', {
  state: () => ({
    projets: []
  }),
  actions: {
    ajouterProjet(projet) {
      this.projets.push(projet)
    },
    supprimerProjet(id) {
      const index = this.projets.findIndex((projet) => projet.id === id)
      if (index !== -1) {
        this.projets.splice(index, 1)
      }
    },
    obtenirProjet(id) {
      console.log(this.projets)
      console.log(id)

      if (!this.projets || !this.projets.length) {
        return null
      }

      const projet = this.projets.find((projet) => {
        if (typeof projet.id === 'object') {
          return projet.id.value === id
        } else {
          return projet.id === id
        }
      })

      return projet
    },
    mettreAJourProjet(projetMisAJour) {
      const index = this.projets.findIndex((projet) => projet.id === projetMisAJour.id)
      if (index !== -1) {
        this.projets[index] = projetMisAJour
      }
    }
  }
})
