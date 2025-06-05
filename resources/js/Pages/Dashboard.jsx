import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { Button, Form } from '@heroui/react';
import { useState } from 'react';
import { Link } from '@heroui/react';


export default function Dashboard({ product }) {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');

    const categories = [...new Set(product.map((item) => item.category))];
  
    const {processing} = useForm();

    
    // const handleAddToCart = (productId) => {
    //     post(route('cart.store', { product_id: productId }));
        
    // };
    
    const filteredProducts = product.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === 'all' || item.category === category;
        return matchesSearch && matchesCategory;
    });

    return (
        <AuthenticatedLayout
            header={
                <div className="relative bg-gradient-to-r from-red-100 via-white to-red-100 rounded-xl p-6 shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900">Welcome to LuxeCart</h1>
                        <p className="text-sm text-gray-500">Your one-stop shop for premium products</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 items-stretch w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full sm:w-64 rounded-md border px-4 py-2 shadow-sm focus:ring-2 focus:ring-red-500"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full sm:w-auto rounded-md border md:px-8 py-2 shadow-sm focus:ring-2 focus:ring-red-500"
                        >
                            <option value="all">All Categories</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>
                </div>
                   
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-shopping-cart-icon lucide-shopping-cart">
                      <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" 
                      className="absolute top-2 right-2 w-10 h-10 opacity-2 md:static md:opacity-100"/>
                    </svg>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 text-lg font-medium">
                            You're logged in! Browse our premium selection:
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 pb-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredProducts.map((item) => (
                        <div key={item.id} className="group bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                            <a href={route('product.show', { product: item.id })}>
                                <img
                                    src={`/storage/${item.photo}`}
                                    alt={item.name}
                                    className="w-full h-60 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600">{item.name}</h3>
                                <p className="text-gray-600 text-sm">${item.price}</p>
                            </a>
                            {/* <Form
                            onSubmit={handleAddToCart}
                             encType="multipart/form-data"
                            > */}

                                <Button
                                 type="submit"
                                 disabled={processing}
                                 //adds route to button this way:
                                 onPress={() => {router.post(route('cart.store', {product_id: item.id}))}}
                                 
                                 className="mt-4 w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                                >
                                {processing ? 'Adding to cart...' : 'Add to Cart'}
                            </Button>
                           
                        </div>
                    ))}
                </div>
            </div>

           <footer className="bg-gray-200 text-gray-700 py-10 mt-12">
                            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                                <div>
                                    <h4 className="text-lg font-bold mb-2">About LuxeCart</h4>
                                    <p className="text-sm">Luxury is your go-to destination for premium lifestyle products. Curated with quality in mind.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2">Customer Service</h4>
                                    <ul className="text-sm space-y-1">
                                        <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                                        <li><Link href="#" className="hover:underline">Shipping & Returns</Link></li>
                                        <li><Link href="#" className="hover:underline">FAQs</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2">Shop</h4>
                                    <ul className="text-sm space-y-1">
                                        <li><Link href="#" className="hover:underline">New Arrivals</Link></li>
                                        <li><Link href="#" className="hover:underline">Best Sellers</Link></li>
                                        <li><Link href="#" className="hover:underline">Gift Cards</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2">Follow Us</h4>
                                    <div className="flex space-x-3">
                                        <a href="#" className="hover:text-red-500">Facebook</a>
                                        <a href="#" className="hover:text-red-500">Instagram</a>
                                        <a href="#" className="hover:text-red-500">Twitter</a>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-8 text-center text-xs text-gray-500">&copy; {new Date().getFullYear()} Luxury. All rights reserved.</p>
                        </footer>
        </AuthenticatedLayout>
    );
}
