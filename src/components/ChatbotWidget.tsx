import { useState } from 'react';

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you with your enquiry?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setMessages(msgs => [...msgs, { from: 'bot', text: 'Thank you for your enquiry! We will get back to you soon.' }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 bg-white rounded-lg shadow-lg border border-gray-300 animate__animated animate__fadeInUp">
          <div className="flex justify-between items-center p-3 border-b">
            <span className="font-bold text-truf-navy">Turf50 Enquiry Bot</span>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-red-500">×</button>
          </div>
          <div className="p-3 h-64 overflow-y-auto flex flex-col gap-2">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === 'bot' ? 'text-left' : 'text-right'}>
                <span className={msg.from === 'bot' ? 'bg-truf-cream text-truf-navy px-3 py-2 rounded-lg inline-block' : 'bg-truf-navy text-white px-3 py-2 rounded-lg inline-block'}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex border-t p-2 gap-2">
            <input
              className="flex-1 border rounded px-2 py-1"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="bg-truf-navy text-white px-4 py-1 rounded">Send</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-truf-navy text-white rounded-full shadow-lg animate__animated animate__bounceIn flex items-center justify-center w-16 h-16 hover:bg-truf-cream hover:text-truf-navy transition-colors"
          title="Chat with us"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8l-4 1 1-4A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )
    </div>
  );
};

export default ChatbotWidget;
