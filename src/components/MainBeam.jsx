import React from "react";
import { BackgroundBeamsWithCollision } from "./beams";
import { Box, Card, Grid } from "@mui/material";
import Ani from "../../public/images/fns.png"

export function MainBeam() {
  return (

    <>
      {/* kkkkkkkk */}
      <BackgroundBeamsWithCollision>
        {/* <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
    <Card>
        

    </Card>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>

            </Grid> */}

        <h2
          className="text-[18px] relative z-20 md:text-3xl lg:text-5xl font-bold text-center text-black dark:text-white tracking-tight">
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: -1, mb: -2 }}>
            <img src={Ani} alt="Nature Booking" style={{ width: '100%', maxWidth: '200px', borderRadius: '12px' }} />
          </Box>
          <div
          // className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]"
          >
            <div
            // className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]"
            >
              <span style={{ color: "#bdbdbd" }} className="">Explore kodai.</span>
            </div>
            <div
              className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-white-500 via-white-500 to-black-500 py-4">
              {/* <span className="">Explore kodai.</span> */}
            </div>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>
    </>

  );
}
