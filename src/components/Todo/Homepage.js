import React, { Fragment } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Todo from './Todo';
import ProfileDasboard from '../ProfileDasboard';
import { IconButton, Button, Typography, Toolbar, AppBar, Container, makeStyles, Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Dashboard = (props) => {
    const classes = useStyles();
    const logout = () => {
        props.history.push('/')
    }

    return (
        <Fragment>
            <div className={classes.root}>
                <AppBar position="static">
                    <Container>
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" style={{outline:'none'}}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Todos
                            </Typography>
                            <Button variant="contained" color="secondary" onClick={logout} style={{outline:'none'}}>
                                Logout
                            </Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
            <Container>
                <Grid container direction="row">
                    <Grid item md={4} sm={12} >
                        <ProfileDasboard />
                    </Grid>
                    <Grid item md={8} sm={12}>
                        <Todo />
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default Dashboard