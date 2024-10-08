import { useEffect, useState } from "react";
import style from "./product.module.css";
import { FaHeart } from "react-icons/fa6";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
}

export const Product: React.FC<Product> = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className={style.products}>
        <h2>products</h2>

        <div className={style.productsContainer}>
          {products.length > 0 ? (
            products.map((product) => (
              <article className={style.product} key={product.id}>
                <a
                  className={style.productContainer}
                  href="./product.html?id=${id}"
                >
                  <img
                    className={style.productImg}
                    src={product.image}
                    alt={product.title}
                  />
                  <span>
                    <FaHeart />
                  </span>
                </a>
                <div className={style.productInfo}>
                  <h4 className={style.title}>{product.title}</h4>
                  <h3 className={style.category}>{product.category}</h3>
                  <p className={style.price}>&#x20A6;{product.price}</p>
                </div>
                <div className={style.productFooter}>
                  <button className={style.prodBtn}>Add to cart</button>
                </div>
              </article>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
