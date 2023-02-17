import {useProducts} from "./hooks/products";
import {Product} from "./components/Product";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";

function App() {
    const {loading, error, products} = useProducts()

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {error && <ErrorMessage error={error}/>}
            {loading && <Loader/>}
            {products.map(product => <Product product={product} key={product.id}/>)}

            <Modal title="Create new product">
                <CreateProduct />

            </Modal>
        </div>
    )
}

export default App;
