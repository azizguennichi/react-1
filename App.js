import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
<form>
 <div className='aziz'>
 <h1 class="text-danger">Sign Up</h1>
 <label>email:</label>
 <input type="text" name="email"/>
    <div className='guenn'>
    <label>First Name:</label>
    <input type="text" name="firstName" />
    <br />
    <label>Last Name:</label>
    <input type="text" name="lastName" id="lastName" />
    <br />
    <label>your number:</label>
    <input type="number" name="your number" id="your number" />
    <br />
    
    <label>Password:</label>
    <input type="password" name="password" />
    <br />
    <button type="button" class="btn btn-success">Success</button> <button type='button' class="btn btn-cancel">cancel</button>
    
 </div>
 
 </div>
</form>

    </div>
  );
}

export default App;
