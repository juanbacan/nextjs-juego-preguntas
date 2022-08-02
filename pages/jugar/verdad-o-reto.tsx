import { ReactElement } from 'react'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { NextPageWithLayout } from '../_app';
import LayoutMain from '../../layouts/main/LayoutMain';

// import verdadRetoSchema from '../../../utils/validations/verdadRetoSchema';

const VerdadOReto: NextPageWithLayout = () => {

  return (
    <Container sx={{ mt: 2 }} maxWidth="sm">

      <Paper 
        elevation={ 6 } 
        sx={{ p: 2, borderRadius: 8, height: 300, display: "flex", flexDirection:"column", justifyContent:"center" }}>
       
            <Stack justifyContent="center" mt={ 2 }>
                <Typography variant="h5" component="h2" sx={{ textAlign: "center", fontWeight: "bold" }}>
                    Verdad o Reto Juego
                </Typography>
                <Typography component="h3" sx={{ textAlign: "center" }}>
                    La persona más joven comienza
                </Typography>
            </Stack>
    

            <Stack direction="row" justifyContent="center" mt={ 2 }>
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                    Verdad
                </Button>
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                    Reto
                </Button>
            </Stack>
      </Paper>
    </Container>
  );
}

VerdadOReto.getLayout = function getLayout(page: ReactElement){
  return(
    <LayoutMain>
      { page }
    </LayoutMain>
  )
}

export default VerdadOReto;
