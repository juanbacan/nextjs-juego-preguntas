import { ReactElement, useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import { NextPageWithLayout } from '../../_app';
import LayoutMain from '../../../layouts/main/LayoutMain';

import { useFormik, FormikProps } from 'formik';
import verdadRetoSchema from '../../../utils/validations/verdadRetoSchema';
import FormikController from '../../../utils/forms/FormikController';

const CrearPreguntaVerdadReto: NextPageWithLayout = () => {

  const [error, setError] = useState("");


  const formik = useFormik({
    initialValues: {
      statement: '',
    },
    validationSchema: verdadRetoSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
      } catch (error) {
        setError("Usuario no encontrado");
      }
    },
  });

  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Crear Pregunta Verdad o Reto
      </Typography>

      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
        <FormikController
          control="textfield"
          formik={formik}
          name="statement"
          label="Pregunta"
        />

        <FormikController
          control="textfield"
          formik={formik}
          name="statement"
          label="Pregunta"
        />


        {(error !== "") &&
          <Alert severity="error">{error}</Alert>
        }

        <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 3, mb: 2 }}>
          Ingresar
        </Button>
      </Box>

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
