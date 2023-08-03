import { GetContext } from "../context/GlobalContext"

export const Balance = ()=>{

    const {transaction} = GetContext();
    let balance = 0;
    
    transaction.forEach(element => {
        balance += element.amount;
    });


    return(
        <div className="balance">
        <h3>Your Balance</h3>
        <h2>${balance}</h2>
        </div>
    )
}

