
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./Lapms";
import { Box, Card, Grid } from "@mui/material";
import { Rate } from 'antd';
import Ani1 from "../../public/images/ani2.gif"
import Ani2 from "../../public/images/ani3.gif"

export default function LampDemo() {
    return (
        <LampContainer>
            {/* <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Build lamps <br /> the right way
      </motion.h1> */}

            <Grid container spacing={2} sx={{ mb: -25,mt:-20 }}>
                <Grid item md={5} xs={12}>
                    <Card sx={{ maxWidth: "100%", borderRadius: 10, px: 3, py: 2, textAlign: "center", mx: 3, mt: 1 }}>
                        {/* <Rate style={{ fontSize: 15 }} disabled defaultValue={4.5} /> */}
                        <Box sx={{ textAlign: "center", display: "flex", justifyContent: "center", mt: -1, mb: -2 }}>
                            <motion.img
                                initial={{ opacity: 0.5, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                src={Ani2}
                                alt="Nature Booking"
                                style={{ width: "100%", maxWidth: "90px", borderRadius: "12px" }}
                            />
                        </Box>

                        <motion.h4
                            initial={{ opacity: 0.5, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className=" bg-gradient-to-br from-slate-300 to-slate-500 pt-4 pb-1 bg-clip-text  text-2xl font-medium tracking-tight text-[15px]"
                        >
                            Travellers love us
                        </motion.h4>
                        <motion.h4
                            initial={{ opacity: 0.5, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="bg-gradient-to-br from-slate-300 to-slate-500 pb-2 bg-clip-text  font-medium text-[#E95328] text-[14px]"
                        >
                            1000+ rating on our site
                        </motion.h4>
                        {/* <motion.h6

                            initial={{ opacity: 0.5, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium text-transparent"
                            >
                           
                        </motion.h6> */}
                    </Card>
                </Grid>
                <Grid item md={5} xs={12}>
                    <Card sx={{ maxWidth: "100%", borderRadius: 10, px: 3, py: 2, textAlign: "center", mx: 3, mt: 1 }}>
                        {/* <Rate style={{ fontSize: 15 }} disabled defaultValue={4.5} /> */}
                        <Box sx={{ textAlign: "center", display: "flex", justifyContent: "center",my:1}}>
                            <motion.img
                                initial={{ opacity: 0.5, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                src={Ani1}
                                alt="Nature Booking"
                                style={{ width: "100%", maxWidth: "90px", borderRadius: "12px" }}
                            />
                        </Box>

                        <motion.h4
                            initial={{ opacity: 0.5, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className=" bg-gradient-to-br from-slate-300 to-slate-500 pt-4 pb-1 bg-clip-text  text-2xl font-medium tracking-tight text-[15px]"
                        >
                            Our rooms
                        </motion.h4>
                        <motion.h4
                            initial={{ opacity: 0.5, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="bg-gradient-to-br from-slate-300 to-slate-500 pb-2 bg-clip-text  font-medium text-[#E95328] text-[14px]"
                        >
                          100+ Cottages on our site
                        </motion.h4>
                        {/* <motion.h6

                            initial={{ opacity: 0.5, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium text-transparent"
                            >
                           
                        </motion.h6> */}
                    </Card>
                </Grid>

                
            </Grid>


        </LampContainer>
    );
}
