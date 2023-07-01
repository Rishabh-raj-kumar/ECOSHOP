import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const filePath = path.join(process.cwd(), 'json', 'products.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const products = JSON.parse(jsonData);
    const newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(products));
    res.status(201).json({ message: 'Product added successfully!', product: newProduct });
  }
}