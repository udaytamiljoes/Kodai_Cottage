import React from 'react';
import { Box, Container, Typography, Button, TextField, InputAdornment, Menu, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';
import { ChevronsDown, Search as SearchIcon } from 'lucide-react';
import bg from "../../public/images/dialogBg.jpg"
import Ani from "../../public/images/nature.gif"
import Next from "./Next";
import { MainBeam } from "./MainBeam"
import Img from "./Img"
export default function Hero() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          height: '80vh',
          position: 'relative',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 20, 51, 0.64)',
          }
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            color: 'white'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2.2rem', md: '2.75rem' },
                fontFamily: 'poppins'
              }}
            >
              Welcome to Kodai Heaven
            </Typography>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                maxWidth: 600,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                display: 'inline',
              }}
            >
              <span>
                Experience luxury cottages nestled in the misty hills of Kodaikanal
                <Next
                  // ref={nextRef}
                  texts={[
                    'misty mornings',
                    'forest breeze',
                    'tranquil lakes',
                    'sunset views',
                    'poondi',
                  ]}
                  // auto={false}
                  // loop={false}
                  style={{
                    background: 'linear-gradient(to right, #FF6D38, #D33917)',
                    fontSize: '15px',
                  }}
                  mainClassName="px-4 mt-2 sm:px-2 md:px-4 text-black overflow-hidden py-1.5 sm:py-1.5 md:py-1.5 justify-center rounded-lg w-max font-size-10"
                  staggerFrom="last"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </span>
            </Typography>
          </motion.div>


        </Container>
        {/* <Box
      sx={{
         background: 'linear-gradient(180deg, #061625 0%, #153e6b 100%)',
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "-23px",
        display: "flex",
        alignItems: "center",
        gap: 1, // Spacing between input & button
        bgcolor: "white",
        p: 1,
        borderRadius: "50px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        width:'100%'
      }}
    > */}
        {/* Search Input Field */}
        {/* <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{
          bgcolor: "white",
          borderRadius: "50px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon size={20} color="#888" />
            </InputAdornment>
          ),
        }}
      /> */}


        <Button
          endIcon={<SearchIcon size={16} color="white" />}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            background: "linear-gradient(93deg, #53b2fe, #065af3)",
            color: "white",
            px: 12,
            py: 1.2,
            fontWeight: "bold",
            borderRadius: "50px",
            // textTransform: "uppercase",
            whiteSpace: "nowrap",
            "&:hover": {
              background: "linear-gradient(93deg, #065af3, #53b2fe)",
            },
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "-21px",
            display: "flex",
            alignItems: "center",
            gap: .4,
            bgcolor: "white",
            // px: 3,
            letterSpacing: '1px',
            // borderRadius: "50px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          Search place
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Poondi</MenuItem>
          <MenuItem onClick={handleClose}>Poombarai</MenuItem>
          <MenuItem onClick={handleClose}>Kookal</MenuItem>
          <MenuItem onClick={handleClose}>Mannavanur</MenuItem>
          <MenuItem onClick={handleClose}>Kilavarai</MenuItem>
        </Menu>
      </Box>



      <Box
        sx={{
          marginTop: '35px',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          position: "relative",
          width: "100%",
          height: "60px",
          // background: "linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(87, 35, 0, 0.88) 100%)",
          color: "black",
          mb:3 
        }}
      >

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronsDown color="#363636" size={24} />
        </motion.div>


        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Typography sx={{ fontWeight: "400", fontsize: '12px',}}>
            Explore More
          </Typography>
        </motion.div>



        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronsDown color="#363636" size={24} />
        </motion.div>


      </Box>
      

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <MainBeam />
      </motion.div>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, }}>
        <img src={Ani} alt="Nature Booking" style={{ width: '100%', maxWidth: '200px', borderRadius: '12px' }} />
      </Box>
      {/* <Img /> */}

    </>
  );
}