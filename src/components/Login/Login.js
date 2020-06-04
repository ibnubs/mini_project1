import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SocialMediaIcon from '../SocialMediaIcon';
import '../../assets/styles/Main.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: '#e8e4e1',

        display: 'grid'

    },

    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),

    },
    border: {
        height: '80vh',
        minHeight: '300px',
        width: '100vh',
        margin: 'auto',
        boxShadow: `
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
        borderRadius: '80px 8px 80px 8px',
        borderTop: '1px solid #CCCCCC'


    },
    borderLeft: {
        // border: '1px solid blue',
        height: '100%',
        width: '50%',
        borderRadius: '80px 0px 0px 8px',

    },
    borderRight: {
        // border: '1px solid blue',
        borderLeft: '1px solid #CCCCCC',
        height: '100%',
        width: '50%',
        borderRadius: '60px 8px 80px 0px',
    },



}));

const Login = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleOnChaneEmail = (e) => {
        e.preventDefault();
        const value = e.target.value
        setEmail(value)
    }

    const handleOnChanePassword = (e) => {
        e.preventDefault();
        const value = e.target.value
        setPassword(value)
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post("https://be-mini-project.herokuapp.com/api/user/login",
            {
                'email': email,
                'password': password
            })
            .then(res => {
                console.log(res.data)
                console.log(res.status)
                console.log(res.statusText);
                console.log(res.headers);
                console.log(res.config);
                if (res.data.status === "Success") {
                    localStorage.setItem("token", res.data.data.token)
                    console.log('berhasil')
                }
                props.history.push('/homepage')
            })
            .catch(err => {
                console.log(err);
            });
    }



    return (
        <Fragment>
            <div className={classes.root}>
                <p className="logo-new"> Todos</p>
                <Grid 
                    container 
                    className={classes.border}
                    justify="center"
                    alignItems="center"
                    direction='column'
                >
                    <Grid 
                        item 
                        className={classes.borderLeft}
                        sm={12}
                    >
                        <p className="form-sign-title-new">Hello, Friend!</p>
                        <p className="desc-info-email-use-new desc-down">Enter your personal details and start your journey with us</p>
                        <Link to="/signup">
                            <Button
                                type="submit"
                                fullWidth
                                style={{ margin: "13.6vh 20px 10px 20px", padding: " 0px 0px 0px 0px", height: "50px", width: "25vw" }}
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </Grid>
                    <Grid 
                        item 
                        className={classes.borderRight}
                        sm={12}
                    >
                        <p className="form-sign-title-new">Sign in to Task Manager</p>
                        <SocialMediaIcon />
                        <p className="desc-info-email-use-new">or use your email account</p>
                        <form  >
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                style={{ margin: "30px 20px 10px 20px", padding: " 0px 40px 0px 0px" }}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={handleOnChaneEmail}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                style={{ margin: "10px 20px 10px 20px", padding: " 0px 40px 0px 0px" }}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={handleOnChanePassword}
                            />
                        </form>

                        <Button
                            type="submit"
                            style={{ margin: "10px 20px 10px 20px", padding: " 0px 0px 0px 0px", height: "50px", width: "25vw" }}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={submit}
                        >
                            Sign In
                            </Button>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}

export default Login;