import {useState, useRef} from 'react';
import {GetContext } from '../context/GlobalContext';

export const AddTransaction = ()=>{


const [transaction, setTransaction] = useState({id: 0, text:"", amount:0.00});
const {addTransaction} = GetContext()

const handleClick = (e)=>{
    
    e.preventDefault();
    
    if(transaction.text === "" || transaction.amount === 0){
        return console.log("Invalid Entry");
    }

    addTransaction({id: transaction.id, text: transaction.text, amount: +transaction.amount});
    setTransaction({id: transaction.id+1, text:"", amount:0.00})

    textRef.current.value = null;
    amountRef.current.value = null;
};


const textRef = useRef(null)
const amountRef = useRef(null)

return(
        <div className='add-transaction'>
        <h2>Add new transaction</h2>
        <hr />
        <form>
            <div>
                <label id="text"><b>Text: </b></label> <br />
                <input type="text" htmlFor="text" placeholder=' Enter text...' ref={textRef}onChange={(e)=> setTransaction({id: transaction.id, text:e.target.value, amount:transaction.amount})}/>
            </div>
            <div className='item'>
                <label id="amount" ><b>Amount: </b></label><br />
                <p>( negative - expense, positive - income )</p>
                <input type="number" htmlFor="amount" placeholder=" Enter amount..." ref={amountRef}onChange={(e)=> setTransaction({id: transaction.id, text:transaction.text, amount:e.target.value})}/>
            </div>
            <button type="submit" className="s-btn" onClick={handleClick}>Add Transaction</button>
        </form>
    </div>
)




}