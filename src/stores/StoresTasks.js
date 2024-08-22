import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    updateTask(id, updatedTask) {
      const index = this.tasks.findIndex(task => task.id === id)
      if (index !== -1) this.tasks[index] = updatedTask
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
    getTaskById(id) {
      return this.tasks.find(task => task.id === id)
    }
  }
})
