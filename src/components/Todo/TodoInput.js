import React, { Component, Fragment } from 'react';
import { TextField, Paper, Button, Grid } from "@material-ui/core";
import axios from 'axios';


let baseUrl = 'https://be-mini-project.herokuapp.com/api/';






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
            [e.target.name]:e.target.value
        })
        
    }

    submit = async (e) => {
        console.log('hasil submit cek ', this.state)
        this.setState({isLoading:true})
        let token = localStorage.getItem('token')
        e.preventDefault()
        
        //create new data
        // const data = {
        //     title: this.state.title,
        //     description: this.state.description,
        //     due_date: this.state.due_date,
        // }

        try{
            const result = await axios.post(`${baseUrl}task/`, 
            {
                headers: {
                    'authorization': token
                },
                data: {
                    'title': this.state.title,
                    'description': this.state.description,
                    'due_date': this.state.due_date,
                }
            });
            console.log('post berhasil ', result)
            this.props.getAll()
            this.setState({title:'',description:'', due_date:'', isLoading:false})
            
        }
        catch(err){
            console.log('apakah disini', err)
        }
    }




    render() {
        return (
            <Fragment>
                <form onSubmit={this.submit}>
                    <Grid container >
                        <Paper style={{ margin: 16, padding: 16, width: '100%' }}>
                            <Grid xs={12} md={12} item style={{ paddingRight: 16, marginBottom: 20 }}>
                                <TextField
                                    placeholder="Title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.change}
                                    // onKeyPress={}
                                    fullWidth
                                />
                            </Grid>
                            <Grid xs={12} md={12} item style={{ paddingRight: 16,  marginBottom: 20 }}>
                                <TextField
                                    placeholder="Description"
                                    name='description'
                                    value={this.state.description}
                                    onChange={this.change}
                                    // onKeyPress={}
                                    fullWidth
                                />
                            </Grid>
                            <Grid xs={12} md={12} item style={{ paddingRight: 16, marginBottom: 20 }}>
                                <TextField
                                    placeholder="Due Date"
                                    name="due_date"
                                    // label="Due Date"
                                    type="text"
                                    // defaultValue="mm-dd-yyyy"
                                    fullWidth
                                    // InputLabelProps={{
                                    // shrink: true,
                                    // }}
                                    value={this.state.due_date}
                                    onChange={this.change}
                                />
                            </Grid>
                            <Grid xs={12} md={12} item style={{ paddingTop: 20 }}>
                                <Button
                                    fullWidth
                                    color="secondary"
                                    variant="outlined"
                                    // onClick={this.submit}
                                    type="submit"
                                >
                                    {this.state.isLoading? "loading.." : "Add"}
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
