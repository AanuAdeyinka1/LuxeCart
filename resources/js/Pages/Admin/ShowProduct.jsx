import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import Form from '@/Components/Form';  
import { HeroUIProvider, Image } from '@heroui/react';


const CreateProduct = ({product}) => {
  return (
    <HeroUIProvider>
        <AuthenticatedLayout>
        
       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <img
                          alt={product.title}
                          src={`/storage/${product.photo}`}
                          className="w-200 h-200 object-cover rounded-xl  "
                />

              <p className='font-bold text-2xl'>{product.name}</p>
              <p className='font-bold text-2xl'>${product.price}</p> 
            
          {/* <div className='flex gap-5 mt-5 items-center w-20 h-20'>
              <Link href={route('product.edit' , { product: product.id })} className='bg-green-400 p-3 hover:bg-green-700 rounded-lg text-white'>Edit</Link>
              <Link method="delete" href={route('product.delete' , { product: product.id })} className='bg-red-600 hover:bg-red-700 p-3 rounded-lg text-white'>Delete</Link>
              <Link href={route('dashboard')} className='bg-blue-400 p-3 hover:bg-blue-700 rounded-lg text-white'>Cancel</Link>
        </div> */}
        </div>
      
      
       
    </AuthenticatedLayout>
    </HeroUIProvider>
  
    
  )
}

export default CreateProduct