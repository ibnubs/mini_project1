import React, { Fragment, useState,useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProfileDasboard from './ProfileDasboard';
// import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoListNew from './TodoListNew';
// import useTodoState from './useTodoState';
import TodoForm from './TodoForm';
import axios from 'axios';




const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    margin: {
        marginTop: 20,
    },
    border: {
        border: "solid 1px black"
    },
    textLeft: {
        textAlign: "left",
        paddingLeft: 30,

    },
    important: {
        fontSize: "16px",
        fontWeight: 800
    },
    textTitleLeft: {
        textAlign: "left",
        paddingLeft: 30,
        fontSize: "16px",
        fontWeight: 800
    },
}));


const ContainerDashboard = () => {
    const classes = useStyles();
    const [todos, setTodos] = useState([]);


    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios.get(
    //             "https://be-mini-project.herokuapp.com/api/task/", {
    //             headers: {
    //                 'authorization': localStorage.getItem('token')
    //             }
    //         });
    //         console.log('ini respon', result)
    //         setTodos(result.data.data);
    //     };
    //     fetchData();
    // },
    //     []
    // );




    return (
        <Fragment>
            <CssBaseline />
            <Container  >
                <Grid container spacing={2}  >
                    <Grid container item direction={"column"} xs={4} className={classes.margin} >
                        <Paper elevation={3} className={classes.paper}>
                            <ProfileDasboard />
                        </Paper>
                    </Grid>

                    <Grid container item direction={"column"} xs={8}>
                        <Grid item className={classes.margin} >
                            <Paper elevation={3} className={classes.paper}>
                                {/* <AddTodo
                                    addTodo={task => updateTasks([...tasks, task])}
                                /> */}

                                <TodoForm
                                    saveTodo={(todoText) => {
                                        const trimmedText = todoText.trim();
                                        if (trimmedText.length > 0) {
                                            setTodos([...todos, todoText]);
                                        }
                                    }}
                                />

                            </Paper>
                        </Grid>
                        <Grid item >
                            <Paper elevation={3} className={classes.paper} direction={"column"}>
                                <Grid item container >
                                    <Grid item xs={2} md={false}> </Grid>
                                    <Grid item xs={4} className={classes.textTitleLeft}  > <p> Task</p></Grid>
                                    <Grid item xs={2}> </Grid>
                                    <Grid item xs={2} className={classes.important} >  <p>Important</p></Grid>
                                    <Grid item xs={2}> </Grid>
                                </Grid>
                            </Paper>
                            <TodoListNew 
                                todos={setTodos} 
                                deleteTodo={(todoIndex) => {
                                    const newTodos = todos.filter((_, index) => index !== todoIndex);
                                
                                    setTodos(newTodos)
                                }}
                            />
                            {/* <TodoList tasks={tasks} /> */}

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
}

export default ContainerDashboard;