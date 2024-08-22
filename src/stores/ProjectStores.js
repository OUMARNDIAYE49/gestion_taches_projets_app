import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    projects: []
  }),
  actions: {
    addProject(project) {
      this.projects.push(project)
    },
    updateProject(id, updatedProject) {
      const index = this.projects.findIndex(project => project.id === id)
      if (index !== -1) this.projects[index] = updatedProject
    },
    deleteProject(id) {
      this.projects = this.projects.filter(project => project.id !== id)
    },
    getProjectById(id) {
      return this.projects.find(project => project.id === id)
    }
  }
})
