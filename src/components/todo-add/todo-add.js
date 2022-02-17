import React from 'react';


class TodoAdd extends React.Component {
   state = {
      label: ''
   }

   onValueChange = (text) => {
      this.setState({
         label: text
      })
   }

   onAddNewTodo = (event) => {
      event.preventDefault();
      this.props.addNewTodo(this.state.label);
      this.setState({
         label: ''
      });
   }

   render() {
      return (
         <div>
            <form className={'d-flex mb-3'} onSubmit={this.onAddNewTodo}>
               <input
                  className={'form-control me-2'}
                  onChange={(event) => this.onValueChange(event.target.value)}
                  value={this.state.label}
                  type='text'
                  placeholder='Feel the todo'
               />
               <input className={'btn btn-outline-success ml-1'} type='submit' value='Add'/>
            </form>
         </div>
      )
   }
}

export default TodoAdd;
