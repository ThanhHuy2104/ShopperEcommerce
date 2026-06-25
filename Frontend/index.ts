import axios  from 'axios'



  interface Product {
    id: number,
    name: string,
    category: string,
    new_price: number,
    old_price: number
  }
  const getProducts = async () : Promise<Product[]> => {
    const res = await axios.get<Product[]>('https://6a3944f564a2d8269223b476.mockapi.io/products')
    return res.data
  }

  const createProduct = async(name: string, category: string, new_price: number, old_price: number) : 
  Promise<Product> => {
    const data_product = await getProducts()

    const max_id = data_product[data_product.length - 1].id

    const resCreate = await axios.post('https://6a3944f564a2d8269223b476.mockapi.io/products', {max_id, name, category, new_price, old_price})
    return resCreate.data
  }

  const deleteProduct = async(id: number) : Promise<void> => {
    await axios.delete(`https://6a3944f564a2d8269223b476.mockapi.io/products/${id}`)
  }

  const result = await getProducts()


  console.log(result)
//   await deleteProduct(5)

//   const updatedResult = result.filter(product => product.id !== 5)
//   console.log(updatedResult)
