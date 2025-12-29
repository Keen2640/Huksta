
import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'them';
  timestamp: string;
}

interface Chat {
  id: string;
  user: string;
  lastMsg: string;
  time: string;
  avatar: string;
  unread: boolean;
  messages: Message[];
}

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const chats: Chat[] = [
    { 
      id: '1', 
      user: 'Sarah M.', 
      lastMsg: 'Is the desk still available?', 
      time: '2m ago', 
      avatar: 'https://picsum.photos/seed/sarah/100/100', 
      unread: true,
      messages: [
        { id: 'm1', text: 'Is this stool still available?', sender: 'me', timestamp: '9:41 AM' },
        { id: 'm2', text: 'Uh', sender: 'them', timestamp: '9:42 AM' },
        { id: 'm3', text: 'wait', sender: 'them', timestamp: '9:42 AM' },
        { id: 'm4', text: 'yes it\'s still available', sender: 'them', timestamp: '9:43 AM' },
        { id: 'm5', text: 'Oh cool! Just wondering when you\'re free so I could stop by and take a look at it.', sender: 'me', timestamp: '9:45 AM' },
        { id: 'm6', text: 'Hmmm', sender: 'them', timestamp: '9:46 AM' },
        { id: 'm7', text: 'I think Ill be free', sender: 'them', timestamp: '9:47 AM' },
        { id: 'm8', text: 'Will head to the Help Center if I have more questions tho', sender: 'them', timestamp: '9:48 AM' },
      ]
    },
    { 
      id: '2', 
      user: 'James K.', 
      lastMsg: 'I can pick up at 5pm today.', 
      time: '1h ago', 
      avatar: 'https://picsum.photos/seed/james/100/100', 
      unread: false,
      messages: [] 
    }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [selectedChat]);

  const handleSendMessage = () => {
    if (!inputValue.trim() || !selectedChat) return;
    // Logic to update local state would go here in a real app
    setInputValue('');
  };

  if (selectedChat) {
    return (
      <div className="flex flex-col h-full bg-white animate-in slide-in-from-right duration-300">
        {/* Chat Header - Matching Wireframe with Grey Box */}
        <div className="pt-12 pb-2 px-6 flex flex-col items-center">
          <div className="flex items-center w-full justify-between mb-4">
            <button onClick={() => setSelectedChat(null)} className="p-2 -ml-4 text-gray-400 hover:text-orange-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="w-10 h-10" /> {/* Spacer */}
          </div>
          
          {/* Grey Profile Box from previous request */}
          <div className="w-full bg-[#F3F3F3] rounded-[1.75rem] py-6 px-4 flex flex-col items-center space-y-3 mb-2 shadow-sm">
            <img 
              src={selectedChat.avatar} 
              alt={selectedChat.user} 
              className="w-20 h-20 rounded-full object-cover border-[3px] border-white shadow-sm"
            />
            <h2 className="text-lg font-bold text-gray-800 tracking-tight">{selectedChat.user}</h2>
          </div>
        </div>

        {/* Message Thread */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-4">
          <div className="text-center py-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nov 30, 2023, 9:41 AM</span>
          </div>

          {selectedChat.messages.map((msg, idx) => {
            const isMe = msg.sender === 'me';
            const prevMsg = selectedChat.messages[idx - 1];
            const isSameSender = prevMsg?.sender === msg.sender;

            return (
              <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'} ${isSameSender ? '-mt-1' : 'mt-2'}`}>
                {!isMe && (
                  <div className="w-9 mr-2 flex-shrink-0 flex items-end">
                    {!isSameSender && (
                      <img src={selectedChat.avatar} className="w-7 h-7 rounded-full object-cover mb-1 border border-gray-100" alt="" />
                    )}
                  </div>
                )}
                
                <div 
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    isMe 
                    ? 'bg-[#FF8C42] text-white rounded-br-none font-medium shadow-sm' 
                    : 'bg-[#EDEDED] text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <div className="p-4 pb-8 border-t border-gray-50 bg-white">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Message..." 
                className="w-full bg-[#F3F3F3] border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-200 placeholder-gray-400 transition-all"
              />
            </div>
            {inputValue.trim() && (
              <button 
                onClick={handleSendMessage}
                className="bg-orange-500 text-white p-3.5 rounded-2xl shadow-lg shadow-orange-100 active:scale-90 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <div className="pt-14 pb-6 px-6">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Inbox</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {chats.map((chat) => (
          <div 
            key={chat.id} 
            onClick={() => setSelectedChat(chat)}
            className="mx-4 mb-4 p-5 flex items-center space-x-4 bg-white rounded-[2rem] border-2 border-emerald-500 shadow-sm hover:shadow-md transition-all cursor-pointer relative active:scale-[0.98]"
          >
            <div className="relative">
              <img src={chat.avatar} alt={chat.user} className="w-14 h-14 rounded-[1.25rem] object-cover shadow-sm" />
              {chat.unread && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-600 border-2 border-white rounded-full shadow-sm" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-0.5">
                <h3 className="font-bold text-gray-900">{chat.user}</h3>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{chat.time}</span>
              </div>
              <p className={`text-sm line-clamp-1 ${chat.unread ? 'font-bold text-gray-800' : 'text-gray-500 font-medium'}`}>
                {chat.lastMsg}
              </p>
            </div>
            <div className="text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}

        {chats.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <p className="font-bold uppercase tracking-widest text-[10px]">Your inbox is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
