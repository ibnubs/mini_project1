import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TodoListNew from './TodoListNew';
import TodoInput from './TodoInput';



let baseUrl = 'https://be-mini-project.herokuapp.com/api/';


export class Todo extends Component {
    state = {
        task: []
    }

    getAllTodo = async () => {
        try {
            const result = await axios.get(`${baseUrl}/task`,
                {
                    headers: {
                        'authorization': localStorage.getItem('token')
                    }
                });
            // console.log('function getAll ajalan ', result)
            // console.log('ini respon', result.data.data)
            this.setState({ task: result.data.data.Search_Result })
        } catch (err) {
            // console.log(err)
        }
    }

    getDeleteItem = async (id) => {
        try {
            await axios.delete(`${baseUrl}/task/${id}`,
                {
                    headers: {
                        'authorization': localStorage.getItem('token')
                    }
                });
            // console.log('ini adalah result delete', result)
            this.setState({ task: this.state.task.filter(item => item.id !== id) })
        } catch (err) {
            // console.log(err)
        }
    }

    componentDidMount() {
        this.getAllTodo()
    }

    render() {
        const List = this.state.task.map(item => {
            // console.log(item)
            return (
                <TodoListNew
                    item={item}
                    key={item.id}
                    onDelete={() => this.getDeleteItem(item.id)} />
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