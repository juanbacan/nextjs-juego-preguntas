import { ReactElement } from 'react'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { NextPageWithLayout } from '../_app';
import LayoutMain from '../../layouts/main/LayoutMain';
import { useModal } from '../../providers/ModalProvider';
import { Button } from '@mui/material';

// import verdadRetoSchema from '../../../utils/validations/verdadRetoSchema';

const Prueba: NextPageWithLayout = () => {

	const { setModal } = useModal();

  return (
    <Container sx={{ mt: 2 }} maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Pruebas
      </Typography>
			<Button variant="contained" onClick={() => { setModal(<>dsa</>)}} >
				{'Cancel'}
			</Button>
    </Container>
  );
}

Prueba.getLayout = function getLayout(page: ReactElement){
  return(
    <LayoutMain>
      { page }
    </LayoutMain>
  )
}

export default Prueba;
