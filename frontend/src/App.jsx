import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MessageList from './MessageList';
import NewMessageForm from './NewMessageForm';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/messages')
      .then(res => setMessages(res.data));

    axios.get('http://localhost:3002/timestamp')
      .then(res => setTimestamp(res.data.timestamp));
  }, []);

  const addMessage = async (content) => {
    const res = await axios.post('http://localhost:3001/api/messages', { content });
    setMessages([res.data, ...messages]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Message Board</h1>
      <p><b>Timestamp:</b> {timestamp}</p>
      <NewMessageForm onAdd={addMessage} />
      <MessageList messages={messages} />
    </div>
  );
}
