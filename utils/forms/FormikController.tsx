
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import { FormikProps} from "formik";
import { elementType } from "./typesForm";

type formikControllerProps = {
    formik: FormikProps<any>
    element: elementType
}

const FormikController = (props: formikControllerProps) =>{

    const { element, formik } = props;
    const { control, name, label, required, initialValue, type, min, max, lines, items } = element;

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
        
        case "select":
            return (
                <FormControl sx={{ mt: 2.5 }} fullWidth error={ formik.touched[name] && Boolean(formik.errors[name]) }>
                    <InputLabel id={ `label${name}` }>{ label ?? name }</InputLabel>
                    <Select
                        labelId={ `label${name}` }
                        id={ name }
                        name={ name }
                        label={ label ?? name }
                        value={ formik.values[name] }
                        onChange={formik.handleChange}
                        error={ formik.touched[name] && Boolean(formik.errors[name] )}
                    >
              
                        { (items && items.length > 0) && items.map((item: any, index: number) => {
                            return (
                                <MenuItem key={ index } value={ item.value }>{ item.label }</MenuItem>
                            ) 
                        })}
               

                    </Select>
                    { formik.touched[name] && (
                        <FormHelperText>{`${formik.errors[name] ?? ""}`}</FormHelperText>
                    ) }
                </FormControl>
            )

        case "textarea":
            return <p>textarea</p>
        default:
            return <p>default</p>
    }
}

export default FormikController;