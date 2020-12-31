import React, { useState, useEffect } from 'react'; 
import Transaction from './Transaction.jsx';
import ScrollToBottom from 'react-scroll-to-bottom';
import { DataGrid } from '@material-ui/data-grid';
import { element } from 'prop-types';


const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: 'merchant_name', headerName: 'Transaction', width: 150 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'date_of_transaction', headerName: 'Date', width: 130 },
  { field: 'amount', headerName: 'Amount', type: 'number', width: 130 },
  { field: 'account_type', headerName: 'Account Type', width: 150 }
];


export default function Transactions() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('/test/get_transactions')
      .then(res => res.json())
      .then(res => setTransactions(res.transactions.map((ele) => {
        return {
          id: ele.row_id,
          account_id: ele.account_id,
          merchant_name: ele.merchant_name,
          amount: ele.amount,
          account_type: ele.account_type,
          date_of_transaction: ele.date_of_transaction,
          category: ele.category
        }
      })))
  }, [])



  return (
    <div className="transactions">
      <h3>Transactions</h3>
      <div className ="table" style={{ height: 800, width: '90%' }}>
        <DataGrid rows={transactions} columns={columns} pageSize={25}/>
      </div>
    </div>
  );
}
