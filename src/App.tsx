import './App.css';
import { Question } from './components/question/Question';
import data from './data'


function App() {
  console.log(data)
  return (
    <div className="body">
      <div className="main-container">
      <h2>Questions And Answers About Login</h2>
      <div className='qustions-container'>
        {data.map((question)=>{
          return(
            <Question question={question}/>
          )
        })}
      
      </div>
      
    </div>
    </div>
    
  );
}

export default App;
