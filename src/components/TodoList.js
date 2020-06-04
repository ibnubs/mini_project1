import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    textLeft: {
        textAlign: "left",
        paddingLeft: 30,
        paddingTop: 8,
        fontSize: 18

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
    iconCenter: {
        paddingLeft: 35
    },
    iconEditDel: {
        paddingTop: 10
    }
}));



export const TodoList = ({task, deleteTodo}) => {

    

    

    const classes = useStyles();


    // handling icon checkbox and star
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    
    return (
        <Fragment>
            <Paper elevation={3} className={classes.paper} direction={"column"}>
                <Grid item container>
                    <Grid item xs={2}  >
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </Grid>
                    <Grid item xs={6} className={classes.textLeft} > <p >{task.text}</p></Grid>
                    <Grid item xs={2} className={classes.iconCenter} >
                        <FormControlLabel
                            control={<Checkbox icon={<StarBorderIcon />} checkedIcon={<StarIcon />} />}

                        />
                    </Grid>
                    <Grid item xs={1} className={classes.iconEditDel} > <CreateIcon /> </Grid>
                    <Grid item xs={1} className={classes.iconEditDel} > <DeleteIcon /> </Grid>
                </Grid>
            </Paper>
        </Fragment>
    )

}

export default ({tasks})=> (
    <Fragment>
        {(tasks || []).map((task, index)=> (<TodoList task ={task} key={index} />
        ))}
    </Fragment>
);