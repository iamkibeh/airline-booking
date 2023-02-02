import { Avatar, Box, IconButton, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { green } from '@mui/material/colors'
import React from 'react'
import '../../styles/herosection.css'
import { Stack } from '@mui/system'
import Facilities from './Facilities'

const HeroSection = () => {
  return (
    <>
      <Box
        className='herosection-main-container'
        component='div'
        sx={{ position: 'relative' }}
      >
        <div className='hero-sec'>
          <Stack width='50%'>
            <h1>Enjoy Your Dream Vacation</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
              perferendis perferend perferendisis .
            </p>
            <Stack
              spacing={1}
              direction='row'
              sx={{ alignItems: 'center' }}
              mt={3}
            >
              <Avatar color='text.secondary' sx={{ bgcolor: green[500] }}>
                <LocationOnIcon />
              </Avatar>
              <Typography sx={{ color: green[900] }}>
                Warwick Hotels & resort
              </Typography>
            </Stack>
          </Stack>
        </div>

        {/* <div className='facilities-container-parent'> */}
        <Facilities />
        {/* </div> */}
      </Box>
    </>
  )
}

export default HeroSection
