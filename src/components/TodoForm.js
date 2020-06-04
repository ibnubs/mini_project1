import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
const baseUrl = "https://be-mini-project.herokuapp.com/api/task/";
// import useInputState from './useInputState';


// const TodoForm = ({ saveTodo }) => {
//   // const { value, reset, onChange } = useInputState();
//   const [value, setValue] = useState('');




//   return (
//     <form
//       onSubmit={event => {
//         event.preventDefault();

//         saveTodo(value);
//         setValue('');
//       }}
//     >
//       <TextField
//         variant="outlined"
//         placeholder="Add todo"
//         margin="normal"
//         onChange={(event) => {
//           setValue(event.target.value)
//         }}
//         value={value}
//         fullWidth
//         style={{padding: '0vw 1vw' }}
//       />


//     </form>
//   );
// };

// export default TodoForm;


class TodoForm extends React.Component {
  state = {
    name: '',
    description: '',
    isLoading: false

  }

  change = e => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }

  submit = async(e) => {
    this.setState({ isLoading: true })
    let token = localStorage.getItem("token")
    e.preventDefault()
    // create data 
    const newTodo = {
      name: this.state.name,
      description: this.state.description,
      due_date: this.state.due_date
    }

    try {
      const res = await axios.post(`${baseUrl}`, newTodo, {
        headers: {
          auth: token
        }
      })
      this.props.getAll()
      this.setState({ name: "", description: "", isLoading: false })
    }catch(error){
      console.log(error)
    }
  }

  render() {
    return (
      <Fragment>
        <form
          onSubmit={this.submit}
          
        >
          <TextField
            variant="outlined"
            placeholder="Add todo"
            margin="normal"
            onChange={this.change}
            value={this.state.name}
            fullWidth
            style={{ padding: '0vw 1vw' }}
          />
        </form>
      </Fragment>
    )
  }

}

export default TodoForm;