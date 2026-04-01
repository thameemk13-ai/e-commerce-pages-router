import { products } from "@/data/products";
import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.price}</p>
          <Link href={`/products/${p.id}`}>see</Link>
        </div>
      ))}
    </div>
  );
}