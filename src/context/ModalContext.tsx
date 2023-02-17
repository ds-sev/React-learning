import React, {createContext, useState} from "react"

interface IModalContext {
    modal: boolean
    openModal: () => void
    closeModal: () => void
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    openModal: () => {},
    closeModal: () => {}
})

export const ModalState = ({children}: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(false)
    const open = () => setModal(true)
    const close = () => setModal(false)
    return (
        <ModalContext.Provider value={{modal, openModal: open, closeModal: close}}>
            {children}
        </ModalContext.Provider>
    )
}