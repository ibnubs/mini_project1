import React, { Fragment, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProfileDasboard from './ProfileDasboard';
import AddTodo from './AddTodo';
import TodoList from './TodoList';



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


const ContainerDashboard = ({saveTodo}) => {
    const classes = useStyles();

    const [value, setValue] = useState ('');
    


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
                                <AddTodo />
                            </Paper>
                        </Grid>
                        <Grid item >
                            <Paper elevation={3} className={classes.paper} direction={"column"}>
                                <Grid item container>
                                    <Grid item xs={2}> </Grid>
                                    <Grid item xs={4} className={classes.textTitleLeft} > <p> Task</p></Grid>
                                    <Grid item xs={2}> </Grid>
                                    <Grid item xs={2} className={classes.important} >  <p>Important</p></Grid>
                                    <Grid item xs={2}> </Grid>
                                </Grid>
                            </Paper>
                            
                            <TodoList />
                            <TodoList />
                            <TodoList />
                            <TodoList />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
}

export default ContainerDashboard;