import cl from './transactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={cl.transaction}>
            <thead className={cl.headtable}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return <tr key={id}  className={cl.bodytable}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
            })}
            </tbody>    
        </table>
);};

export default TransactionHistory;