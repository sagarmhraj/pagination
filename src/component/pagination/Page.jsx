import React, { useEffect, useState } from 'react'

function Page() {

    const [products, setProduct] = useState([])
    const [page, setPages] = useState(2)

    const fetchProduct = async () => {
        const res = await fetch("https://dummyjson.com/products?limit=100")
        const data = await res.json()

        if (data && data.products) {
            setProduct(data.products);
        }

    }

    useEffect(() => {
        fetchProduct()

    }, [])

    function forward() {
        setPages(page + 1);

    }
    function backward() {
        setPages(page - 1);

    }


    return (
        <div>
            <div className="text-center text-red-400 mb-3 mt-5 font-sans font-extrabold" >
                <h1>Big basket</h1>
            </div>
            {
                products.length > 0 && (
                    <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {products.slice(page * 10 - 10, page * 10).map((product, index) => (
                            <li
                                className="border border-black rounded-lg shadow-lg p-4 flex flex-col items-center"
                                key={index}
                            >
                                <img
                                    className="w-32 h-32 object-cover mb-4 rounded-md"
                                    src={product.images}
                                    alt={`${product.brand} image`}
                                />
                                <h1 className="font-semibold text-lg">Name: {product.brand}</h1>
                                <h1 className="text-gray-600">Category: {product.category}</h1>
                                <h1 className="text-yellow-500">Rating: {product.rating}</h1>
                                <h1 className="text-green-600 font-bold">Price: ${product.price}</h1>
                                <h1 className="text-sm text-gray-500">Description: {product.description}</h1>
                            </li>
                        ))}
                    </ol>
                )
            }


            <div className="text-center">
                <button className={`px-2 py-1 m-1 rounded ${page === 9 ? 'hidden' : 'bg-blue-500 text-white hover:bg-blue-600'}`} onClick={forward}>forward</button>
                <button className={`px-2 py-1 m-1 rounded ${page === 1 ? 'bg-red-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`} onClick={() => setPages(1)} >1</button>
                <button className={`px-2 py-1 m-1 rounded ${page === 2 ? 'bg-red-500 text-white ' : 'bg-blue-500 text-white hover:bg-blue-600'}`} onClick={() => setPages(2)}>2</button>
                <button className={`px-2 py-1 m-1 rounded ${page === 3 ? 'bg-red-500 text-white ' : 'bg-blue-500 text-white hover:bg-blue-600'}`} onClick={() => setPages(3)}>3</button>
                <button className={`px-2 py-1 m-1 rounded ${page === 4 ? 'bg-red-500 text-white ' : 'bg-blue-500 text-white hover:bg-blue-600'}`} onClick={() => setPages(4)}>4</button>
                <button className={`px-2 py-1 m-1 rounded ${page === 5 ? 'bg-red-500 text-white ' : 'bg-blue-500 text-white hover:bg-blue-600'}`} onClick={() => setPages(5)}>5</button>
                <button className={`px-2 py-1 m-1 rounded ${page === 6 ? 'bg-red-500 text-white ' : 'bg-blue-500 text-white hover:bg-blue-600'}`} onClick={() => setPages(6)}>6</button>
                <button className={`px-2 py-1 m-1 rounded ${page === 7 ? 'bg-red-500 text-white ' : 'bg-blue-500 text-white hover:bg-blue-600'}`} onClick={() => setPages(7)}>7</button>
                <button className={`px-2 py-1 m-1 rounded ${page === 8 ? 'bg-red-500 text-white ' : 'bg-blue-500 text-white hover:bg-blue-600'}`} onClick={() => setPages(8)}>8</button>
                <button className={`px-2 py-1 m-1 rounded ${page === 9 ? 'bg-red-500 text-white ' : 'bg-blue-500 text-white hover:bg-blue-600'}`} onClick={() => setPages(9)}>9</button>
                <button className={`px-2 py-1 m-1 rounded ${page === 1 ? 'hidden' : 'bg-blue-500 text-white hover:bg-blue-600'}`} onClick={backward}>Backword</button>

            </div>




        </div>
    )
}

export default Page