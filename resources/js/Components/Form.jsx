import React, { useState } from 'react';
import { router, useForm } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Form() {
  const [values, setValues] = useState({ name: '', price: '' });
  const [photo, setPhoto] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { processing, post } = useForm();

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  function handleFileChange(e) {
    setPhoto(e.target.files[0]);
  }

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('name', values.name);
    formData.append('price', values.price);

    router.post('welcome', formData, {
      forceFormData: true,
      onSuccess: () => setShowForm(false),
    });
  }

  return (
    <div className="relative z-10">
      <button
        onClick={openForm}
        className="flex justify-center items-center mt-6 mx-auto rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 font-semibold shadow hover:shadow-md hover:brightness-110 transition-all duration-300"
      >
        Create Product
      </button>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                New Product
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Photo
                  </label>
                  <input
                    id="photo"
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    required
                    placeholder="e.g., Luxe Vase"
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price ($)
                  </label>
                  <input
                    id="price"
                    type="number"
                    onChange={handleChange}
                    value={values.price}
                    required
                    placeholder="e.g., 59.99"
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={closeForm}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={processing}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
                  >
                    {processing ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
