import { ReactElement } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';

import { NextPageWithLayout } from './_app';

import { signIn, signOut, useSession } from "next-auth/react"

import LayoutMain from '../layouts/main/LayoutMain';

const Home: NextPageWithLayout = () => {
  
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status)

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        { !session ? (
          <a
            onClick={(e) => {
              e.preventDefault()
              signIn()
            }}
          >
            Sign in
          </a>
        ):(
          <a
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            Sign out
          </a>
        )}

        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement){
  return(
    <LayoutMain>
      { page }
    </LayoutMain>
  )
}

export default Home;
