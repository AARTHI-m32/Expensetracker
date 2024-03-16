const Element = (props) => {
    

    const {setEditid,deleteItem,id,exp,val}=props

    const handleDelete=()=>{
      deleteItem(id)
    }
    
    const handleEdit=()=>{
      setEditid(id)
    }
    return(
        <>
        <div id="div22">
        <div className={`${val > 0 ? "positive" : "negative"} div2`}>  
          <h3 id="div21">{exp}</h3>
          <h3>{val}</h3>
          
        </div>
        <button id="div23" onClick={handleEdit}><b>Edit</b></button>
        <button id="div23" onClick={handleDelete}><b>Delete</b></button>
        </div>
         </>
      )
}

export default Element