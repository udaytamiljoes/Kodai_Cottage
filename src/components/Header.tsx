import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, Box, useTheme, useMediaQuery, Container } from '@mui/material';
import { Menu, X, Phone, Mail, Facebook, Instagram, Home, Hotel, Compass, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../../public/images/kodai.png"
import { IconMenuDeep } from '@tabler/icons-react';

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
      transition: { delay: i * 0.009, duration: 1 },
    }),
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const menu = [
    { label: 'Home', path: '/', icon: <Home size={17} /> },
    { label: 'Cottages', path: '/cottages', icon: <Hotel size={17} /> },
    { label: 'Explore', path: '/explore', icon: <Compass size={17} /> },
    { label: 'Contact', path: '/contact', icon: <PhoneCall size={17} /> },
  ];
  const menuItems = ['Home', 'Cottages', 'Explore', 'Contact'];
  const [elevated, setElevated] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setElevated(true);
    } else {
      setElevated(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <Box sx={{ background: 'transparent', color: 'white', py: 1 }}>
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
      </Box> */}

      <AppBar position="sticky" sx={{
        transition: "all 1s ease",
        bgcolor: elevated ? "#1B1B1B" : "transparent",
        boxShadow: elevated ? 3 : "none",
        mt: -4,
      }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1, display: 'flex', justifyContent: 'space-between' }}>



            {/* <Box sx={{ flexGrow: 1 }} /> */}

            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                {menu.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      startIcon={item?.icon}
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '13px',
                        '&:hover': {
                          color: 'white',
                          backgroundColor: 'transparent'
                        }
                      }}
                    // onClick={() => navigate(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
                    >
                      {item?.label}
                    </Button>
                  </motion.div>
                ))}
                <Box sx={{ display: 'flex', gap: 2, ml: 2, alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography variant="caption" color="" sx={{ fontWeight: 300 }}>
                      Call Us
                    </Typography>
                    <Typography variant="body2" color="" sx={{ fontWeight: 600 }}>
                      +91 98765 43210
                    </Typography>
                  </Box>
                  <IconButton sx={{ color: 'white' }}>
                    <Phone size={20} />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <IconButton
                edge="end"
                sx={{ color: "white" }}
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <IconMenuDeep />
              </IconButton>
            )}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // justifyContent: 'center',
                  // gap: 1.2,
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/')}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: '110px',
                    objectFit: 'contain',
                  }}
                />


              </Box>
            </motion.div>
            {
              !isMobile &&
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: 2, }}>
                  <IconButton color="inherit" size="small">
                    <Facebook size={16} />
                  </IconButton>
                  <IconButton color="inherit" size="small">
                    <Instagram size={16} />
                  </IconButton>
                </Box>
                <Typography sx={{ border: '1px solid #EB5529', px: 2, py: 1, ml: 2, borderRadius: 2 }} variant="body2" component="span">
                  {text.split("").map((char, index) => (
                    <motion.span key={index} variants={textVariants} initial="hidden" animate="visible" custom={index}>
                      {char}
                    </motion.span>
                  ))}
                </Typography>
              </Box>
            }


          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: "100%",
            bgcolor: '#1B1B1B',
            // backgroundOrigin: 'border-box'
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle} color="primary">
            <X />
          </IconButton>
        </Box>
        <List>
          {menu.map((item, index) => (

            <ListItem key={index}
            //  onClick={() => {
            // navigate(item === 'Home' ? '/' : `/${item.toLowerCase()}`);
            //   handleDrawerToggle();
            // }}
            >
              <Button
                startIcon={item?.icon}
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  color: 'white',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {item?.label}
              </Button>
            </ListItem>
          ))}
          <ListItem>
            <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
              <Typography variant="caption" color="white" sx={{ fontWeight: 500 }}>
                Call Us
              </Typography>
              <Typography variant="body2" color="secondary.main" sx={{ fontWeight: 600 }}>
                +91 98765 43210
              </Typography>
            </Box>
          </ListItem>
          <ListItem>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <Box sx={{ display: 'flex', gap: 2, color: 'white' }}>
                <IconButton color="inherit" size="small">
                  <Facebook size={16} />
                </IconButton>
                <IconButton color="inherit" size="small">
                  <Instagram size={16} />
                </IconButton>
              </Box>
              <Typography sx={{ border: '1px solid #EB5529', px: 2, py: 1, ml: 2, borderRadius: 2, color: 'white' }} variant="body2" component="span">
                {text.split("").map((char, index) => (
                  <motion.span key={index} variants={textVariants} initial="hidden" animate="visible" custom={index}>
                    {char}
                  </motion.span>
                ))}
              </Typography>
            </Box>
          </ListItem>

        </List>
      </Drawer>
    </>
  );
}