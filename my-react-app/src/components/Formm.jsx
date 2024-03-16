import { useEffect, useState } from "react"

const Form = (props) => {

    const [title, setTitle] = useState(" ")
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        setTitle(props.itemtoedit?.key || "")
        setAmount(props.itemtoedit?.value || 0)
    },[props.itemtoedit])
        
    const isEdit=props.itemtoedit!==undefined

    console.log("rendered",props.itemtoedit)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("submitted", title, amount)
        isEdit?props.editItem(title,amount):props.addfun(title, amount)

    }

    const handleInputChange = (i) => {
        setTitle(i.target.value)
        // setAmount(i.target.value)
    }

    const handleAmountChange = (i) => {
        setAmount(i.target.value)
        // setAmount(i.target.value)
    }
    return (
        <div id="div3"> 
        <h3>{isEdit==true?"Edit transaction":"Add transation"}</h3>
            <form action="/submit" method="post" id="div31">

                <label htmlFor="name"><b>Title:</b></label><br />
                <input type="text" id="title" name="name" value={title} onChange={handleInputChange}  required></input><br />

                <label htmlFsetTor="name" ><b>Amount :</b></label><br />
                <input type="number" id="amount" name="class" value={amount} onChange={handleAmountChange}  required></input><br />

                <button type="submit" onClick={handleSubmit} id="div32">{isEdit==true?"Edit Transaction":"Add transation"}</button>
                
            </form>
        </div>
    )
}

export default Form