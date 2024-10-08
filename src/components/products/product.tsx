import { useEffect, useState } from "react";
import style from "./product.module.css";
import { FaHeart } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
}

export function Product() {
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
    <>
      <section className={style.products} id="products">
        <div className={style.sectionCenter}>
          <div className={`${style.sectionTitle} ${style.productsTitle}`}>
            <h3>products</h3>
            <div className={style.underline}></div>
          </div>
        </div>

        <div className={style.productCenter}>
          {products.length > 0 ? (
            products.map((product) => (
              <article className={style.product} key={product.id}>
                <a className={style.productContainer} href="">
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
      </section>
    </>
  );
}
