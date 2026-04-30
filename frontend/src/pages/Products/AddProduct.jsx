
import { Dropdown } from 'react-bootstrap'

const AddProduct = () => {
  return (
    <div>
        <h1>Add Product Details</h1>
        <form>
            <label>Name</label>
            <input type="text"/>
            <label>desc</label>
            <input type="text"/>
            <label>price</label>
            <input type="number"/>
            <label>catagory</label>
            <Dropdown>
                <option value="fruit">Fruits</option>
                <option value="Vegitables">Vegitables</option>
            </Dropdown>
            <label>Quantity</label>
            <input type="number"/>
            <label>img</label>
            <input type="text"/>
        </form>
      
    </div>
  )
}

export default AddProduct
