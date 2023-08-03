import { GetContext } from "../context/GlobalContext"

export const IncomeExpense = ()=>{
    let income = 0.00
    let expense =0.00
    const {transaction} = GetContext();

    for(let x=0; x<transaction.length; x++){
        if(transaction[x].amount >= 0)
            income = income + transaction[x].amount;
        else if (transaction[x].amount < 0)
            expense += Math.abs(transaction[x].amount)
        
    }

    const green = {color: "#47ad58"};
    const red = {color: "#db4804"};

    return(
        <div className="income-expense">
            <span className="sibling">
                <h3>Income</h3>
                <h2 style={green}>${income}</h2>
            </span>
            <span className="sibling">
                 <h3>Expense</h3>
                <h2 style={red}>${expense}</h2>
            </span>
        </div>
    )

}