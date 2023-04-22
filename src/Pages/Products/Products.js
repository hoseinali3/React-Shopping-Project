import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import swiperProductData from '../../Components/SwiperProductSlider/SwiperProductSliderData'
import './Products.css'

import pic1 from '../../images/Slider/44a9f47cfb07aa1f1487c10cd807026f0e922db2_1662384097.jpg'

import ProductCard from '../../Components/ProductCard/ProductCard'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ErrorBox from '../../Components/ErrorBox/ErrorBox'

import { productBrands, sortingProductsData } from '../../Components/FilterPanel/FilterProductData'
import FilterPanel from '../../Components/FilterPanel/FilterPanel'
import ProductsList from '../../Components/ProductsList/ProductsList'


export default function Products() {


  const [list, setList] = useState(swiperProductData);
  const [filterProduct, setFilterProduct] = useState([

    { id: 1, label: "Asus", checked: false },
    { id: 2, label: "Lenovo", checked: false },
    { id: 3, label: "Western Digital", checked: false },
    { id: 4, label: "Samsung", checked: false },
    { id: 5, label: "Xiaomi", checked: false },
    { id: 6, label: "Canon", checked: false }

  ]);
  const breadCrumbData = [
    {id:1,title:"خانه",link:"React-Shopping-Project",color:"#797979"},
    {id:2,title:"دسته بندی",link:"React-Shopping-Project/products",color:"#FFB300"}
]


  const [selectedPrice, setSelectedPrice] = useState([500000, 100000000]);
  const [searchProduct, setSearchProduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortingProducts, setSortingProducts] = useState(sortingProductsData)
  const [sortingProductsLabel, setSortingProductsLabel] = useState("newest")


  const sortProducts = (criteria) => {
    let sortedProducts = [...list]

    if (criteria === "ASCPrice") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (criteria === "DSCPrice") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (criteria === "name") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === "rating") {
      sortedProducts.sort((a, b) => b.fav - a.fav)
    } else if (criteria === "newest") {
      sortedProducts.sort((a, b) => b.id - a.id)

    }
    setList(sortedProducts)

  }



  const handleSelectCategory = (event, value) => !value ? null : setSelectedCategory(value);

  const handleChangeChecked = id => {
    const cusinesStateList = filterProduct;
    const changeCheckedCusines = cusinesStateList.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )

    setFilterProduct(changeCheckedCusines)
  }
  const handleChangePrice = (event, value) => setSelectedPrice(value)



  const categoryFilter = () => {
    let updatedList = swiperProductData;
    if (selectedCategory) {

      updatedList = updatedList.filter((item) =>
        item.category === selectedCategory
      )
    }
    updatedList.length ? setList(updatedList) : setList(swiperProductData)
  }
  const brandFilter = () => {
    let updatedList = swiperProductData;
    const cusineChecked = filterProduct
      .filter(item => item.checked)
      .map(item => item.label.toLowerCase());

    if (cusineChecked.length) {
      updatedList = updatedList.filter(item => cusineChecked.includes(item.brand))

    }
    updatedList.length ? setList(updatedList) : setList(swiperProductData)
  }
  const priceRangeFilter = () => {
    let updatedList = swiperProductData;
    let minPrice = selectedPrice[0]
    let maxPrice = selectedPrice[1]

    if (minPrice && maxPrice) {
      updatedList = updatedList.filter(item => item.price >= minPrice && item.price <= maxPrice)
      updatedList.length ? setList(updatedList) : setList(swiperProductData)
    }
  }


  const applyFilters = () => {

    let updatedList = swiperProductData;

    // Category Filter
    if (selectedCategory) {

      updatedList = updatedList.filter((item) =>
        item.category === selectedCategory
      )
    }


    // Brand Filter
    const cusineChecked = filterProduct
      .filter(item => item.checked)
      .map(item => item.label.toLowerCase());

    if (cusineChecked > 0) {
      updatedList = updatedList.filter(item => cusineChecked.includes(item.brand))

    }


    // Price Range Filter
    let minPrice = selectedPrice[0]
    let maxPrice = selectedPrice[1]


    updatedList = updatedList.filter(item => item.price >= minPrice && item.price <= maxPrice)


    updatedList.length ? setList(updatedList) : setList(swiperProductData)

    // Apply Filter Condition
    // if (updatedList.length) {
    //   setList(updatedList)
    // } 
    // else {
    //   setList(swiperProductData)
    // }



  }



  useEffect(() =>

    categoryFilter()

    , [selectedCategory])

  useEffect(() =>

    brandFilter()

    , [filterProduct])


  useEffect(() =>

    priceRangeFilter()

    , [selectedPrice])




  return (
    <div className='background-body'>

      
      <div className='container'>
        <div className="products-header">
          <Link to='#'><img src={pic1} alt="" /></Link>
        </div>
        <div className="products-sort">
          <div className="products-sort-wrapper">

            <div className="product-sort-rightside">
              <span className="products-sort-title">مرتب سازی براساس:</span>
              {
                sortingProducts && (
                  sortingProducts.map(item => (

                    <Link key={item.id} className={`products-sort-btn ${item.label === sortingProductsLabel ? "active" : null}`} onClick={() => {
                    sortProducts(item.label)
                    setSortingProductsLabel(item.label)
                    }}>

                      {item.title}

                    </Link>
                  ))

                )
              }

            </div>
            <div className="product-search">
              <input type="text" onChange={event => setSearchProduct(event.target.value)} value={searchProduct} placeholder="جستجوی محصول..." />
              <SearchOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="products-list-wrapper">

          <div className="products-filter-panel">
            <FilterPanel
              selectToggle={handleSelectCategory}
              selectedCategory={selectedCategory}
              cusines={filterProduct}
              changeChecked={handleChangeChecked}
              selectedPrice={selectedPrice}
              changedPrice={handleChangePrice}
            />
          </div>
          <div className={`products-listcards ${list ? "p-3" : null}`}>
            <ProductsList list={list} searchProduct={searchProduct} />
          </div>


        </div>
      </div>
    </div>
  )
}
