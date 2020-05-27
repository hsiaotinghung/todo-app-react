import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:4000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getTodos() {
    return apiClient.get('/todos')
  },
  getTodo(id) {
    return apiClient.get('/todos/' + id)
  },
  postTodos(todo) {
    return apiClient.post('/todos', todo)
  },
  putTodo(id, todo) {
    return apiClient.put('/todos/' + id, todo)
  }
}
