import { useEffect } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import { UseModalProviderProps } from './ModalProvider';

type modalPropTypes = {
    modal: UseModalProviderProps,
    unSetModal: () => void,
}

//Declare the modal component
const Modal = ({ modal, unSetModal }: modalPropTypes) => {
    useEffect(() => {
        const bind = (e: any) => {
            if (e.keyCode !== 27) return;
            if (document.activeElement && ['INPUT', 'SELECT'].includes(document.activeElement.tagName)) return;
            unSetModal();
        }

        document.addEventListener('keyup', bind)

        return () => document.removeEventListener('keyup', bind)
    }, [modal, unSetModal])

    return (
        <Dialog
            open={true}
            fullWidth
            maxWidth='md'
            aria-labelledby='max-width-dialog-title'
        >
            <DialogTitle id='max-width-dialog-title' sx={{ pb: 0 }}>
                { modal.title ?? 'Formulario' }
            </DialogTitle>
            <DialogContent>
                { modal.subtitle && <DialogContentText>{ modal.subtitle }</DialogContentText> }
                { modal.children }
            </DialogContent>
            { modal.onSubmit && 
                <DialogActions>
                    <Button color="error" variant="contained" onClick={unSetModal}>Close</Button>
                    <Button 
                        color='primary' 
                        variant="contained" 
                        onClick={ async () => {
                            await modal.onSubmit!();
                        }}
                    >
                        Save
                    </Button>
                </DialogActions>
            }
        </Dialog>
    )
}

export default Modal;