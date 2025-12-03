import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './styles.css';

const TransactionsApp = () => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:4000/api/transactions', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
  });

  if (isLoading) return <div>Loading transactions...</div>;

  return (
    <div className="transactions-container">
      <h2>Transaction History</h2>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((tx) => (
            <tr key={tx.id}>
              <td>{new Date(tx.date).toLocaleDateString()}</td>
              <td>{tx.description}</td>
              <td>{tx.category}</td>
              <td className={tx.amount > 0 ? 'positive' : 'negative'}>
                ${Math.abs(tx.amount).toFixed(2)}
              </td>
              <td>
                <span className={`status ${tx.status}`}>{tx.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsApp;
