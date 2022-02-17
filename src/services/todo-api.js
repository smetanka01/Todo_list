class TodoApi {
   _baceUrl = 'http://abdyko.tmweb.ru/api'
   credentials = JSON.parse(localStorage.getItem('credentials'))
   header = (credentials) => {
      return {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${credentials.access}`
      }
   }

   login = (username, password) => {
      fetch(
         `${this._baceUrl}/token/`,
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               username: username,
               password: password,
            })
         }
      ).then(response => {
         if (response.ok) {
            return response.json()
         } else {
            throw new Error('Something wrong with login')
         }
      }).then(data => {
         localStorage.setItem('credentials', JSON.stringify(data))
         window.location.reload()
      }).catch(() => {
         localStorage.removeItem('credentials')
         window.location.reload()
      })
   }

   getTodos = () => {
      const credentials = this.credentials

      return fetch(
         `${this._baceUrl}/v1/todo/`,
         {
            headers: this.header(credentials),
         }
      ).then(response => {
         return response.json()
      })
   }

   createTodo = (label) => {
      const credentials = this.credentials

      return fetch(
         `${this._baceUrl}/v1/todo/`,
         {
            method: 'POST',
            headers: this.header(credentials),
            body: JSON.stringify({
               label: label,
               important: false,
               done: false,
            })
         }
      ).then(response => {
         return response.json()
      })
   }

   deleteTodo = (id) => {
      const credentials = this.credentials

      return fetch(
         `${this._baceUrl}/v1/todo/${id}/`,
         {
            method: 'DELETE',
            headers: this.header(credentials),
         }
      ).then(response => {
         return response.text()
      })
   }

   importantTodo = (id, body) => {
      const credentials = this.credentials

      return fetch(
         `${this._baceUrl}/v1/todo/${id}/`,
         {
            method: 'PATCH',
            headers: this.header(credentials),
            body: JSON.stringify(body)
         }
      ).then(response => {
         return response.json()
      })
   }

   doneTodo = (id, body) => {
      const credentials = this.credentials

      return fetch(
         `${this._baceUrl}/v1/todo/${id}/`,
         {
            method: 'PATCH',
            headers: this.header(credentials),
            body: JSON.stringify(body)
         }
      ).then(response => {
         return response.json()
      })
   }
}

export default TodoApi