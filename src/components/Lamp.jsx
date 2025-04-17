
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./Lapms";
import { Card, Grid } from "@mui/material";
import { Rate } from 'antd';

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

            <Grid container spacing={2}>
                <Grid item md={5} xs={12}>
                    <Card sx={{ maxWidth: "100%", borderRadius: 10, px: 3, py: 2 }}>
                        <Rate style={{ fontSize: 15 }} disabled defaultValue={4.5} />
                        <motion.h4
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            // className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text  text-2xl font-medium tracking-tight text-transparent text-[15px]"
                            >
                            Travellers love us
                        </motion.h4>
                        {/* <motion.h6

                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-1xl font-medium tracking-tight text-transparent md:text-7xl">
                            1000+ rating on our site
                        </motion.h6> */}
                    </Card>
                </Grid>
                {/* <Grid item md={5} xs={12}>
                    <Card sx={{ maxWidth: "100%", borderRadius: 10, px: 3, py: 2 }}>
                        <Rate disabled defaultValue={4.5} />
                        <motion.h4
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                            Travellers love us
                        </motion.h4>
                        <motion.h6

                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                            1000+ rating on our site
                        </motion.h6>
                    </Card>
                </Grid> */}
            </Grid>


        </LampContainer>
    );
}
