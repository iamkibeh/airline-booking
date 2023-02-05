import { ExpandCircleDownRounded } from '@mui/icons-material'
import { Grid, IconButton, styled, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import HotelCard from '../reusables/HotelCard'

const ServicesContainer = styled(Box)({
  position: 'relative',
  paddingBottom: '5rem',
})
const OverlayContainer = styled(Box)({
  width: '80%',
  height: '200px',
  margin: 'auto',
  backgroundColor: 'rgba(0, 0,0, 0.2)',
  position: 'absolute',
  bottom: 0,
  left: '10%',
  borderRadius: '10px',
})
const Services = () => {
  return (
    <>
      <ServicesContainer>
        <OverlayContainer></OverlayContainer>
        <Box mt='10vh'>
          <Stack>
            <Typography variant='h2' align='center' mt={4} fontWeight>
              Entire city of choice
            </Typography>
          </Stack>
          <Grid
            container
            spacing={3}
            columnSpacing={4}
            mt={3}
            width='80%'
            sx={{
              margin: 'auto',
              justifyContent: 'center',
            }}
          >
            {hotels.map((hotel) => (
              <Grid item key={hotel.id}>
                <HotelCard hotel={hotel} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* <IconButton
          size='large'
          sx={{ position: 'absolute', bottom: 0, left: '50%' }}
        > */}
        <ExpandCircleDownRounded
          sx={{
            position: 'absolute',
            bottom: '-1.8rem',
            left: '50%',
            fontSize: '3.5rem',
          }}
        />
        {/* </IconButton> */}
      </ServicesContainer>
    </>
  )
}

export default Services

const hotels = [
  // {
  //   id: 1,
  //   name: 'MIRACLE RESORT',
  //   cost: '600.00',
  //   bookingId: '98374431',
  //   location: 'Turky, India',
  //   image:
  //     'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1600',
  // },
  {
    id: 2,
    name: 'Warwick Hotels & Resorts',
    cost: '400.00',
    bookingId: '9837409',
    location: 'Warwick Hotels',
    image:
      'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    name: 'ISO, How Hilton is going greeen',
    cost: '500.00',
    bookingId: '9837445',
    location: 'Nyali, Mombasa',
    image:
      'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 4,
    name: 'Diani Square Garden Resorts',
    cost: '450.00',
    bookingId: '9883611',
    location: 'Diani beach, Kilifi',
    image:
      'https://images.pexels.com/photos/4327635/pexels-photo-4327635.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
]
