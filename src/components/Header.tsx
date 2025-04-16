import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, Box, useTheme, useMediaQuery, Container } from '@mui/material';
import { Menu, X, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../../public/images/logo4.jpg"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const text = "Booking your Cottage";

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.09, duration: 0.3 },
    }),
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ['Home', 'Cottages', 'About', 'Contact'];

  return (
    <>
      <Box sx={{ background: 'linear-gradient(180deg, #061625 0%, #153e6b 100%)', color: 'white', py: 1 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" size="small">
                <Facebook size={16} />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Instagram size={16} />
              </IconButton>
            </Box>
            <Typography variant="body2" component="span">
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={textVariants} initial="hidden" animate="visible" custom={index}>
                  {char}
                </motion.span>
              ))}
            </Typography>
          </Box>
        </Container>

        <Box>

        </Box>
      </Box>

      <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: 1 }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/')}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: '90px',
                    objectFit: 'contain',
                  }}
                />


              </Box>
            </motion.div>


            <Box sx={{ flexGrow: 1 }} />

            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      sx={{
                        color: 'secondary.main',
                        fontWeight: 500,
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'transparent'
                        }
                      }}
                      onClick={() => navigate(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
                    >
                      {item}
                    </Button>
                  </motion.div>
                ))}
                <Box sx={{ display: 'flex', gap: 2, ml: 2, alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography variant="caption" color="primary.main" sx={{ fontWeight: 500 }}>
                      Call Us
                    </Typography>
                    <Typography variant="body2" color="secondary.main" sx={{ fontWeight: 600 }}>
                      +91 98765 43210
                    </Typography>
                  </Box>
                  <IconButton color="primary">
                    <Phone size={20} />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <IconButton
                edge="end"
                color="primary"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: 'background.paper'
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle} color="primary">
            <X />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item} onClick={() => {
              navigate(item === 'Home' ? '/' : `/${item.toLowerCase()}`);
              handleDrawerToggle();
            }}>
              <Button
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  color: 'secondary.main',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {item}
              </Button>
            </ListItem>
          ))}
          <ListItem>
            <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
              <Typography variant="caption" color="primary.main" sx={{ fontWeight: 500 }}>
                Call Us
              </Typography>
              <Typography variant="body2" color="secondary.main" sx={{ fontWeight: 600 }}>
                +91 98765 43210
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}