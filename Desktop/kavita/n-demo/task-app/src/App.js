// import logo from './logo.svg';

// import{usestate} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import './App.css';
import { Form } from './component/form/form';

function App() {
  // const [Title , setTitle] = usestate('')
  // const [Message , setMessage] = usestate('')



  return (
    <>
      <div className="form-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Form ></Form>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
