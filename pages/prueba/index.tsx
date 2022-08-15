import { ReactElement } from 'react'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { NextPageWithLayout } from '../_app';
import LayoutMain from '../../layouts/main/LayoutMain';
import { useModal } from '../../providers/ModalProvider';
import { Button } from '@mui/material';

// import FormBase from '../../utils/forms/FormBase';
import dynamic from 'next/dynamic'
import { elementsForm } from '../../forms/prueba';

const FormBase = dynamic(() => import('../../utils/forms/FormBase'), {
  ssr: false,
});

const Prueba: NextPageWithLayout = () => {

	const { setModal, unSetModal } = useModal();

  const form = <FormBase
      elementsForm={ elementsForm }
      buttonText="Crear Pregunta"
      onSubmit={ async (values) => {
        console.log(values);
        console.log("Formulario enviado");
      }}
      onCancel={ () => unSetModal() }
    />

  return (
    <Container sx={{ mt: 2 }} maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Pruebas
      </Typography>
			<Button variant="contained" onClick={ () => setModal({ title: 'Formulario', children: form }) } >
				Abrir Formulario
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