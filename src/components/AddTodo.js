import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: "30px 0px"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

const AddTodo = ({task}) => {
    const classes = useStyles();

    const [todoInput, setTodoInput ] = useState('');
    const [todoText, setTodoText] = useState([])
    console.log(todoText)

    const handleChangeTodo = (e) => {
        e.preventDefault();
        const value = e.target.value
        setTodoInput(value)
        
    }
    

    return (
        <Fragment>
            <form className={classes.root} noValidate autoComplete="off"

            >
                <TextField
                    id="standard"
                    label="Add Todo"
                    style={{ width: " 650px", margin: "0 20px" }}
                    value={todoInput}
                    onChange={handleChangeTodo}
                />
                <Button variant="contained" color="primary" 
                    onClick={()=>setTodoText([...todoText, todoInput])}
                >
                    Add
                </Button>

            </form>
        </Fragment>
    );

}
export default AddTodo;








