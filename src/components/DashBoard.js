// import { Box, CssBaseline } from "@mui/material";
// import Sidebar from "./SideBar";
// import ChatArea from "./ChatArea";

// const DashBoard = () => {
//   return (
//     <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'background.default' }}>
//       <CssBaseline />
//       <Sidebar />
//       <ChatArea />
//     </Box>
//   );
// };

// export default DashBoard;



import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Avatar,
  Paper,
  Stack,
  Container,
  InputAdornment,
  Card,
  IconButton,
  useTheme,
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
  Drawer,
  AppBar,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/system";
import { IoSearch, IoSend, IoSettingsSharp, IoMenu, IoMoon, IoSunny } from "react-icons/io5";

const StyledChatContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "90vh",
  gap: 2,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.mode === "dark" ? "#1a1a1a" : "#f5f5f5",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
    height: "calc(100vh - 70px)",
  },
}));

const SidePanel = styled(Paper)(({ theme }) => ({
  width: "300px",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  backgroundColor: theme.palette.mode === "dark" ? "#2d2d2d" : "#ffffff",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const ChatArea = styled(Paper)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  backgroundColor: theme.palette.mode === "dark" ? "#2d2d2d" : "#ffffff",
}));

const MessageContainer = styled(Box)(({ sent }) => ({
  display: "flex",
  justifyContent: sent ? "flex-end" : "flex-start",
  marginBottom: "8px",
}));

const MessageBubble = styled(Card)(({ theme, sent }) => ({
  maxWidth: "70%",
  padding: "12px 16px",
  backgroundColor: sent 
    ? theme.palette.mode === "dark" ? "#0d47a1" : "#1976d2"
    : theme.palette.mode === "dark" ? "#424242" : "#fff",
  color: sent ? "#fff" : theme.palette.mode === "dark" ? "#fff" : "inherit",
  borderRadius: "16px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mode, setMode] = useState("light");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const customTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const dummyContacts = [
    {
      id: 1,
      name: "John Doe",
      avatar: "images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      lastMessage: "Hey, how are you?",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "images.unsplash.com/photo-1494790108377-be9c29b29330",
      lastMessage: "See you tomorrow!",
    },
  ];

  const dummyMessages = [
    { id: 1, text: "Hi there!", sent: false, timestamp: "09:00 AM" },
    { id: 2, text: "Hello! How are you?", sent: true, timestamp: "09:01 AM" },
    {
      id: 3,
      text: "I'm doing great, thanks for asking!",
      sent: false,
      timestamp: "09:02 AM",
    },
  ];

  useEffect(() => {
    setMessages(dummyMessages);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        text: newMessage,
        sent: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const contactsList = (
    <>
      <TextField
        fullWidth
        placeholder="Search contacts"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IoSearch />
            </InputAdornment>
          ),
        }}
      />
      <Stack spacing={2}>
        {dummyContacts.map((contact) => (
          <Box
            key={contact.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              cursor: "pointer",
              p: 1,
              borderRadius: 1,
              "&:hover": { backgroundColor: theme.palette.action.hover },
            }}
            onClick={() => isMobile && handleDrawerToggle()}
          >
            <Avatar
              src={`https://${contact.avatar}`}
              alt={contact.name}
              sx={{ width: 56, height: 56 }}
            />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                {contact.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {contact.lastMessage}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </>
  );

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ height: "100vh", p: { xs: 0, md: 2 } }}>
        <AppBar position="static" color="inherit" elevation={1}>
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <IoMenu />
              </IconButton>
            )}
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Ping-iO
            </Typography>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === "dark" ? <IoSunny /> : <IoMoon />}
            </IconButton>
          </Toolbar>
        </AppBar>

        <StyledChatContainer>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{ "& .MuiDrawer-paper": { width: "80%" } }}
            >
              <Box sx={{ p: 2 }}>{contactsList}</Box>
            </Drawer>
          ) : (
            <SidePanel elevation={2}>{contactsList}</SidePanel>
          )}

          <ChatArea elevation={2}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  src={`https://${dummyContacts[0].avatar}`}
                  alt={dummyContacts[0].name}
                />
                <Typography variant="h6">{dummyContacts[0].name}</Typography>
              </Box>
              <IconButton aria-label="settings">
                <IoSettingsSharp />
              </IconButton>
            </Box>

            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                mb: 2,
                p: 1,
              }}
            >
              {messages.map((message) => (
                <MessageContainer key={message.id} sent={message.sent}>
                  <MessageBubble sent={message.sent}>
                    <Typography variant="body1">{message.text}</Typography>
                    <Typography
                      variant="caption"
                      sx={{ display: "block", mt: 0.5, opacity: 0.7 }}
                    >
                      {message.timestamp}
                    </Typography>
                  </MessageBubble>
                </MessageContainer>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                fullWidth
                placeholder="Type a message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <IconButton
                color="primary"
                onClick={handleSendMessage}
                aria-label="send message"
              >
                <IoSend />
              </IconButton>
            </Box>
          </ChatArea>
        </StyledChatContainer>
      </Container>
    </ThemeProvider>
  );
};

export default ChatUI;