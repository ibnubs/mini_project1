import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TodoListNew from '../TodoListNew';
import TodoInput from './TodoInput';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
// import StarIcon from '@material-ui/icons/Star';
// import CreateIcon from '@material-ui/icons/Create';


let baseUrl = 'https://be-mini-project.herokuapp.com/api/';


export class Todo extends Component {
    state = {
        todos: []
    }

    getAllTodo = async () => {
        try {
            const result = await axios.get(`${baseUrl}/task`, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            });
            console.log('getall ajalan ', result)
            console.log('ini respon', result.data.data)
            this.setState({ todos: result.data.data.Search_Result })
        } catch (err) {
            console.log(err)
        }
    }

    getDeleteItem = async (id) => {
        try {
            const result = await axios.delete(`${baseUrl}/task/${id}`, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            });
            console.log('ini adalah result delete', result)
            this.setState({ todos: this.state.todos.filter(item => item.id !==id) })
        } catch (err) {
            console.log(err)
        }
    }






    componentDidMount() {
        this.getAllTodo()
    }




    render() {

        

        const List = this.state.todos.map (item => {
            console.log(item)
            return(
                <TodoListNew 
                    item={item} 
                    key={item.id} 
                    onDelete={ () => this.getDeleteItem(item.id)} />
            )
        })

        return (
            <Fragment>
                <TodoInput 
                    getAll={this.getAllTodo}
                />
                {List}



            </Fragment>
        )
    }
}

export default Todo;