import { MutableRefObject } from 'react'
import { Editor as TinyMCEEditor } from 'tinymce'

export type elementType = {
    control: "input" | "textarea" | "select" | "checkbox" | "radio" | "button" | "file" | 
              "hidden" | "image" | "password" | "reset" | "submit" | "tinymce" | "date" | 
              "datetime" | "datetime-local" | "month" | "time" | "week" | "editor",
    name: string,
    label: string | null,
    type: string,
    
    required?: boolean,
    editorRef?: MutableRefObject<TinyMCEEditor | null>,   // Solo reqyerido para el editor TinyMCE useRef("editorRef")
    initialValue?: string | number | boolean | null,
    errorMessage?: string,
    min?: number,
    max?: number,
    lines?: number,
  }