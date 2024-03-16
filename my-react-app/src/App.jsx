import Element from './components/Element'
import Head from './components/Head'
import Formm from './components/Formm'
import './App.css'
import { useState } from 'react'

const elements=[{id:1,key:"Movie",value:1500},{id:2,key:"Food",value:2500},{id:3,key:"Cloth",value:-3500}]

const App = () => {

   const[list,setList]=useState(elements)
   
   const [Editid,setEditid] = useState(null)
  //  const heading=[{id:1,inc:"300",sum:"200"}]

  const itemtoedit=list.find((item) => item.id==Editid)

  console.log(Editid)
  console.log(itemtoedit)


  const deleteItem=(id)=>{
    const newList=list.filter((item) => item.id !==id)
    setList(newList)
  }

  const addItem = (title,amount)=>{
    setList([...list,
      {key:title,value:parseInt(amount),id:list[list.length-1].id+1}
  ])
  }

  const editItem=(title,amount) => {
    console.log(title,amount)
  
  const editList =list.map((item) => {
    if(item.id === Editid){
      item.key=title
      item.value=parseInt(amount)
    }
    return item
  })
  console.log(editList)
  setList(editList)
  setEditid(null)
  }


  
let sum=0
let sum1=0
list.forEach((ex) => {
  if(ex.value<0){
    sum+=ex.value
  }
  else{
    sum1+=ex.value
  }
})
   
 return(<div>
   <h1 >App</h1>
     
   <Head inc={sum1} val={sum} />
   <h1>Form</h1>

   <Formm  addfun={addItem} itemtoedit={itemtoedit} editItem={editItem}/>
   <h1>History</h1>
   {
     list.map((i) => {
       return <Element setEditid={setEditid} deleteItem={deleteItem} id={i.id} key={i.id} exp={i.key} val={i.value} />
     })
   }

   </div>
 )
}
export default App