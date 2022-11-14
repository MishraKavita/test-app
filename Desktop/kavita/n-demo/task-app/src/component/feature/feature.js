
function Feature(){
    return(
        <>
            <h1>Second commit on git</h1>
        </>
    )
}
export default Feature;








































































// import { usestate } from "react"
// export function Form(prop) {
//     const [Title, setTitle] = usestate('')
//     const [Message, setMessage] = usestate('')

//     const [TodoList, setTodoList] = usestate('')

//     function addTask(e) {
//         const newList = { Title: Title, Message: Message }
//         let data = [...TodoList, newList];
//         setTodoList(data);
//         setTitle("");
//         setMessage("")
//     }
    
// //   const handleClick = e =>{
// //     removeEventListener(e.target.Title);
// //   };

//     return (
//         <>
//             <div className="form-wrap">
//                 <h2 className="text-center">Task Form</h2>
//                 <form className="row">
//                     <div className="">
//                         <label>Name</label>
//                         <input type="text" placeholder="Enter Your Name" value={Title} onChange={e => setTitle(e.target.value)}></input>
//                     </div>
//                     <div className="">
//                         <label>Message</label>
//                         <textarea placeholder="Message" value={Message} onChange={e => setMessage(e.target.value)}></textarea>
//                     </div>
//                     <div>
//                         <button className="add-btn" onClick={addTask}>Add</button>
//                     </div>
//                 </form>
//             </div>
//             <ul> {
//                 TodoList.map((data, i) => <li key={i}>
//                     <dl>
//                         <dt>{data.Title}</dt>
//                         <dd>{data.Message}</dd>
//                     </dl>
//                     {/* <div className="del-icon" onClick={handleClick}>
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
//                     </div> */}
//                 </li>
//                 )
//             }
//             </ul>
//         </>
//     )
// }