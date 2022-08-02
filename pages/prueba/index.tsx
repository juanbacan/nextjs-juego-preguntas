import { ReactElement } from 'react'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { NextPageWithLayout } from '../_app';
import LayoutMain from '../../layouts/main/LayoutMain';
import { useModal } from '../../providers/ModalProvider';
import { Button } from '@mui/material';
import { elementType } from '../../utils/forms/typesForm';


// import FormBase from '../../utils/forms/FormBase';
import dynamic from 'next/dynamic'
const FormBase = dynamic(() => import('../../utils/forms/FormBase'), {
  ssr: false,
})

const Prueba: NextPageWithLayout = () => {

	const { setModal } = useModal();

  const elementsForm: elementType[] = [
    { control: 'input', name: 'statement3', label: 'Enunciado de la Pregunta 2',
      errorMessage: "El enunciado de la pregunta es requerido 2", required: true,
      type: 'text', min: 8, max: 100
    }, 
    {
      control: 'input', name: 'statement4', label: 'Enunciado de la Pregunta 3',
      errorMessage: "El enunciado de la pregunta es requerido", required: true,
      type: 'text', min: 8, max: 100
    },  
    {
      control: 'select', name: 'type2', label: 'Tipo de la Pregunta 2',
      errorMessage: "El tipo de la pregunta es requerido", initialValue: 'reto',
      required: true, type: 'text', min: 2,
      items: [ {value: 'verdad', label: 'Verdad'}, {value: 'reto', label: 'Reto'}]
    },
  ]

  const renderForm = () => {
    setModal({
      title: 'Formulario',
      children: (
        <FormBase
          elementsForm={ elementsForm }
          buttonText="Crear Pregunta"
          onSubmit={ async (values) => {
            console.log(values);
          }}
        />
      ),
      onSubmit: async () => {
        console.log('submit');
      }
    })
  }

  return (
    <Container sx={{ mt: 2 }} maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Pruebas
      </Typography>
			<Button variant="contained" onClick={ renderForm } >
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
