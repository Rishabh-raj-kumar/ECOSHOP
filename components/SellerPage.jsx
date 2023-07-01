import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SellerPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newProduct = { title, description, price, image };
    const response = await fetch('/api/pushproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    if (response.ok) {
      router.push('/products');
    }
  };

  return (
    <div className=' w-screen grid place-items-center'>
      <div className=' mt-8'>
      <h1 className='m-4 p-2 text-3xl font-medium border-b-2 border-b-emerald-950'>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className='p-2'>
          <label htmlFor="title" className='m-2 p-2 text-2xl font-medium'>Title : </label>
          <input
            type="text"
            id="title"
            value={title}
            className='border border-black p-2 rounded-md shadow-lg'
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className='p-2'>
          <label htmlFor="description" className='m-2 p-2 text-2xl font-medium'>Description : </label>
          <input
            type="text"
            id="description"
            value={description}
            className='border border-black p-2 rounded-md shadow-lg'
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className='p-2'>
          <label htmlFor="price" className='m-2 p-2 text-2xl font-medium'>Price : </label>
          <input
            type="number"
            id="price"
            value={price}
            className='border border-black p-2 rounded-md shadow-lg'
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className='p-2'>
          <label htmlFor="image" className='m-2 p-2 text-2xl font-medium'>Image</label>
          <input
            type="file"
            id="image"
            value={image}
            accept="image/*"
            className='border border-black p-2 rounded-md shadow-lg'
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <button type="submit" className='mx-20 mt-4 p-2 bg-gray-950 text-white rounded-md'>Add Product</button>
      </form>
    </div>
    </div>
  );
};

export default SellerPage;