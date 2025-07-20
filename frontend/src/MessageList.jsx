import React from 'react';

export default function MessageList({ messages }) {
  return (
    <ul>
      {messages.map(m => (
        <li key={m.id}>
          <b>{new Date(m.created_at).toLocaleString()}</b>: {m.content}
        </li>
      ))}
    </ul>
  );
}
