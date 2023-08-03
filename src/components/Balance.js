import { getContext } from "../context/GlobalContext"

export const Balance = ()=>{

    const {transaction} = getContext();
    let balance = 0;
    
    transaction.forEach(element => {
        balance += element
    });


    return(
        <div className="balance">
        <h3>Your Balance</h3>
        <h2>${balance}</h2>
        </div>
    )
}

