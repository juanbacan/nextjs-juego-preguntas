import React, { useCallback, useEffect, useState, useContext } from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

type ModalContextType = {
    // unSetModal: () => void,
    setModal: (modal: UseModalProviderProps) => void
}

// Create a React context
const ModalContext = React.createContext<ModalContextType | null>(null);

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
            <DialogActions>
                <Button color="error" variant="contained" onClick={unSetModal}>Close</Button>
                <Button 
                    color='primary' 
                    variant="contained" 
                    onClick={ async () => {
                        await modal.onSubmit();
                    }}
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

type UseModalProviderProps = {
    title?: string,
    subtitle?: string,
    children: React.ReactElement,
    onSubmit: () => void,
}

const ModalProvider = (props: any) => {

    const [modal, setModal] = useState<UseModalProviderProps | null>()

    const unSetModal = useCallback(() => {
        setModal(null);
    }, [setModal])

    return (
        // <ModalContext.Provider value={{ setModal, unSetModal }} {...props} >
        <ModalContext.Provider value={{ setModal }} {...props} >
            {props.children}
            {modal && <Modal modal={modal} unSetModal={unSetModal} />}
        </ModalContext.Provider>
    )
}

// useModal: shows and hides the Modal
const useModal = (): ModalContextType => {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error('useModal must be used within a UseModalProvider')
    }
    return context!
}

export { ModalProvider, useModal }