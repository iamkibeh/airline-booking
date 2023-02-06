import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material'
import {
  Avatar,
  Button,
  Container,
  List,
  ListItem,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const FooterContainer = styled(Box)({
  //   backgroundColor: 'orange',
})
const FooterTop = styled(Box)({
  //   backgroundColor: 'gray',
  width: '300px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})
const FooterBottom = styled(Box)({
  //   backgroundColor: 'gray',
  paddingTop: '4rem',
  width: '80%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-around',
  paddingBottom: '1rem',
  borderBottom: '2px solid rgb(211,211,211)',
})

const TermsAndConditions = styled(Box)({
  //   backgroundColor: 'gray',
  width: '80%',
  padding: '1.5rem',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  //   paddingBottom: '1rem',
  //   borderBottom: '3px solid gray',
})
const FormContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  //   backgroundColor: 'green',
  gap: '16px',
  justifyContent: 'center',
})
const Footer = () => {
  return (
    <>
      <FooterContainer pt={5}>
        <FooterTop>
          <Typography
            variant='h4'
            textAlign={'center'}
            component='h2'
            fontWeight={550}
          >
            Get better work
          </Typography>
          <Typography textAlign={'center'}>
            See why millions of people across 195 countries use Dash.
          </Typography>
        </FooterTop>
        <FormContainer mt={2} className='form-container'>
          <TextField
            id='outlined-basic'
            label='Email'
            variant='outlined'
            placeholder='johndoe@gmail.com'
          />
          <Button
            variant='contained'
            bgcolor='primary'
            sx={{ fontSize: '12px' }}
          >
            Try for free
          </Button>
        </FormContainer>
        <FooterBottom>
          <Stack mt={2} width={'40%'}>
            <Typography variant='h6' fontWeight={550}>
              MRstudio
            </Typography>
            <Typography variant='body2' color={'text.secondary'} width={'50%'}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              molestiae vel iste.
            </Typography>
            <Stack direction={'row'} spacing={2} mt={4}>
              <Avatar>
                <Facebook />
              </Avatar>
              <Avatar>
                <Twitter />
              </Avatar>
              <Avatar>
                <Instagram />
              </Avatar>
              <Avatar>
                <Pinterest />
              </Avatar>
            </Stack>
          </Stack>
          <Stack>
            <List aria-labelledby='footer-list'>
              <ListItem sx={{ mb: 1 }}>
                <Typography fontWeight={900}>Links</Typography>
              </ListItem>
              <ListItem>Home</ListItem>
              <ListItem>Pricing</ListItem>
              <ListItem>Download</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Service</ListItem>
            </List>
          </Stack>
          <Stack>
            <List aria-labelledby='footer-list'>
              <ListItem fontWeight={900} sx={{ mb: 1 }}>
                <Typography fontWeight={900}>Support</Typography>
              </ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>How it works</ListItem>
              <ListItem>Features</ListItem>
              <ListItem>Contact</ListItem>
              <ListItem>Reporting</ListItem>
            </List>
          </Stack>
          <Stack>
            <List aria-labelledby='footer-list'>
              <ListItem fontWeight={900} sx={{ mb: 1 }}>
                <Typography fontWeight={900}>Contact Us</Typography>
              </ListItem>
              <ListItem>+254 712222222</ListItem>
              <ListItem>kibetimmanuel0@gmail.com</ListItem>
              <ListItem>Nairobi, Kenya</ListItem>
            </List>
          </Stack>
        </FooterBottom>

        <TermsAndConditions>
          <Typography>Copyright &#169; & Designed by @iamKibeh</Typography>
          <Typography>
            Terms of use <span> &emsp;</span>| <span>&emsp;</span>Privacy policy
          </Typography>
        </TermsAndConditions>
      </FooterContainer>
    </>
  )
}

export default Footer
