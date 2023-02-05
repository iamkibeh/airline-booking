import { BeachAccess, Deck, Pool, Tsunami } from '@mui/icons-material'
import { Avatar, Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'

const FeaturesContainer = styled(Box)({
  //   backgroundColor: 'orange',
  width: '80%',
  margin: '0 auto',
  display: 'flex',
})

const StyledIconGroup = styled(Stack)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '1rem',
  marginBottom: '.5rem',
})
const Features = () => {
  return (
    <>
      <Box p={4}>
        <FeaturesContainer>
          <Stack>
            <Typography variant='h4' fontWeight={700}>
              Resort Surprises
            </Typography>
            <Typography variant='body2' gutterBottom>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
              quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas, ex.
            </Typography>
            <StyledIconGroup mt={2}>
              <Avatar color='secondary'>
                <Pool />
              </Avatar>
              <Typography>Infinity Pool</Typography>
            </StyledIconGroup>

            <StyledIconGroup>
              <Avatar>
                <Deck />
              </Avatar>
              <Typography>The Beach</Typography>
            </StyledIconGroup>
            <StyledIconGroup>
              <Avatar>
                <BeachAccess />
              </Avatar>
              <Typography>Beach Surprise</Typography>
            </StyledIconGroup>
            <StyledIconGroup>
              <Avatar>
                <Tsunami />
              </Avatar>
              <Typography>Beach Activities</Typography>
            </StyledIconGroup>
          </Stack>
          <Stack p={2} flexGrow={1}>
            <img
              src='https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='beach'
              height={350}
            />
          </Stack>
        </FeaturesContainer>
      </Box>
    </>
  )
}

export default Features
