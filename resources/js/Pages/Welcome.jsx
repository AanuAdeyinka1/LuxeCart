import { Head, Link } from '@inertiajs/react';
import { Button } from '@headlessui/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
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
        // Add more unique products here
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
                                                    <Button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                                                        Add to Cart
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
