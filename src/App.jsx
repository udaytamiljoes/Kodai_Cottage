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
import { IconPhone } from '@tabler/icons-react';
import Ani from "../public/images/ani.gif"
import  Card  from "./components/Card"
import  Lamp  from "./components/Lamp"

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
// const SlideTransition = React.forwardRef((props, ref) => (
//   <Slide direction="up" ref={ref} {...props} />
// ));

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


        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            '& .MuiDialog-paper': {
              borderRadius: 3,
              // padding: 3,
              overflow: 'hidden',
              maxWidth: 500,
              width: '100%',
              backgroundColor: '#f5f5f5',
              position: 'relative'
            },
          }}
        >
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8, color: '#fff' }}
            onClick={() => setOpen(false)}
            size="small"
          >
            <X size={20} color='white' />
          </IconButton>


          <Box
            sx={{
              width: '100%',
              height: 200,
              backgroundImage: 'url("https://images.pexels.com/photos/6874905/pexels-photo-6874905.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // borderRadius: 2,
              boxShadow: 2,
              mb: 2,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "38.2%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: 1,
              }
            }}
          >
            <DialogTitle sx={{ textAlign: 'center', position: 'absolute', top: 45, zIndex: 2, color: '#fff' }}>
              Get the best offers on Kodaikanal
            </DialogTitle>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: -1, mb: -2 }}>
            <img src={Ani} alt="Nature Booking" style={{ width: '100%', maxWidth: '100px', borderRadius: '12px' }} />
          </Box>




          <DialogContent sx={{ position: 'relative' }}>
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
                <Typography display={'flex'} alignItems={'center'} justifyContent="center" variant="h6" gutterBottom>
                  <IconPhone size={20} />
                  <a
                    href="tel:+916374360962"
                    style={{
                      textDecoration: 'none',
                      fontSize: 15,
                      fontWeight: '500',
                      marginLeft: '8px',
                      color: '#24292E',
                    }}
                  >

                    +91 6374360962
                  </a>
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Box
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 2 }}
              >
                <Typography variant="h6">
                  <a
                    href="https://wa.me/6374360962"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#075E54',
                    }}
                  >
                    <FaWhatsapp size={25} style={{ marginRight: '8px' }} />
                    <span style={{ fontSize: 13 }}>Chat with us on WhatsApp</span>
                  </a>
                </Typography>
              </Box>
            </motion.div>
          </DialogContent>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <DialogActions>
              <Button
                size="small"
                variant="contained"
                onClick={() => setOpen(false)}
                sx={{
                  background: 'linear-gradient(45deg, #065af3 30%, #53b2fe 90%)',
                  color: 'white',
                  px: 2.5,
                  py: .5,
                  fontWeight: 'bold',
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



        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <RoomList />
              <Card />
              <Lamp/>

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
