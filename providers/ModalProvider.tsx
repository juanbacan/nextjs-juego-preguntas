import React, { useCallback, useEffect, useState, useContext } from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

type ModalContextType = {
    unSetModal: () => void,
    setModal: (modal: string) => void
}

// Create a React context
const ModalContext = React.createContext<ModalContextType | null>(null);

type modalPropTypes = {
    modal: string,
    unSetModal: () => void,
    title?: string,
    subtitle?: string,
    children?: any,
}


//Declare the modal component
const Modal = ({ modal, unSetModal, title, subtitle, children }: modalPropTypes) => {
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
            <DialogTitle id='max-width-dialog-title' >
                Titulo del Dialog
            </DialogTitle>
            <DialogContent>
                <DialogContentText>{subtitle}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={unSetModal}>"Close"</Button>
                <Button color='primary'>"Save"</Button>
            </DialogActions>
        </Dialog>
    )
}

const ModalProvider = (props: any) => {

    const [modal, setModal] = useState<string>()

    const unSetModal = useCallback(() => {
        setModal('');
    }, [setModal])

    return (
        <ModalContext.Provider value={{ unSetModal, setModal }} {...props} >
            {props.children}
            {modal && <Modal modal={modal} unSetModal={unSetModal} />}
        </ModalContext.Provider>
    )
}

// useModal: shows and hides the Modal
const useModal = (): any => {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error('useModal must be used within a UserProvider')
    }
    return context
}

export { ModalProvider, useModal }