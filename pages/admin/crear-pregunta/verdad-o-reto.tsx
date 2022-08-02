import { ReactElement } from 'react'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { NextPageWithLayout } from '../../_app';
import LayoutMain from '../../../layouts/main/LayoutMain';

// import { Editor as TinyMCEEditor } from 'tinymce'
import FormBase from '../../../utils/forms/FormBase';
import { elementType } from '../../../utils/forms/typesForm';

// import verdadRetoSchema from '../../../utils/validations/verdadRetoSchema';

const CrearPreguntaVerdadReto: NextPageWithLayout = () => {

  const elementsForm: elementType[] = [
    {
      control: 'input',
      name: 'statement',
      label: 'Enunciado de la Pregunta',
      errorMessage: "El enunciado de la pregunta es requerido",
      required: true,
      type: 'text', 
      min: 8,
      max: 100,
      lines: 2,
    },  
    {
      control: 'select',
      name: 'type',
      label: 'Tipo de la Pregunta',
      errorMessage: "El tipo de la pregunta es requerido",
      initialValue: 'reto',
      required: true,
      type: 'text',
      min: 2,
      items: [
        {value: 'verdad', label: 'Verdad'},
        {value: 'reto', label: 'Reto'}
      ]
    },
  ]


  return (
    <Container sx={{ mt: 2 }} maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Crear Pregunta Verdad o Reto
      </Typography>

      <FormBase
        elementsForm={elementsForm}
        buttonText="Crear Pregunta"
        onSubmit={ async (values) => {
          const res = await fetch("/api/questions/verdad-o-reto", {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
          });
          await res.json();
        }}
      />
    </Container>
  );
}

CrearPreguntaVerdadReto.getLayout = function getLayout(page: ReactElement){
  return(
    <LayoutMain>
      { page }
    </LayoutMain>
  )
}

export default CrearPreguntaVerdadReto;
