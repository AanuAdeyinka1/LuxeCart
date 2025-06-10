'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types';



export default function Cart({products= [] }) {
  const [open, setOpen] = useState(true)

  Cart.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        href: PropTypes.string,
        price: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
      })
  ).isRequired,
};
  const subtotal = products.reduce((total, item) => {
  const price = item.price ? parseFloat(item.price.replace('$', '')) : 0;
  const quantity = item.quantity ?? 1;
  return total + price * quantity;
}, 0).toFixed(2);

const backendURL = import.meta.env.VITE_NEXT_PUBLIC_BACKEND_URL || '';



  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
       
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
      />
  

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-10 right-15 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-x-icon lucide-x">
                        <path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        {/* <XMarkIcon aria-hidden="true" className="size-6" /> */}
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                     {products.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                  ) : (
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                     
                     {products.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img 
                                alt={product.name}
                                src={`${backendURL}/storage/${product.photo}`} 
                                className="size-full object-cover" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product.href}>{product.name}</a>
                                  </h3>
                                  <p className="ml-4">{product.price}</p>
                                </div>
                
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="flex">
                                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  )}

                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{subtotal}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
