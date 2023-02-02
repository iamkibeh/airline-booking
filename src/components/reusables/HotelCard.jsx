import { Edit, HolidayVillage } from '@mui/icons-material'
import {
  Card,
  CardContent,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material'
import { green } from '@mui/material/colors'
import { Stack } from '@mui/system'
import React from 'react'

const HotelCard = ({ hotel }) => {
  return (
    <>
      <Card sx={{ width: 320 }}>
        <ImageListItem style={{ height: '200px' }}>
          <img src={hotel.image} alt={hotel.name} loading='lazy' />
          <ImageListItemBar
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            position='top'
            actionIcon={
              <IconButton
                sx={{
                  color: green[700],
                }}
                aria-label='hotel'
              >
                <Edit />
              </IconButton>
            }
            title={hotel.name}
            actionPosition='right'
          />
        </ImageListItem>
        <CardContent
          sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
        >
          <Stack component='section' flexGrow={1}>
            <Typography gutterBottom variant='body' component='h4'>
              {`$${hotel.cost}`}
            </Typography>
            <Typography
              gutterBottom
              variant='body2'
              component='h6'
              fontWeight='fontWeightBold'
            >
              Booking ID: {hotel.bookingId}
            </Typography>
            <Typography
              gutterBottom
              variant='body2'
              component='p'
              fontWeight='fontWeightLight'
            >
              {hotel.location}
            </Typography>
          </Stack>
          <Stack component='section'>
            <IconButton sx={{ p: 1, border: 1 }}>
              <HolidayVillage />
            </IconButton>
          </Stack>
          {/* <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </Card>
    </>
  )
}

export default HotelCard
