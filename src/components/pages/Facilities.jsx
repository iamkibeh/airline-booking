import { Avatar, Button, IconButton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {
  AcUnit,
  DinnerDining,
  Wifi,
  Pool,
  CheckCircle,
  Edit,
  Search,
} from '@mui/icons-material'
import { orange, green } from '@mui/material/colors'
const Facilities = () => {
  return (
    <>
      <Box
        sx={{
          width: '70%',
          margin: 'auto',
          bgcolor: '#fff',
          borderRadius: 2,
          my: 1,
          p: 2,
          display: 'flex',
        }}
        spacing={1}
        className='facilities-container'
      >
        <Box sx={{ width: '36%', p: 1 }} component='section'>
          <Stack className='facility-header' direction='row'>
            <Typography component='h2' fontWeight='fontWeightBold' flexGrow='1'>
              Facilities
            </Typography>
            <Typography
              size='small'
              fontWeight='fontWeightLight'
              paragraph
              sx={{ cursor: 'pointer', fontSize: 12, color: orange[900] }}
            >
              see more
            </Typography>
          </Stack>

          <div className='facility-body'>
            <Stack
              direction='row'
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Stack alignItems='center'>
                <Avatar variant='rounded' sx={{ mb: 1 }}>
                  <Pool sx={{ color: green[700] }} />
                </Avatar>
                <Typography paragraph fontSize='12px'>
                  Swimming
                </Typography>
              </Stack>
              <Stack alignItems='center'>
                <Avatar variant='rounded' sx={{ mb: 1 }}>
                  <Wifi sx={{ color: orange[700] }} />
                </Avatar>
                <Typography paragraph fontSize='12px'>
                  Wi-Fi
                </Typography>
              </Stack>
              <Stack alignItems='center'>
                <Avatar variant='rounded' sx={{ mb: 1 }}>
                  <AcUnit sx={{ color: green[700] }} />
                </Avatar>
                <Typography paragraph fontSize='12px'>
                  AC
                </Typography>
              </Stack>
              <Stack alignItems='center'>
                <Avatar variant='rounded' sx={{ mb: 1 }}>
                  <DinnerDining sx={{ color: orange[700] }} />
                </Avatar>
                <Typography paragraph fontSize='12px'>
                  Dinner
                </Typography>
              </Stack>
            </Stack>
          </div>
        </Box>
        <Box
          sx={{ p: 1, display: 'flex' }}
          component='section'
          flexGrow='1'
          ml={3}
        >
          <Stack width='40%'>
            <Typography
              variant='body1'
              component='h4'
              mb='1rem'
              fontWeight='fontWeightMedium'
            >
              Hotels For You
            </Typography>
            <Typography variant='body2' paragraph color='text.secondary'>
              5 Days 6 Nights
            </Typography>
            <Button variant='outlined' size='small' sx={{ width: '10rem' }}>
              <IconButton>
                <CheckCircle sx={{ color: green[900] }} />
              </IconButton>
              <p>USD $506.00</p>
            </Button>
          </Stack>
          <Stack
            flexGrow='1'
            justifyContent='space-between'
            // alignItems='center'
          >
            <Stack
              sx={{ display: 'flex' }}
              direction='row'
              component='section'
              justifyContent='space-between'
              mb={2}
              // bgcolor='grey'
            >
              <Typography variant='body1' color='text.secondary' flexGrow='1'>
                150 Results
              </Typography>
              <Edit color='text.secondary' sx={{ mr: '1rem' }} size='large' />
              <Search size='large' color='primary' />
            </Stack>
            <Stack
              component='section'
              direction='row'
              // spacing={2}
              // bgcolor='grey'
              justifyContent='space-between'
            >
              <Avatar
                alt='Remy Sharp'
                src='https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1600'
              />
              <Avatar
                alt='Travis Howard'
                src='https://images.pexels.com/photos/11481539/pexels-photo-11481539.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=1'
              />
              <Avatar
                alt='Cindy Baker'
                src='https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1600'
              />
              <Avatar
                alt='Remy Sharp'
                src='https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1600'
              />
              <Avatar
                alt='Travis Howard'
                src='https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1600'
              />
              <Avatar
                alt='Cindy Baker'
                src='https://images.pexels.com/photos/13004966/pexels-photo-13004966.jpeg?auto=compress&cs=tinysrgb&w=1600'
              />
            </Stack>
          </Stack>
          <Stack></Stack>
        </Box>
      </Box>
    </>
  )
}

export default Facilities
