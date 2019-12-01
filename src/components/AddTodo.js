import React, { Component } from 'react'
import axios from 'axios';
import ApiCallService from '../services/ApiCall';

export class AddTodo extends Component {


    state ={
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.id);
        this.setState({ title: '', id:'' });
        console.log(this.state.id)
        axios.post('http://localhost:3000/todo',{text: this.state.title, id: this.state.id}).then(res =>{
          console.log(res)
          console.log(res.data)
        })
    }

    onChange = (e) => this.setState({ [e.target.name]:
    e.target.value });

    render() {
        return (
          <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input 
              type="text" 
              name="title"
              style={{flex: '10', padding:'5px' }} 
              placeholder="What do you want to do?" 
              value={this.state.title}
              onChange={this.onChange} 
            />

            <input 
              type="submit" 
              value="Submit" 
              className="btn"
              style={{flex: '1'}}
            />
          </form>
        )
    }
}

export default AddTodo
