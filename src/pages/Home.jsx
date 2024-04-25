import React, { useEffect } from 'react'
import Banner from '../components/Banner/Banner'
import { Container } from "reactstrap";
import Flash_Sales from '../components/Home/Flash_Sales';
import Categories from '../components/Home/Categories';
import Best_Sales from '../components/Home/best_Sale';
import Advertise from '../components/Home/Advertise';
import OurProducts from '../components/Home/OurProducts';
import Arrivals from '../components/Home/Arrivals';
import data from '../components/UI/Data'
import { addProducts } from "../store/productSlice";
import {addProductFav} from '../store/favProductSlice'
import { useDispatch, useSelector } from 'react-redux';
import {getCategories} from '../store/categoriesSlice'
import {getProducts} from '../store/productReducer'

const Home = () => {
  const product = useSelector((state) => state.products.products)

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const get = async() =>{
     await dispatch(getCategories())
     await dispatch(getProducts(50))
    }
  
    get();
   }, [dispatch]);
  return <> 
   
   <Banner/> 
   <Container >
    <Flash_Sales  products={product &&product} addProducts={addProducts} addProductFav={addProductFav} />
   </Container>

   <Container >
    <Categories/>
   </Container>
   <Container >
    <Best_Sales  products={product &&product} addProducts={addProducts} addProductFav={addProductFav} />
   </Container>
   <Container >
    <Advertise/>
   </Container>
   <Container >
    <OurProducts  products={product &&product} addProducts={addProducts} addProductFav={addProductFav} />
   </Container>
   <Container >
    <Arrivals/> 
</Container>
  </>
}

export default Home