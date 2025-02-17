import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, IconButton, Slide } from '@mui/material';
import { motion } from "framer-motion";
import RoomList from './components/RoomList';
import RoomDetail from './components/RoomDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { FaWhatsapp } from 'react-icons/fa';
import { X } from 'lucide-react';

// Theme setup
const theme = createTheme({
  palette: {
    primary: { main: '#061625' },
    secondary: { main: '#065af3' },
    background: { default: '#ffffff', paper: '#ffffff' },
  },
  typography: {
    fontFamily: '"Poppins", "Arial", sans-serif',
    button: { fontFamily: '"Poppins", "Arial", sans-serif', textTransform: 'none' },
  },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: 'none', borderRadius: 4, fontWeight: 500 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 8 } } },
  },
});

// Slide Transition Effect for Dialog
const SlideTransition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        
        {/* Popup Dialog with Slide Animation */}
        <Dialog 
          open={open} 
          onClose={() => setOpen(false)}
          
          sx={{
            '& .MuiDialog-paper': {
              borderRadius: 2,
              padding: 3,
              overflow: 'hidden',
            },
          }}
        >
          {/* Close Button */}
          <IconButton sx={{ position: 'absolute', top: '5px', right: '5px' }} onClick={() => setOpen(false)} size="small">
            <X size={20} />
          </IconButton>

          {/* Title with Animation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <DialogTitle sx={{ color: 'primary.main', textAlign: 'center' }}>
              Get the Best Offers on Kodaikanal
            </DialogTitle>
          </motion.div>

          {/* Content with Smooth Fade and Slide Animation */}
          <DialogContent>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="body1" paragraph textAlign="center">
                Contact us for exclusive deals and discounts.
              </Typography>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box sx={{ textAlign: 'center', mt: 2 }}>
               <Typography variant="h6" gutterBottom>

  <a 
    href="tel:+919876543210" 
    style={{ textDecoration: 'none', color: '#065af3', fontWeight: 'bold', marginLeft: '8px' }}
  >
    +91 98765 43210
  </a>
</Typography>

              </Box>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 2 }}>
                <Typography variant="h6">
                  <a 
                    href="https://wa.me/8763563763" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      textDecoration: 'none', 
                      display: 'flex', 
                      alignItems: 'center',
                      color: '#075E54'
                    }}
                  >
                    <FaWhatsapp size={30} style={{ marginRight: '8px' }} />
                    <span>Chat with us on WhatsApp</span>
                  </a>
                </Typography>
              </Box>
            </motion.div>
          </DialogContent>

          {/* Close Button with Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <DialogActions>
              <Button 
                variant="contained" 
                onClick={() => setOpen(false)}
                sx={{
                  background: 'linear-gradient(45deg, #065af3 30%, #53b2fe 90%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #053f9d 30%, #3d8ac7 90%)',
                  },
                }}
              >
                Close
              </Button>
            </DialogActions>
          </motion.div>

        </Dialog>

        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <RoomList />
            </>
          } />
          <Route path="/room/:id" element={<RoomDetail />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
