import {useProducts} from "./hooks/products";
import {Product} from "./components/Product";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";
import {useContext} from "react";
import {IProduct} from "./models";
import {ModalContext} from "./context/ModalContext";

function App() {
    const {loading, error, products, addProduct} = useProducts()
    const {modal, openModal, closeModal} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        closeModal()
        addProduct(product)
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {error && <ErrorMessage error={error}/>}
            {loading && <Loader/>}
            {products.map(product => <Product product={product} key={product.id}/>)}

            {modal && <Modal title="Create new product" onClose={() => closeModal()}>
                <CreateProduct onCreate={createHandler} />
            </Modal>}
            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
            onClick={() => openModal()}>+
            </button>
        </div>
    )
}

export default App;
