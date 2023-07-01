import fs from 'fs';
import path from 'path';

const ProductsPage = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
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