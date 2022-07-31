
import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { FormikProps} from "formik";
import { elementType } from "./typesForm";

type formikControllerProps = {
    formik: FormikProps<any>
    element: elementType
}

const FormikController = (props: formikControllerProps) =>{

    const { element, formik } = props;
    const { control, name, label, required, initialValue, type, min, max, lines } = element;

    switch (control) {

        case "input":
            return (
                <TextField
                    margin="normal"
                    fullWidth
                    id={ name }
                    name={ name }
                    label={ label ?? name }
                    value={ formik.values[name] }
                    onChange={ formik.handleChange }
                    error={ formik.touched[name] && Boolean(formik.errors[name] )}
                    helperText={ formik.touched[name] && `${formik.errors[name] ?? ""}` }
                    multiline={ lines ? true : false }
                    rows={ lines ?? 1 }
                />
            )


        case "textarea":
            return <p>textarea</p>
        default:
            return <p>default</p>
    }
}

export default FormikController;