import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListMenuPD from './ListMenuPD';
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        justifyContent: 'center'
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginTop: 100,
    },
    imgName: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 100,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        margin: '10px 10px 0px 10px',
        width: '100%',
        height: 'auto'
    },
}));


export default function ProfileDasboard() {

    const classes = useStyles();

    return (
        <Fragment>
            <Paper elevation={3} className={classes.paper}>
                <div className={classes.root}>
                    <Avatar alt="Michael" src={require("../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg")} className={classes.large} />
                </div>
                <p className={classes.imgName}>Michael</p>
                < ListMenuPD />
            </Paper>
        </Fragment>
    );
}


