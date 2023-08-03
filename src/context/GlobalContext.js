import { createContext, useContext, useState } from "react";

let transactionList = []
const MyContext = createContext(transactionList);


export const GlobalContext = ({children})=>{

    const [transaction, setTransaction] = useState(transactionList);

    function addTransaction(newTransaction){
        transactionList = [...transactionList, newTransaction];
        setTransaction(transactionList)
    }

    function deleteTransaction(delId){
        transactionList = transactionList.filter((trans)=> trans.id != delId);
        setTransaction(transactionList)
    }

return (

    <MyContext.Provider value={{transaction, addTransaction, deleteTransaction}}>
        {children}
    </MyContext.Provider>
)

}

export const GetContext = ()=> useContext(MyContext)