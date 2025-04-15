<template>
  <div class="forgot-password">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h2>Forgot Password</h2>
            </div>
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    v-model="email"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <button type="submit" class="btn btn-primary">
                    Request Password Reset
                  </button>
                </div>
              </form>
              <div v-if="message" class="alert mt-3" :class="messageClass">
                {{ message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const message = ref('')
const messageClass = ref('')

const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth/forgot-password', {
      email: email.value
    })
    message.value = response.data.message
    messageClass.value = 'alert-success'
    setTimeout(() => {
      router.push('/login')
    }, 3000)
  } catch (error) {
    message.value = error.response?.data?.message || 'An error occurred'
    messageClass.value = 'alert-danger'
  }
}
</script>

<style scoped>
.forgot-password {
  padding: 2rem 0;
}

.card {
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: none;
  padding: 1.5rem;
}

.card-header h2 {
  margin: 0;
  color: #333;
}

.card-body {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.btn-primary {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
}

.alert {
  padding: 1rem;
  border-radius: 4px;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style> 