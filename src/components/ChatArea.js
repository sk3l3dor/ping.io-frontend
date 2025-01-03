// ChatArea.js
import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';

const ChatArea = () => {
  const messages = [
    { text: "Hey, how are you?", time: "10:00 AM", sender: "them" },
    { text: "I'm good, thanks! How about you?", time: "10:02 AM", sender: "me" },
    { text: "I'm doing well, just working on a project.", time: "10:05 AM", sender: "them" },
    { text: "That's great! Need any help?", time: "10:07 AM", sender: "me" },
    { text: "Not right now, but I'll let you know if I do.", time: "10:10 AM", sender: "them" },
  ];

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', bgcolor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: '1px solid #e0e0e0', bgcolor: 'white' }}>
        <Avatar src="https://storage.googleapis.com/a1aa/image/o9bUnGyTgUq6IJbfrceNFA6Z2WAGsu0JmFtYaRIa6jKLfC8nA.jpg" />
        <Box sx={{ ml: 2 }}>
          <Typography variant="h6">John Doe</Typography>
          <Typography variant="body2" color="textSecondary">Online</Typography>
        </Box>
      </Box>
      <Box sx={{ flex: 1, p: 2, overflowY: 'auto' }}>
        {messages.map((message, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: message.sender === "me" ? 'flex-end' : 'flex-start', mb: 2 }}>
            <Box
              sx={{
                p: 2,
                borderRadius: '8px',
                bgcolor: message.sender === "me" ? '#dcf8c6' : 'white',
                boxShadow: 1,
                maxWidth: '70%',
              }}
            >
              <Typography variant="body1" color="textPrimary">{message.text}</Typography>
              <Typography variant="caption" color="textSecondary">{message.time}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ChatArea;