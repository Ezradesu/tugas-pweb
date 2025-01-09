import React from 'react'
import { Table, TableBody, TableHeader, TableRow } from '@/components/ui/table'
import AddProduct from './addProduct';
import DeleteProduct from './deleteProduct';
import UpdateProduct from './updateProduct';

type Product = {
    id: number;
    title: string;
    price: number;
}
async function getProducts() {
    const res = await fetch("https://fake-crud-api.vercel.app/products", {
        cache: 'no-store',
    });
    return res.json();
    
}

export default async function ProductList() {
    const product: Product[] = await getProducts();
  return (
    <div>
        <div className="py-4 px-10">
            <AddProduct />
        </div>
      <Table className='table'>
        <TableHeader>
            <TableRow>
                <th className='h-10'>#</th>
                <th className='h-10'>PRODUCT NAME</th>
                <th className='h-10'>PRICE</th>
                <th className='h-10'>ACTIONS</th>
            </TableRow>
        </TableHeader>
        <TableBody>
             {product.map((product, index) => (
          <TableRow key={product.id}>
            <td className='text-center h-14'>{index + 1}</td>
            <td className='text-center h-20'>{product.title}</td>
            <td className='text-center'>{product.price}</td>
            <td className='flex justify-center gap-6 mt-5'>
                <DeleteProduct {...product} />
                <UpdateProduct {...product} />
            </td>
          </TableRow>
        ))}
            
        </TableBody>
       
      </Table>
    </div>
  );
}
