
import {useFormik, FormikProps} from "formik";
import TextField from '@mui/material/TextField';

export type formikControllerProps = {
    control: string,
    name: string,
    label: string | null,
    formik: FormikProps<any>
}

const FormikController = (props: formikControllerProps) =>{

    const { control, formik, name, label } = props;
    switch (control) {

        case "input":
            return <p>input</p>

        case "textfield":
            return (
                <TextField
                    margin="normal"
                    fullWidth
                    id={ name }
                    name={ name }
                    label={ label ?? name }
                    value={ formik.values.statement }
                    onChange={ formik.handleChange }
                    error={ formik.touched.statement && Boolean(formik.errors.statement )}
                    // helperText={formik.touched.statement formik.errors.statement}
                />
            )

        case "textarea":
            return <p>textarea</p>
        default:
            return <p>default</p>
    }
}

export default FormikController;