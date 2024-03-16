const   Head = (props) => {
         const bal=props.inc+props.val
 
    return(
        <>
        <h1>Expense Tracker</h1>
        <div id="div11"><h3>Balance:{bal}</h3></div>
        <div className="div1">
          <div>
          <h3>Income</h3>
           <h3>{props.inc}</h3>
          </div>
          <div>
          <h3>Expense</h3>
           <h3>{props.val}</h3>
          </div>     
        </div>
    
       </>
      )
}

export default Head