import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../views/TaskList.vue'
import ProjectList from '../views/ProjectList.vue'
import TaskDetail from '../views/TaskDetail.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  { path: '/tasks', name: 'TaskList', component: TaskList },
  { path: '/projects', name: 'ProjectList', component: ProjectList },
  { path: '/tasks/:id', name: 'TaskDetail', component: TaskDetail },
  { path: '/projects/:id', name: 'ProjectDetail', component: ProjectDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
