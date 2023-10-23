import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { PriorityHighOutlined } from '@mui/icons-material';

const NoPage = () => {
  return (
    <Card variant='outlined' sx={{ minWidth: 700, bgcolor: '#1976d22e' }}>
    <CardContent>
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
          <PriorityHighOutlined />
        </Avatar>
        <Typography variant="h4" sx={{margin:'50px'}}>
          404 Page Not Found !
        </Typography>
      </Box>
    </CardContent>
  </Card>
  )
}

export default NoPage
