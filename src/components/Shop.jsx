import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import productsByTypeLocalized from '../config/products'
import Contact from './Contact'
import { useTranslation } from 'react-i18next'
import soon from '../assets/img/coming.png'

const Shop = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const defaultTypes = ['crochet', 'pottery']
  const productsByType = productsByTypeLocalized()

  const [selectedType, setSelectedType] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const types = [...Object.keys(productsByType), 'Custom']
  const categories =
    selectedType && productsByType[selectedType]
      ? Object.keys(productsByType[selectedType])
      : []

  const productsToDisplay = useMemo(() => {
    if (selectedType === 'Custom') {
      return []
    }

    if (selectedType && selectedCategory) {
      return productsByType[selectedType][selectedCategory] || []
    }

    if (selectedType) {
      return Object.values(productsByType[selectedType]).flat()
    }

    // Default case: show products for "crochet" and "pottery"
    return defaultTypes
      .filter((type) => productsByType[type])
      .flatMap((type) => Object.values(productsByType[type]).flat())
  }, [selectedType, selectedCategory])

  return (
    <div className="flex flex-col items-center bg-white p-2">
      <div className="w-full flex-col flex items-center justify-center">
        <img src={soon} className="h-96" />
      </div>
    </div>
    // <div className="flex flex-col items-center bg-white p-4">
    //   <div className="flex space-x-4 mb-8">
    //     {/* Type Filter */}
    //     {types.map((type) => (
    //       <button
    //         key={type}
    //         onClick={() => {
    //           setSelectedType((prev) => (prev === type ? null : type))
    //           setSelectedCategory(null)
    //         }}
    //         className={`py-2 px-4 rounded text-xl ${
    //           selectedType === type ? 'underline underline-offset-2' : ''
    //         }`}
    //       >
    //         {t(type.charAt(0) + type.slice(1))}
    //       </button>
    //     ))}
    //   </div>

    //   {/* Category Filter */}
    //   {selectedType !== 'Custom' && categories.length > 0 && (
    //     <div className="flex space-x-4 mb-8">
    //       {categories.map((category) => (
    //         <button
    //           key={category}
    //           onClick={() =>
    //             setSelectedCategory((prev) =>
    //               prev === category ? null : category,
    //             )
    //           }
    //           className={`py-2 px-4 rounded text-xl ${
    //             selectedCategory === category
    //               ? 'underline underline-offset-2'
    //               : ''
    //           }`}
    //         >
    //           {t(category.charAt(0) + category.slice(1))}
    //         </button>
    //       ))}
    //     </div>
    //   )}

    //   {/* Custom Tab Message */}
    //   {selectedType === 'Custom' && <Contact />}

    //   {/* Products Grid */}
    //   {selectedType !== 'Custom' && (
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {productsToDisplay.map((product) => (
    //         <div
    //           key={product.id}
    //           onClick={() => navigate(`/shop/${product.id}`)}
    //           onMouseEnter={() =>
    //             product.status?.label !== 'Sold Out' &&
    //             setHoveredProduct(product.id)
    //           }
    //           onMouseLeave={() =>
    //             product.status?.label !== 'Sold Out' && setHoveredProduct(null)
    //           }
    //           className="cursor-pointer relative flex flex-col items-center"
    //         >
    //           {product.status?.label === 'Sold Out' && (
    //             <span className="absolute top-2 right-2 flex items-center justify-center z-20 uppercase text-white font-bold transform tracking-widest p-2 bg-black bg-opacity-45 rounded-md">
    //               Sold Out
    //             </span>
    //           )}
    //           <img
    //             src={product.images[0]}
    //             alt={product.name}
    //             className={`w-full h-96 object-cover rounded shadow-lg transition-opacity duration-300 ease-in-out ${
    //               hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
    //             } ${product.status?.label === 'Sold Out' ? 'opacity-50' : ''} absolute`}
    //           />
    //           <img
    //             src={product.images[1]}
    //             alt={product.name}
    //             className={`w-full h-96 object-cover rounded shadow-lg transition-opacity duration-300 ease-in-out ${
    //               hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
    //             }`}
    //           />
    //           <h2 className="text-xl mt-2 font-semibold">{product.name}</h2>
    //           <p className="text-gray-700">{product.price}</p>
    //         </div>
    //       ))}
    //       {productsToDisplay.length === 0 && (
    //         <p className="text-gray-500">No products available.</p>
    //       )}
    //     </div>
    //   )}
    // </div>
  )
}

export default Shop
