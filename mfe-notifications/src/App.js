import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import './styles.css';

const NotificationsApp = () => {
  const queryClient = useQueryClient();

  const { data: notifications, isLoading } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:4000/api/notifications', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (id) => {
      const token = localStorage.getItem('token');
      return axios.patch(
        `http://localhost:4000/api/notifications/${id}/read`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['notifications']);
    },
  });

  if (isLoading) return <div>Loading notifications...</div>;

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <div className="notifications-list">
        {notifications?.map((notif) => (
          <div
            key={notif.id}
            className={`notification-item ${notif.read ? 'read' : 'unread'}`}
          >
            <div className="notification-icon">
              {notif.type === 'transaction' ? '💳' : '📢'}
            </div>
            <div className="notification-content">
              <h4>{notif.title}</h4>
              <p>{notif.message}</p>
              <span className="notification-time">
                {new Date(notif.timestamp).toLocaleString()}
              </span>
            </div>
            {!notif.read && (
              <button
                onClick={() => markAsReadMutation.mutate(notif.id)}
                className="mark-read-btn"
              >
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsApp;
