import React, { useCallback, useState, useContext } from 'react'

import dynamic from 'next/dynamic'
const Modal = dynamic(() => import('./Modal'), {
  ssr: false,
})
// import Modal from './Modal';

type ModalContextType = {
    unSetModal: () => void,
    setModal: (modal: {
        title?: string,
        subtitle?: string,
        children: React.ReactElement,
        onSubmit?: () => void,
    }) => void
    
}

// Create a React context
const ModalContext = React.createContext<ModalContextType | null>(null);

export type UseModalProviderProps = {
    title?: string,
    subtitle?: string,
    children: React.ReactElement,
    onSubmit?: () => void,
}

const ModalProvider = (props: any) => {

    const [modal, setModal] = useState<UseModalProviderProps | null>()

    const unSetModal = useCallback(() => {
        setModal(null);
    }, [setModal])

    return (
        <ModalContext.Provider value={{ setModal, unSetModal }} {...props} >
        {/* <ModalContext.Provider value={{ setModal }} {...props} > */}
            {props.children}
            {modal && <Modal modal={modal} unSetModal={unSetModal} />}
        </ModalContext.Provider>
    )
}

// useModal: shows and hides the Modal
export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error('useModal must be used within a UseModalProvider')
    }
    return context!
}

export default ModalProvider;