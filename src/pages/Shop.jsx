import React, { useEffect, useState } from 'react'
import { Container, Row, Col  } from "reactstrap";
import data from '../components/UI/Data';
import ProductCard from '../components/UI/ProductCard';
import '../style/Shop.css'
import { useDispatch, useSelector } from 'react-redux';
 import {getAllProductsSearch, getProducts} from '../store/productReducer'
import ProductsSearchHook from '../hook/products-search-hook';
import { getCategories } from '../store/categoriesSlice';
const Shop = () => { 
  const [searchHandle,searchWord] =ProductsSearchHook();
  const categories = useSelector((state) => state.category.category)

  const product = useSelector((state) => state.products.products)
  const [category, setCategory] = useState("");
  const [products,setProducts]=useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const get = async() =>{
     await dispatch(getCategories())
     }
  
    get();
   }, [dispatch]);
  useEffect(() => {
    const get = async() =>{
      if(searchWord === '' ){
        await dispatch(getProducts(30))
         

      }else{
        await dispatch(getAllProductsSearch(searchWord))
 
      }
    }
  
    get();
   }, [searchWord]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const handleSearch=(e) =>{
     setTimeout(() => {
      dispatch(getAllProductsSearch(e.target.value))
    
      }, 1000)
   
  } 

 const selecthandle =(e) =>{
  setProducts(e.target.value)
  setTimeout(() => {
    dispatch(getAllProductsSearch(e.target.value))
  
    }, 1000)

 }
    
  return (
    <section>
<Container > 
        <Row>
          <Col lg="3" md='6' sm='6' xs='6'>
            <div className="filter_widget">
              <select  onChange={selecthandle}>
              <option value={category}>Filter by category</option>


                {categories&& categories.map((item) =>(
                   <option value={item.name.split(' ')[0]}>{item.name}</option>
                ))}
                {/* <option value="wear">Wear</option>
                <option value="gaming">Gaming</option>
                <option value="car">Car</option> */}
                

              </select>
            </div>
          </Col>
          <Col lg="3" md='6'sm='6' xs='6' className="text-end">
          <div className="filter_widget">
              <select >
                <option >sort by</option>
                <option value="ascending">ascending</option>
                <option value="decrnding">decrnding</option>

              </select>
            </div>
          </Col>
          <Col lg="6" md='12'>
<div className="search_box">
  <input type="text" placeholder="search......." onChange={handleSearch} />
  <span>
    <i class="ri-search-line"></i>
  </span>
</div>

          </Col>

        </Row>
      </Container>

      <Container>
          <Row className='mt-5'>
            {!product ? (<h1 className="text-center fs-4">no products are found !</h1>) :


           (  
           
            product.map((item,index) => (
            <ProductCard  product={item} key={index}/>)

           ))
            }
            
          </Row>
        </Container>
</section>
  )
}

export default Shop