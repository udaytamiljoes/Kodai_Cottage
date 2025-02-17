import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography sx={{color:'#1078af'}} variant="h6" gutterBottom>
                Kodai Haven Cottages
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Experience the serenity of Kodaikanal with our luxurious cottages nestled in the heart of nature.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton color="inherit" size="small">
                  <Facebook size={20} />
                </IconButton>
                <IconButton color="inherit" size="small">
                  <Instagram size={20} />
                </IconButton>
                <IconButton color="inherit" size="small">
                  <Twitter size={20} />
                </IconButton>
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
                  123 Valley Road, Kodaikanal, Tamil Nadu
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone size={16} style={{ marginRight: 8 }} />
                <Typography variant="body2">
                  +91 98765 43210
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

          <Grid item xs={12} sm={4}>
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
          </Grid>
        </Grid>

        <Box sx={{ borderTop: 1, borderColor: 'rgba(255,255,255,0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Kodai Haven Cottages. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}