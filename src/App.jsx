import React,{useState} from 'react'
import Card from './Components/Card'
import Heading from './Components/Heading'
import Edit from './Components/EditUser'
import All from './Components/All'
import Completed from './Components/Completed'
import NotCompleted from './Components/NotComplete'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import EditUser from './Components/EditUser'


const App=() =>{
 let [todos,setTodos]=useState([
  {id:1,
    name:"Office Task-1",
    description:"this is the description for my first task",
    status:true},
  {id:1,
    name:"Office Task-2",
    description:"this is the description for my second task",
    status:true},
  {id:1,
    name:"Office Task-3",
    description:"this is the description for my third task",
    status:false},
 ])



 return<>
 <div className="container-fluid mt-4 mb-5">       
 <BrowserRouter>
 <Routes>
   <Route path="/display" element={<Heading todos={todos} setTodos={setTodos}/>}>
       <Route path="all" element={<All todos={todos} setTodos={setTodos} />}></Route>
       <Route path="completed" element={<Completed todos={todos} setTodos={setTodos}/>}></Route>
       <Route path="notcompleted" element={<NotCompleted todos={todos} setTodos={setTodos} />}></Route>
    </Route>
    <Route path="card" element={<Card/>}></Route>
  <Route path="/edit/:id" element={<EditUser todos={todos} setTodos={setTodos} />}/>
  <Route path="/*" element={<Navigate to="/display/all" />}/>
 </Routes>

 </BrowserRouter>
 </div>
 </>
}

export default App