import { ReactElement, useRef } from 'react'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { NextPageWithLayout } from '../../_app';
import LayoutMain from '../../../layouts/main/LayoutMain';

// import { Editor as TinyMCEEditor } from 'tinymce'
import FormBase from '../../../utils/forms/FormBase';
import { elementType } from '../../../utils/forms/typesForm';

// import verdadRetoSchema from '../../../utils/validations/verdadRetoSchema';

const CrearPreguntaVerdadReto: NextPageWithLayout = () => {

	// const editorRef1 = useRef<TinyMCEEditor | null>(null);

  const elementsForm: elementType[] = [
    {
      control: 'input',
      name: 'statement',
      label: 'Enunciado de la Pregunta',
      errorMessage: "El enunciado de la pregunta es requerido",
      required: true,
      initialValue: 'escriba el enunciado',
      type: 'text', 
      min: 8,
      max: 100
    },  
    {
      control: 'input',
      name: 'answer',
      label: 'Enunciado de la Pregunta',
      errorMessage: "La respuesta de la pregunta es requerido",
      required: true,
      initialValue: 'Escriba el enunciado de la palabra',
      type: 'text', 
      min: 8,
      max: 100,
      lines: 3
    },
  ]


  return (
    <Container sx={{ mt: 2 }} maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Crear Pregunta Verdad o Reto
      </Typography>

      <FormBase
        elementsForm={elementsForm}
        onSubmit={ async (values) => {
          console.log(values);
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
