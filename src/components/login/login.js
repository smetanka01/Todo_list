import React from "react";

import TodoApi from "../../services/todo-api";

class Login extends React.Component {
   state = {
      username: '',
      password: ''
   }

   todoApi = new TodoApi()

   onSubmit = (event) => {
      event.preventDefault()

      this.todoApi.login(
         this.state.username,
         this.state.password,
      )
   }

   render() {
      return (
         <div>
            <form onSubmit={this.onSubmit}>
               <div className="mb-3">
                  <label className='form-label'>username</label>
                  <input type="text"
                         className='form-control'
                         id='exampleInputEmail'
                         aria-describedby='emailHelp'
                         value={this.state.username}
                         onChange={event => this.setState({username: event.target.value})}
                  />
               </div>

               <div className="mb-3">
                  <label className='form-label'>password</label>
                  <input type="password"
                         className='form-control'
                         id='exampleInputPassword'
                         value={this.state.password}
                         onChange={event => this.setState({password: event.target.value})}
                  />
               </div>

               <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
         </div>
      )
   }

}

export default Login