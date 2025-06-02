
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { ContactMessage } from '@shared/schema';

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [, setLocation] = useLocation();

  useEffect(() => {
    fetch('/api/messages')
      .then(res => {
        if (res.status === 401) {
          setLocation('/admin');
          return;
        }
        return res.json();
      })
      .then(data => {
        if (data) setMessages(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
      <div className="space-y-4">
        {messages.map(message => (
          <div key={message.id} className="border p-4 rounded">
            <div className="font-bold">{message.name}</div>
            <div className="text-gray-600">{message.email}</div>
            <div className="font-semibold mt-2">{message.subject}</div>
            <div className="mt-2">{message.message}</div>
            <div className="text-sm text-gray-500 mt-2">
              {new Date(message.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
