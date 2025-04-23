import React, { useRef } from "react";
import Hotel from "./Hotel";
import { Breadcrumb } from "antd";
import { IconLocation, IconSearch } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { Accordion, AccordionItem } from "@heroui/react";


const hotelData = [
  {
    name: "white beem villa",
    location: "kookal › Kodaikanal",
    image: "https://images.unsplash.com/photo-1672271878037-648fa7497c82?w=500",
    rating: 4.5,
    reviews: 1275,
    originalPrice: 7020,
    discountedPrice: 5066,
    taxes: 691,
    features: ["Free Cancellation", "Book with ₹0"],
  },
  {
    name: "valley view villa",
    location: "poondi › Kodaikanal",
    image: "https://images.unsplash.com/photo-1745169921502-44320b66e098?w=500",
    rating: 4.5,
    reviews: 1275,
    originalPrice: 7020,
    discountedPrice: 5066,
    taxes: 691,
    features: ["Free Cancellation", "Book with ₹0"],
  },
  {
    name: "sky high cottage",
    location: "kookal › Kodaikanal",
    image: "https://images.unsplash.com/photo-1674128869659-182b627e8f8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGtvZGFpa2FuYWx8ZW58MHx8MHx8fDA%3D",
    rating: 4.5,
    reviews: 1275,
    originalPrice: 7020,
    discountedPrice: 5066,
    taxes: 691,
    features: ["Free Cancellation", "Book with ₹0"],
  },
];

const AnimatedHotel = ({ hotel, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-6"
    >
      <Hotel hotel={hotel} />
    </motion.div>
  );
};

export default function HotelList() {
  const dee = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Typography fontSize={32} variant="h4" align="center" gutterBottom sx={{ mb: 2 }}>
          Our Cottages
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Your dream stay in Kodaikanal starts here
        </Typography>
      </motion.div>

      <h1 className="text-lg sm:text-xl mb-4">Find Your Perfect Stay at Kodaikanal</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
        <Breadcrumb
          separator=">"
          items={[
            {
              href: '',
              title: (
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <IconLocation size={16} />
                  <span>Kodaikanal</span>
                </div>
              ),
            },
            { title: 'Cottages' },
          ]}
        />

        <div className="flex flex-col sm:flex-row gap-2">
          <TextField
            size="small"
            variant="outlined"
            margin="dense"
            label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch size={18} color="rgba(0, 0, 0, 0.5)" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                background: "#F8F9FA",
                "&:hover": { background: "#FFFFFF" },
              },
              "& .MuiInputBase-input": { fontSize: "13px", padding: "10px 13px" },
            }}
          />

          <TextField
            size="small"
            variant="outlined"
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography variant="body2">Sort by:</Typography>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                background: "#F8F9FA",
                "&:hover": { background: "#FFFFFF" },
              },
              "& .MuiInputBase-input": { fontSize: "13px", padding: "10px 13px" },
            }}
          />
        </div>
      </div>

      {hotelData.map((hotel, index) => (
        <AnimatedHotel key={index} hotel={hotel} index={index} />
      ))}
      <Accordion variant="light">
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          {dee}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {dee}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {dee}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
