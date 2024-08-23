import { defineStore } from 'pinia';

export const useProjetsStore = defineStore('projets', {
    state: () => ({
        projets: [],
    }),
    actions: {
        ajouterProjet(projet) {
            this.projets.push(projet);
        },
        supprimerProjet(id) {
            this.projets = this.projets.filter(projet => projet.id !== id);
        },
        obtenirProjet(id) {
            return this.projets.find(projet => projet.id === id);
        },
        mettreAJourProjet(projetMisAJour) {
            const index = this.projets.findIndex(projet => projet.id === projetMisAJour.id);
            if (index !== -1) {
                this.projets[index] = projetMisAJour;
            }
        },
    },
});
