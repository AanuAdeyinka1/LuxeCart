import React from 'react';
import { useForm } from '@inertiajs/react';
import { Form, Input, Button } from '@heroui/react';
import { motion } from 'framer-motion';

export default function CreateProduct() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    price: '',
    photo: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route('products.store'), {
      forceFormData: true,
      onSuccess: () => {
        reset();
        alert('Product created successfully!');
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-xl mx-auto mt-14 p-8 bg-gray-100 shadow-xl rounded-xl"
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add New Product
      </h1>

      <Form
        onSubmit={handleSubmit}
        className="space-y-6"
        encType="multipart/form-data"
      >
        {/* Product Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Product Name</label>
          <input
            isRequired
            name="name"
            placeholder="Enter product name"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            className="w-full"
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Price ($)</label>
          <input
            isRequired
            name="price"
            type="number"
            step="0.01"
            placeholder="Enter price"
            value={data.price}
            onChange={(e) => setData('price', e.target.value)}
            className="w-full"
          />
          {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price}</p>}
        </div>

        {/* Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Product Image</label>
          <input
            type="file"
            onChange={(e) => setData('photo', e.target.files[0])}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {errors.photo && <p className="text-sm text-red-500 mt-1">{errors.photo}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            color="primary"
            type="submit"
            disabled={processing}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow"
          >
            {processing ? 'Saving...' : 'Create Product'}
          </Button>
        </div>
      </Form>
    </motion.div>
  );
}
