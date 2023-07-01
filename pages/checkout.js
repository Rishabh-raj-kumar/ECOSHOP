import fs from 'fs';
import path from 'path';

const ProductsPage = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
        <div key={product.id} class="lg:w-1/4 md:w-1/2 p-4 w-full float-left">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={`${product.image}`}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{product.title}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{product.description}</h2>
          <p class="mt-1">{product.price}</p>
        </div>
      </div>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'json', 'data.json');
  const jsonData = await fs.promises.readFile(filePath, 'utf-8');
  const products = JSON.parse(jsonData);
  return {
    props: {
      products,
    },
  };
}

export default ProductsPage;