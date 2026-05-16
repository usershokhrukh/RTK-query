import React from 'react'
import { useGetProductsQuery } from './features/QueryProducts'

const App = () => {

  const {data: products, error, isError, isLoading, isFetching, isSuccess} = useGetProductsQuery()

  if(isError) return (
    <h1>{error.message}</h1>
  )

  if(isLoading) return (
    <h2>Loading...</h2>
  )

  if(isSuccess) {
    return (
      products?.map(item => (
        <div key={`${item.name} ${item.id}`}>
          <h2>name: {item?.name}</h2>
          <h2>price: {item?.price}</h2>
          <h2>category: {item?.category}</h2>
          <br /><br />
        </div>
      ))
    )
  }
}

export default App