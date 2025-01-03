// Sidebar.js
import React from 'react';
import { Box, Avatar, TextField, List, ListItem, ListItemAvatar, ListItemText, Divider, Typography } from '@mui/material';

const Sidebar = () => {
  const chatList = [
    { name: "John Doe", message: "Hey, how are you?", profile: "https://storage.googleapis.com/a1aa/image/o9bUnGyTgUq6IJbfrceNFA6Z2WAGsu0JmFtYaRIa6jKLfC8nA.jpg" },
    { name: "Jane Smith", message: "Let's catch up later!", profile: "https://storage.googleapis.com/a1aa/image/o9bUnGyTgUq6IJbfrceNFA6Z2WAGsu0JmFtYaRIa6jKLfC8nA.jpg" },
    { name: "Alice Johnson", message: "Can you send me the files?", profile: "https://storage.googleapis.com/a1aa/image/o9bUnGyTgUq6IJbfrceNFA6Z2WAGsu0JmFtYaRIa6jKLfC8nA.jpg" },
    { name: "Bob Brown", message: "Meeting at 3 PM", profile: "https://storage.googleapis.com/a1aa/image/o9bUnGyTgUq6IJbfrceNFA6Z2WAGsu0JmFtYaRIa6jKLfC8nA.jpg" },
    { name: "Charlie Davis", message: "Happy Birthday!", profile: "https://storage.googleapis.com/a1aa/image/o9bUnGyTgUq6IJbfrceNFA6Z2WAGsu0JmFtYaRIa6jKLfC8nA.jpg" },
  ];

  return (
    <Box sx={{ width: '300px', bgcolor: 'background.paper', borderRight: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: '1px solid #e0e0e0' }}>
        <Avatar src="https://storage.googleapis.com/a1aa/image/DxkiibYsMpKfMqOQtF0RGfB8TKF3ZkdRJpoKQAxDbVmJfC8nA.jpg" />
        <Box sx={{ display: 'flex', gap: 1 }}>
          <i className="fas fa-comment-alt"></i>
          <i className="fas fa-ellipsis-v"></i>
        </Box>
      </Box>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search or start new chat"
        sx={{ m: 2 }}
      />
      <List>
        {chatList.map((chat, index) => (
          <React.Fragment key={index}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar src={chat.profile} />
              </ListItemAvatar>
              <ListItemText primary={chat.name} secondary={chat.message} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;