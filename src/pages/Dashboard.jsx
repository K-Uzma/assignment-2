import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { EmojiEmotionsOutlined } from '@mui/icons-material';
import Layout from './Layout';

const Dashboard = () => {
  const registered_data = JSON.parse(localStorage.getItem('Registered_data') || '[]'); //get data from localstorage
  const loggedIn = parseInt(localStorage.getItem("loggedIn")); //get logged in ID
  const user = registered_data.find((user) => user.id === loggedIn); //get details of logged in ID
  
  return (
    <Layout>
      <Card variant="outlined" sx={{ minWidth: 700, bgcolor: "#1976d22e" }}>
        <CardContent>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#1976d2" }}>
              <EmojiEmotionsOutlined />
            </Avatar>
            <Typography variant="h5" sx={{ margin: "50px" }}>
              {user ? `Welcome ${user.fullname} !` : "Welcome!"}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Layout>
  );
}

export default Dashboard
