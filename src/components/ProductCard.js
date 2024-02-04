import './ProductCard.css';

export const ProductCard = ({product}) => {
  const { image, name, price } = product;
  return (
      <div className='productCard'>
        <img src={image} alt={name} />
        <p className='name'>{name}</p>
        <div className='action'>
          <p>${price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
  )
}
