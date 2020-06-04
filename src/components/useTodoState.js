// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default initialValue => {
//   const [todos, setTodos] = useState(initialValue);


//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const result = await axios.get(
//   //       "https://be-mini-project.herokuapp.com/api/task/", {
//   //       headers: {
//   //         'authorization': localStorage.getItem('token')
//   //       }
//   //     });
//   //     console.log('ini respon', result)
//   //     setTodos(result.data.data);
//   //   };
//   //   fetchData();
//   // },
//   // []
//   // );


//   // useEffect(async () => {
//   //   const result = 
//   //   axios.get(
//   //     "https://be-mini-project.herokuapp.com/api/task/",{
//   //       headers:{
//   //         'authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzMsImVtYWlsIjoiaW5pYnVkaUBnbWFpbC5jb20iLCJpYXQiOjE1OTExNjk2NDB9.qLQMpnDA406uuuDWjYmqjsWVLfd8SM1FSlnEszyqwQc'
//   //       }
//   //   })
//   //   setTodos(result.todos)
//   // },
//   // [])

//   return {
//     todos,
//     addTodo: todoText => {
//       setTodos([...todos, todoText]);
//     },
    
// };
