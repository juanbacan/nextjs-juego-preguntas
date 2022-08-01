import { useState, useRef } from 'react';

import FormikController from "./FormikController";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import { useFormik } from 'formik';
import * as yup from 'yup';

import { elementType } from './typesForm';

import { Editor } from '@tinymce/tinymce-react';
import { initConfig } from './configTinyMCE';

// Example elements for form
// const elementsForm: elementType[] = [
//     {
//       control: 'input',
//       name: 'statement',
//       label: 'Enunciado de la Pregunta',
//       errorMessage: "El enunciado de la pregunta es requerido",
//       required: true,
//       initialValue: 'escriba el enunciado',
//       type: 'text', 
//       min: 8,
//       max: 100
//     },  
//     {
//       control: 'input',
//       name: 'answer',
//       label: 'Enunciado de la Pregunta',
//       errorMessage: "La respuesta de la pregunta es requerido",
//       required: true,
//       initialValue: 'Escriba el enunciado de la palabra',
//       type: 'text', 
//       min: 8,
//       max: 100,
//       lines: 3
//     },

// 		{
// 			control: 'editor',
// 			name: 'editor',
// 			label: 'Enunciado de la Pregunta 2',
// 			type: 'text',
// 			editorRef: editorRef1,
// 		},
// 		{
// 			control: 'editor',
// 			name: 'editor2',
// 			label: 'Enunciado de la Pregunta 2',
// 			type: 'text',
// 			editorRef: editorRef2,
// 		}
//   ]

type formBaseProps = {
    elementsForm: elementType[],
    onSubmit: (values: any) => void,
    buttonText?: string,
}

const FormBase = ( props: formBaseProps )=> {

    const {elementsForm, onSubmit } = props;

    const [error, setError] = useState("");

    const objectSchema: any = {}

    for (const element of elementsForm) {

        const { control, name, label, required, initialValue, type, min, max } = element;

        if(control !== "editor"){
            if (required && ["text", "password"].includes(type) && min && max) {
                objectSchema[element.name] = yup.string().required(`El campo ${element.label} es requerido`).min(min, `El campo ${element.label} debe tener al menos ${element.min} caracteres`).max(max, `El campo ${element.label} debe tener como máximo ${max} caracteres`)
            }
            else if (required && ["text", "password"].includes(type) && min) {
                objectSchema[element.name] = yup.string().required(`El campo ${element.label} es requerido`).min(min, `El campo ${element.label} debe tener al menos ${min} caracteres`)
            }
            else if (required && ["text", "password"].includes(type) && max) {
                objectSchema[element.name] = yup.string().required(`El campo ${element.label} es requerido`).max(max, `El campo ${element.label} debe tener como máximo ${max} caracteres`)
            }
            else if (required && ["text", "password"].includes(type)) {
                objectSchema[element.name] = yup.string()
            }
            else if (required && type === 'number' && min && max) {
                objectSchema[element.name] = yup.number().required(`El campo ${element.label} es requerido`).min(min, `El campo ${element.label} debe tener al menos ${element.min}`).max(max, `El campo ${element.label} debe tener como máximo ${max}`)
            }
            else if (required && type === 'number' && min) {
                objectSchema[element.name] = yup.number().required(`El campo ${element.label} es requerido`).min(min, `El campo ${element.label} debe tener al menos ${min}`)
            }
            else if (required && type === 'number' && max) {
                objectSchema[element.name] = yup.number().required(`El campo ${element.label} es requerido`).max(max, `El campo ${element.label} debe tener como máximo ${max}`)
            }
            else if (required && type === 'number') {
                objectSchema[element.name] = yup.number()
            }
            else if (required && type === 'date') {
                objectSchema[element.name] = yup.date().required(`El campo ${element.label} es requerido`)
            }
            else if (required && type === 'email') {
                objectSchema[element.name] = yup.string().required(`El campo ${element.label} es requerido`).email(`El campo ${element.label} debe ser un email válido`)
            }
        }
    }

    const initialValues: any = {};

    for (const element of elementsForm) {
        if (element.control != "editor") {
            initialValues[element.name] = element.initialValue ?? ""
        }
    }

    const schema = yup.object().shape(objectSchema)

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: async (values) => {
            try {
                await onSubmit(values);
                formik.resetForm();
            } catch (error: any) {
                console.log(error);
                setError(error?.message);
            }
        },
    });

    return(
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
        { elementsForm.map((element, index) => (
            <div key={ index }>
                { element.control === "editor" ? (
                    <Box sx={{ my: 3 }}>
                        <Editor
                            id={element.name}
                            apiKey="hplh3uy8maqtyozi4s4hdhcvfa9mt9h5sr7pw40tu2m493ir"
                            onInit={(evt, editor) => element.editorRef ? element.editorRef.current = editor : null}
                            initialValue={ element.initialValue ? element.initialValue.toString() : undefined }
                            init={initConfig}
                        />
                    </Box>
                ) : (
                    <Box sx={{ my: 1 }}>
                        <FormikController
                            formik={ formik }
                            element={ element }
                        />
                    </Box>
                )}
            </div>
        ))}

        {(error !== "") &&
            <Alert severity="error">{error}</Alert>
        }

        <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 3, mb: 2 }}>
            {props.buttonText ?? "Enviar"}
        </Button>
      </Box>
    )
}

export default FormBase;