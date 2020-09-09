import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
   state = {
    title: ''
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
      }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type='text' 
                    name='title'
                    placeholder='Add Task....' 
                    style={{ flex: '10', padding: '10px', margin: '10px 10px 10px 0', borderRadius: '5px'}} 
                    value={this.state.title}
                    onChange={this.onChange}
                    
                />
                <input 
                type='submit' 
                value='submit'
                className="btn"
                style={{flex: '1', margin: '10px 0', borderRadius: '5px', background: '#3F43BE'}}
                />
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
  }

export default AddTodo