import { useEffect, useState } from "react"
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './fonts/fonts.css'
function App() {
  const [Title, setTitle] = useState('')
  
  const [Description, setDescription] = useState('')

  const [TodoList, setTodoList] = useState([])

  const[editIndex, setEditIndex] = useState(null);

  function addTask(e) {
    const newList = { Title: Title, Description: Description }
    let data = [...TodoList, newList];
    setTodoList(data);
    setTitle("");
    setDescription("");
  }

  const handleClick = (data) => {
    let newData = []
    for(let i in TodoList){
      if(i ==! data){
        newData.push(TodoList[i])
      }
    }
    setTodoList(newData)
  };


  const [editForm, seteditForm] = useState(false);

  function editTask(data,i){
    setTitle(data.Title);
    setDescription(data.Description);
    setEditIndex(i)
    seteditForm(true)
  }
 

  function updateTask(e) {
    e.preventDefault();
    const newList = { Title: Title, Description: Description }
    handleUpdateTodo(editIndex, newList);
    setTitle("");
    setDescription("");
    seteditForm(false)
  }

  function handleUpdateTodo(index, updatedTodo) {
    const updatedItem = TodoList.map((newData, i) => {
      return i === index ? updatedTodo : newData;
    });

    setTodoList(updatedItem);

  }



  // fetch api code
  // const [fdata,setfdata]= useState([])
  // const getData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((getData) =>{
  //     setfdata(getData) 
  //   })Task
  // }
  // getData()

  return (
    <div className="App">
      <div className="container mt-5">
        <h2>
          Task List
        </h2>
        <div className="create-task">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h3 className="title-haeding">Create New Task</h3>
            </div>
            <div className="col-lg-9 col-md-12 col-12">
              <label htmlFor="title"> Enter Title </label>
              <input type="text" name="title" placeholder="Enter Here..." value={Title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="col-lg-9 col-md-12 col-12">
              <label htmlFor="title"> Enter Description </label>
              <textarea rows="4" name="Description" placeholder="Enter Here..." value={Description} onChange={e => setDescription(e.target.value)} ></textarea>
            </div>
            <div className="col-lg-9 col-md-6 col-12">
              <button onClick= {editForm ? updateTask  : addTask} disabled={(Title == "" || Description=="")}>{editForm ? 'Change' : 'Add Task' }  </button>
            </div>
          </div>
        </div>
        <div className="addes-task">

          <ul> 
            {
            TodoList.map((data, i) => <li key={i}>
              <dl>
                <dt>{data.Title}</dt>
                <dd>{data.Description}</dd>
               
              </dl>
              <div className="btn-list">
                <div className="del-icon" onClick={() => editTask(data, i)}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></div>
                  <div className="del-icon"  onClick={() => handleClick(i)}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></div>
                  
              </div>
            </li> 
            )
          }
          </ul>
        </div>
        {/* fetch api table */}
        {/* <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>First</th>
            </tr>
          </thead>
          <tbody>
            {
              fdata.map((data, i) => <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
              </tr>)
            }
            
          </tbody>
        </table> */}
      </div>
    </div>
  );
}

export default App;
