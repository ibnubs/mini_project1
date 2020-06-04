import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useInputState from './useInputState';


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

const AddTodo = ({addTodo}) => {
    const classes = useStyles();
    
    const { value, reset, onChange} = useInputState();

    const handleAdd = e => {
        e.preventdefault();
        // const formData = new FormData(e.target);
        // addTodo({
        //     text: formData.get('text')
        // });
        // e.target.reset();
        addTodo(value);
        reset();
    }

    // const [todoInput, setTodoInput ] = useState('');
    // const [todoText, setTodoText] = useState([])
    // console.log(todoText)

    // const handleChangeTodo = (e) => {
    //     e.preventDefault();
    //     const value = e.target.value
    //     setTodoInput(value)
        
    // }
    



    return (
        <Fragment>
            <form className={classes.root} noValidate autoComplete="off"
                onSubmit={handleAdd}
            >
                <TextField
                    id="text"
                    name="text"
                    label="Add Todo"
                    style={{ width: "50vw", margin: "0 20px" }}
                    value={value}
                    onChange={onChange}
                />
                <Button variant="contained" color="primary" type="submit"
                    // onClick={()=>setTodoText([...todoText, todoInput])}
                >
                    Add
                </Button>

            </form>
        </Fragment>
    );

}
export default AddTodo;








