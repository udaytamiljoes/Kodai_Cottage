import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Square } from 'lucide-react';
import { rooms } from '../data/rooms';

export default function RoomList() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
          Our Cottages
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Discover your perfect retreat in Kodaikanal
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {rooms.map((room, index) => (
          <Grid item key={room.id} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={room.image}
                  alt={room.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {room.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {room.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Users size={16} style={{ marginRight: 4 }} />
                      <Typography variant="body2" color="text.secondary">
                        {room.maxOccupancy} guests
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Square size={16} style={{ marginRight: 4 }} />
                      <Typography variant="body2" color="text.secondary">
                        {room.size} m²
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                    <Typography variant="h6" color="primary">
                      ₹{room.price}
                      <Typography component="span" variant="caption" color="text.secondary">
                        /night
                      </Typography>
                    </Typography>
                    <Button 
                      variant="contained"
                      onClick={() => navigate(`/room/${room.id}`)}
                    >
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}