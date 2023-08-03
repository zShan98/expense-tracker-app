import { GetContext } from "../context/GlobalContext"

export const TransactionList = ()=>{

    const {deleteTransaction, transaction} = GetContext()

    return(
        <div className="transactionList">
            <h2>Transaction history</h2>
            <hr />
            {transaction.map((trans)=>
           {
            let color = trans.amount > 0 ? "8px solid #47ad58": "8px solid #db4804";

            return (
           <div className="transaction" key={trans.id} style={{borderRight:color}}>
                <button  onClick={()=>{deleteTransaction(trans.id)}}>X</button>
                <div >{trans.text}</div>
                <div>{trans.amount > 0 ? '+': ''}{trans.amount}</div>
            </div>
            )})}
        </div>
    )



}