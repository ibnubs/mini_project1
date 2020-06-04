import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        
        
    },
    textAlign:{
        textAlign:'center',
    },
    textSize:{
        fontSize:44,
    }
}));

// function ListItemLink(props) {
//     return <ListItem button component="a" {...props} />;
// }

export default function ListMenuPD() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component='nav'  >
                <ListItem button className={classes.textAlign}>
                    <ListItemText className={classes.fontSize} primary="My Day" />
                </ListItem>
                <ListItem button className={classes.textAlign}>
                    <ListItemText primary="Important" />
                </ListItem>
                <ListItem button className={classes.textAlign}>
                    <ListItemText primary="Complete" />
                </ListItem>
            </List>
        </div>
    );
}
