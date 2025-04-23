import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Card,
  CardMedia,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  Paper,
  Rating,
  Divider,
  LinearProgress,
  useTheme
} from '@mui/material';
import { Check, Users, Square, Bed, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { rooms } from '../data/rooms';

export default function RoomDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const room = rooms.find(r => r.id === Number(id));

  if (!room) {
    return (
      <Container>
        <Typography variant="h5">Room not found</Typography>
        <Button onClick={() => navigate('/')}>Back to Rooms</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Button
        onClick={() => navigate('/')}
        variant="outlined"
        sx={{ mb: 4 }}
      >
        Back to Rooms
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardMedia
                component="img"
                height="500"
                image={room.image}
                alt={room.name}
                sx={{
                  objectFit: 'cover',
                  background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))'
                }}
              />
            </Card>

            {/* Nearby Attractions */}
            <Box sx={{ mt: 6 }}>
              <Typography variant="h4" gutterBottom>
                Nearby Attractions
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Explore these amazing places within 2km of your stay
              </Typography>

              <Grid container spacing={3}>
                {room.nearbyAttractions.map((attraction, index) => (
                  <Grid item xs={12} sm={6} md={4} key={attraction.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card sx={{ height: '100%' }}>
                        <CardMedia
                          component="img"
                          height="160"
                          image={attraction.image}
                          alt={attraction.name}
                        />
                        <Box sx={{ p: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            {attraction.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <MapPin size={16} color={theme.palette.primary.main} />
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                              {attraction.distance} km away
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Rating
                              value={attraction.rating}
                              readOnly
                              size="small"
                              icon={<Star size={16} />}
                            />
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                              {attraction.rating}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {attraction.description}
                          </Typography>
                        </Box>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Map Section */}
            <Box sx={{ mt: 6 }}>
              <Typography variant="h4" gutterBottom>
                Location
              </Typography>
              <Card>
                <iframe
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAGATg493UX7dU427hURQlooLc5UA4Mcdc&center=${room.location.lat},${room.location.lng}&zoom=15`}
                />

              </Card>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{
              p: 3,
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
            }}>
              <Typography variant="h4" component="h1" gutterBottom>
                {room.name}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating
                  value={room.rating}
                  readOnly
                  precision={0.1}
                  icon={<Star size={20} />}
                />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  {room.rating} ({room.reviews} reviews)
                </Typography>
              </Box>

              <Typography variant="h5" color="primary" gutterBottom>
                ₹{room.price} / night
              </Typography>

              <Typography variant="body1" paragraph>
                {room.description}
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center">
                      <Users size={20} />
                      <Typography variant="body1" sx={{ ml: 1 }}>
                        Max: {room.maxOccupancy} guests
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center">
                      <Square size={20} />
                      <Typography variant="body1" sx={{ ml: 1 }}>
                        {room.size} m²
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                      <Bed size={20} />
                      <Typography variant="body1" sx={{ ml: 1 }}>
                        {room.bedType} Bed
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Amenities
              </Typography>
              <Grid container spacing={2}>
                {room.amenities.map((amenity, index) => (
                  <Grid item xs={6} key={index}>
                    <Box display="flex" alignItems="center">
                      <Check size={20} color={theme.palette.primary.main} />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        {amenity}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  mt: 4,
                  background: 'linear-gradient(45deg, #E31E24 30%, #FF4B2B 90%)',
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                }}
              >
                Book Now
              </Button>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}