import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent:'center',
        margin: '2vh 0px -2vh 0px ',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        
    },
}));

export default function SocialMediaIcon() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Avatar alt="Facebook" src=  {require("../assets/images/Icon/icons8-facebook-100.png")} className={classes.large} />
            <Avatar alt="Google" src={require("../assets/images/Icon/icons8-google-100.png")} className={classes.large} />
            <Avatar alt="LinkeIn" src={require("../assets/images/Icon/icons8-linkedin-100.png")} className={classes.large} />
        </div>
    );
}
