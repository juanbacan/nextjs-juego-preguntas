import * as yup from 'yup';

const verdadRetoSchema = yup.object({
    statement: yup
        .string()
        .required("Debe ingresar un enunciado para la pregunta")
        .max(100, "El enunciado no puede tener más de 100 caracteres"),
});

export default verdadRetoSchema;