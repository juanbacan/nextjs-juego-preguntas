import { elementType } from '../utils/forms/typesForm';

export const elementsForm: elementType[] = [
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
