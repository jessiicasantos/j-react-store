import { Link, useParams } from 'react-router-dom';
import { singleProduct } from '../../data.json';
import Star from '../../assets/img/star';

const Category = () => {
  const { categoryId } = useParams();
  const category = singleProduct.filter((product) => product.category === categoryId);

  return (
    <div className="grid-four-columns">
      <h3>{categoryId}</h3>

      <div>
        {category?.map((product) => (
          <Link key={product.id} to={`../../products/${product.id}`}>
            {product.hot === true &&
              <h5>Hot</h5>
            }

            {product.images?.map((image) => (
              image.id === 0 && (
                  <img
                    key={image.id}
                    alt={image.alt}
                    src={image.src}
                  />
                )
              )
            )}

            <div className="rating">
              {product.rating?.map((r) => (
                <Star key={`r-${r}`} fill="yellow" stroke="gray" />
              ))}
            </div>

            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
