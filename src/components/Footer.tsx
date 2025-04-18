import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from "../../public/images/favi.png"

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* <Typography sx={{color:'#1078af'}} variant="h6" gutterBottom>
                Kodai Haven Cottages
              </Typography> */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                  cursor: 'pointer',
                  mb: 3
                }}
              // onClick={() => navigate('/')}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: '70px',
                    objectFit: 'contain',
                  }}
                />


              </Box>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Experience the serenity of Kodaikanal with our luxurious cottages nestled in the heart of nature.

              </motion.div>
              <Typography variant="body2" sx={{ mb: 2 }}>
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton color="inherit" size="small">
                  <Facebook size={20} />
                </IconButton>
                <IconButton
                  color="inherit"
                  size="small"
                  component="a"
                  href="https://www.instagram.com/w_h_i_t_e_bee_200_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} style={{ color: 'white' }} />
                </IconButton>
                {/* <IconButton color="inherit" size="small">
                  <Twitter size={20} />
                </IconButton> */}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <MapPin size={16} style={{ marginRight: 8 }} />
                <Typography variant="body2">
                  220 poondi, Kodaikanal, Tamil Nadu
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone size={16} style={{ marginRight: 8 }} />
                <Typography variant="body2">
                  +91 63743 60962
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Mail size={16} style={{ marginRight: 8 }} />
                <Typography variant="body2">
                  info@kodaihaven.com
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              {['About Us', 'Our Cottages', 'Amenities', 'Book Now'].map((text, index) => (
                <Link
                  key={text}
                  href="#"
                  color="inherit"
                  sx={{
                    display: 'block',
                    mb: 1,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  {text}
                </Link>
              ))}
            </motion.div>
          </Grid> */}
        </Grid>

        <Box sx={{ borderTop: 1, borderColor: 'rgba(255,255,255,0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="body2">
            © {new Date().getFullYear()} Kodai Haven Cottages. All rights reserved.
          </Typography>
            </motion.div>
          
        </Box>
      </Container>
    </Box>
  );
}