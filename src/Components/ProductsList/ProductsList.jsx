import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductsList.css'
import ErrorBox from '../../Components/ErrorBox/ErrorBox'

export default function ProductsList({ list, searchProduct }) {
    return (
        <>
            {
                list ? (

                    list
                        .filter(product => product.title.includes(searchProduct))
                        .map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))
                ) : (<ErrorBox title='محصولی یافت نشد!' />)
            }
        </>
    )
}
