import React, { Component, Fragment } from 'react';
import { TextField, Paper, Button, Grid } from "@material-ui/core";
import axios from 'axios';

class TodoInput extends Component {
    state = {
        title: "",
        description: "",
        due_date: "",
        importance: "",
        completion: "",
        isLoading: false
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {

        // console.log('hasil submit cek ', this.state)
        e.preventDefault()
        let token = localStorage.getItem('token')
        this.setState({ isloading: true })
        //rendering post for add task
        axios({
            method: "POST",
            url: "https://be-mini-project.herokuapp.com/api/task/",
            headers: {
                authorization: token
            },
            data: {
                title: this.state.title,
                description: this.state.description,
                due_date: this.state.due_date
            }
        })
            .then(res => {
                // console.log('hasil dari add ', res)
                this.setState({ loading: false })
                this.setState({ title: '', description: '', due_date: '', isLoading: false })
                this.props.getAll()
            })
            .catch(err => {
                this.setState({ loading: false })
                // console.log('erro dari add', err)
            })
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.submit}>
                    <Grid container >
                        <Paper style={{ margin: '10px 20px ', padding: 16, width: '100%' }}>
                            <Grid xs={12} md={12} item style={{ padding: '0px 14px', marginBottom: 20 }}>
                                <TextField
                                    placeholder="Title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.change}
                                    // onKeyPress={}
                                    fullWidth
                                />
                            </Grid>
                            <Grid xs={12} md={12} item style={{ padding: '0px 14px', marginBottom: 20 }}>
                                <TextField
                                    placeholder="Description"
                                    name='description'
                                    value={this.state.description}
                                    onChange={this.change}
                                    // onKeyPress={}
                                    fullWidth
                                />
                            </Grid>
                            <Grid xs={12} md={12} item style={{ padding: '0px 14px', marginBottom: 20 }}>
                                <TextField
                                    placeholder="Due Date"
                                    name="due_date"
                                    type="date"
                                    fullWidth
                                    value={this.state.due_date}
                                    onChange={this.change}
                                />
                            </Grid>
                            <Grid xs={12} md={12} item style={{ padding: '20px 14px 0px 14px' }}>
                                <Button
                                    fullWidth
                                    color="secondary"
                                    variant="contained"
                                    type="submit"
                                    style={{outline:'none'}}
                                >
                                    {this.state.isLoading ? "loading.." : "Add"}
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </form>
            </Fragment>
        );
    }
}

export default TodoInput;
