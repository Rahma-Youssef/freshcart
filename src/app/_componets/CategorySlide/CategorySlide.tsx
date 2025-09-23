import getAllCategories from '@/apis/allCategories';
import React from 'react'
import SwiperCategory from '../SwiperCategory/SwiperCategory';
import { Category } from '@/Types/Product.type';

const CategorySlide = async () => {

  const categories: Category[] = await getAllCategories();


  return (
    <div>
    <SwiperCategory categories={categories} />
    </div>
  )
}

export default CategorySlide