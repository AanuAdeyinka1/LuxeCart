import { Head, Link } from '@inertiajs/react';
import { Button } from '@headlessui/react';
import Pink from '@/assets/images/pink.jpeg';
import HairOil from '@/assets/images/hairoil.jpeg';
import Foundation from '@/assets/images/oil.jpeg';
import { useState, useEffect } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {


    const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

        useEffect(() => {
            const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);
            return () => clearInterval(interval);
        }, []);

    const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };


    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const products = [
        {
            id: 1,
            name: 'Earthen Bottle',
            href: '#',
            price: '$48',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },

        {
            id:2,
            name: 'pink',
            href: '#',
            price: '$48',
            imageSrc: Pink,
             imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        
        },

         {
            id:2,
            name: 'Hair Oil',
            href: '#',
            price: '$48',
            imageSrc: HairOil,
             imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        
        },

         {
            id:4,
            name: 'Foundation',
            href: '#',
            price: '$30',
            imageSrc: Foundation,
             imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        
        }
      
    ];

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/80 dark:text-white/80">
                <div className="relative flex min-h-screen flex-col items-center justify-center">
                    <div className="relative w-full max-w-7xl px-6">
                        {/* Header */}
                        <header className="w-full bg-white border-b border-gray-200 shadow-sm mb-8">
                          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="flex h-20 items-center justify-between">
                                  {/* Logo */}
                                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                                      LuxeCart
                                  </div>

                                  {/* Navigation */}
                                  <nav className="flex items-center space-x-6">
                                      {auth.user ? (
                                          <Link
                                              href={route('dashboard')}
                                              className="text-gray-700 hover:text-red-500 text-sm sm:text-base font-medium transition"
                                          >
                                              Shop now
                                          </Link>
                                      ) : (
                                          <>
                                              <Link
                                                  href={route('login')}
                                                  className="text-gray-700 hover:text-red-500 text-sm sm:text-base font-medium transition"
                                              >
                                                  Log in
                                              </Link>
                                              <Link
                                                  href={route('register')}
                                                  className="inline-block bg-red-500 text-white px-4 py-2 text-sm sm:text-base rounded-md hover:bg-red-600 transition"
                                              >
                                                  Register
                                              </Link>
                                          </>
                                      )}
                                  </nav>
                              </div>
                          </div>
                        </header>



                        {/* Hero */}
                        <section className="text-center py-12">
                            <h1 className="text-4xl font-bold text-gray-800">Discover Premium Products</h1>
                            <p className="mt-4 mb-10 text-lg text-gray-600">Shop curated collections crafted for luxury and comfort.</p>
                            <Link
                            href={route('dashboard')}
                            className=" bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
                                Shop Now
                            </Link>
                        </section>

                        {/* Products */}
                        <main className="mt-6">
                            <div className="bg-white">
                                {/* New Arivals */}
                                <section className="mt-16">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">New Arrivals</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {products.slice(0, 3).map((product) => (
                                    <div key={product.id + '-new'} className="group relative border rounded-lg overflow-hidden shadow hover:shadow-lg">
                                        <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-64 object-cover" />
                                        <div className="p-4">
                                        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                        <p className="mt-1 text-lg font-semibold text-gray-700">{product.price}</p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                </section>
                                        {/* Featured products */}
                                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {products.map((product) => (
                                            <div key={product.id} className="group relative border rounded-lg overflow-hidden shadow hover:shadow-lg">
                                                <img
                                                    alt={product.imageAlt}
                                                    src={product.imageSrc}
                                                    className="w-full h-64 object-cover"
                                                />
                                                <div className="p-4">
                                                    <h3 className="text-sm font-medium text-gray-900 group-hover:underline">
                                                        {product.name}
                                                    </h3>
                                                    <p className="mt-1 text-lg font-semibold text-gray-700">{product.price}</p>
                                                    {/* <Button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                                                        Add to Cart
                                                    </Button> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                            {/* Best seller */}
                                <section className="mt-16">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Sellers</h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {products.slice(1, 5).map((product) => (
                                        <div key={product.id + '-best'} className="border rounded-lg overflow-hidden shadow hover:shadow-lg">
                                            <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-64 object-cover" />
                                            <div className="p-4">
                                            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                            <p className="mt-1 text-lg font-semibold text-gray-700">{product.price}</p>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="relative bg-pink-100 py-16 px-6 text-center mt-16 rounded-md">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Summer Glow Sale</h2>
                                <p className="text-lg text-gray-700 mb-6">Up to 40% off select beauty essentials.</p>
                                <Link href="#" className="inline-block bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition">Explore Deals</Link>
                                </section>
                                            {/* Category  */}
                                <section className="mt-20">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Shop by Category</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                                        {[
                                        { title: "Haircare", image: HairOil },
                                        { title: "Makeup", image: Foundation },
                                        { title: "Fragrances", image: Pink },
                                        ].map((cat, i) => (
                                        <Link key={i} href="#" className="group block rounded-lg overflow-hidden shadow hover:shadow-lg">
                                            <img src={cat.image} alt={cat.title} className="w-full h-48 object-cover" />
                                            <div className="p-4">
                                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-500">{cat.title}</h4>
                                            </div>
                                        </Link>
                                        ))}
                                    </div>
                                </section>

                                    <section className="bg-white mt-20 p-10 rounded shadow text-center">
                                        <h3 className="text-2xl font-bold text-gray-900">Join Our Luxe List 💌</h3>
                                        <p className="mt-2 text-sm text-gray-600">Sign up for beauty tips, exclusive offers, and more.</p>
                                        <form className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
                                            <input type="email" placeholder="you@example.com" className="border px-4 py-2 rounded w-full sm:w-64" />
                                            <button type="submit" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">Subscribe</button>
                                        </form>
                                    </section>

                                    <section className="mt-20 bg-gray-50 py-12 px-4 text-center rounded">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose LuxeCart?</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                            {[
                                            { title: "Cruelty-Free", desc: "We never test on animals." },
                                            { title: "Fast Delivery", desc: "Get products in 2-3 business days." },
                                            { title: "Premium Quality", desc: "We source only the finest ingredients." },
                                            { title: "Secure Checkout", desc: "Your payment information is safe." },
                                            ].map((item, idx) => (
                                            <div key={idx}>
                                                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                                            </div>
                                            ))}
                                        </div>
                                    </section>

                                     <section className="mt-20">
                                        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Follow Us on Instagram</h2>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                                            {[Pink, HairOil, Foundation, Pink, HairOil, Foundation].map((img, i) => (
                                            <img key={i} src={img} alt="Insta" className="w-full h-32 object-cover rounded" />
                                            ))}
                                        </div>
                                    </section>

 
                                    <section className="mt-16 bg-yellow-100 text-center py-6 rounded">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        ⚡ Flash Sale ends in <span className="font-mono text-red-600">{formatTime(timeLeft)}</span>
                                    </h2>
                                    </section>
                                          {/* Recommended                            */}
                                    <section className="mt-20">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended for You</h2>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                                            {products.slice(2, 6).map((product) => (
                                            <div key={product.id + '-rec'} className="border rounded-lg overflow-hidden shadow hover:shadow-lg">
                                                <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-64 object-cover" />
                                                <div className="p-4">
                                                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                                <p className="mt-1 text-lg font-semibold text-gray-700">{product.price}</p>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                        </section>


                            </div>
                        </main>

                        {/* Footer */}
                        <footer className="bg-gray-100 text-gray-700 py-10 mt-12">
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
                    </div>
                </div>
            </div>
        </>
    );
}
