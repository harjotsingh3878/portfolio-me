import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import '../styles/dashboard.css';

const Dashboard = () => {
  const { data: dashboardData, isLoading } = useQuery({
    queryKey: ['dashboard'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:4000/api/dashboard', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <h1>Overview Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Balance</h3>
          <p className="balance">${dashboardData?.balance?.toLocaleString()}</p>
        </div>
        <div className="card">
          <h3>Recent Transactions</h3>
          <ul className="transaction-list">
            {dashboardData?.recentTransactions?.map((tx) => (
              <li key={tx.id}>
                <span>{tx.description}</span>
                <span className={tx.amount > 0 ? 'positive' : 'negative'}>
                  ${Math.abs(tx.amount)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
