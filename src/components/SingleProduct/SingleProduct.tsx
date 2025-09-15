'use client'

import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { Radio, RadioGroup } from '@headlessui/react';
import { singleProduct } from '../../data.json';
import { Link, useParams } from 'react-router-dom';
import BtnCart from '../BtnCart/BtnCart';
import "./SingleProduct.css";

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function SingleProduct() {
  const [selectedColor, setSelectedColor] = useState<any>(
    ""
  )
  const [selectedAcessory, setSelectedAcessory] = useState<any>(
    ""
  )

  const { productId } = useParams();
  const product = singleProduct.find((product: any) => product.id === productId);
  const { name, price, breadcrumbs, images, colors, accessories, description, highlights, details } = product || {};
  const selectedImage = product?.images?.find(img => img.id === selectedColor?.imageId);

  useEffect(() => {
    if(product?.colors?.length) {
      setSelectedColor(product.colors[0]);
    }
    if(product?.accessories?.length) {
      setSelectedAcessory(product.accessories[0]);
    }
  }, [product]);
  
  return (
    <div className="single-product">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol role="list">
          {breadcrumbs?.map((b: any) => (
            <li key={b.id}>
              <Link to={`../category/${b.category}`}>
                {b.name}
              </Link>
              <svg
                fill="currentColor"
                width={16}
                height={20}
                viewBox="0 0 16 20"
                aria-hidden="true"
                className=""
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </li>
          ))}
          <li>
            <Link to="" aria-current="page">
              {name}
            </Link>
          </li>
        </ol>
      </nav>

      {/* Image gallery */}
      <div className="product-gallery">
        {images && images?.map((image, ind): any => (
          <div className="product-img" key={image.id}>
            {ind === 0 ? (
              <img
                key={image.id}
                alt={image.alt}
                src={image.src}
                className="left-img"
              />
            ) : (ind == 1 || ind == 2) ? (
              <div className="center-imgs">
                <img
                key={image.id}
                  alt={image.alt}
                  src={image.src}
                  className=""
                />
              </div>
            ) : (
              <img
                key={image.id}
                alt={image.alt}
                src={image.src}
                className="right-img"
              />
            )}
          </div>
        ))}
      </div>

      {/* Product info */}
      <div className="product-info">
        <div className="title">
          <h1>{name}</h1>
        </div>

        {/* Options */}
        <div className="options">
          <h2>Product information</h2>
          <p>{price}</p>

          {/* Reviews */}
          <div className="reviews">
            <h3>Reviews</h3>
            <div>
              <div className="star-icon">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    aria-hidden="true"
                    className={classNames(
                      reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                      'size-5 shrink-0',
                    )}
                  />
                ))}
              </div>
              <p>{reviews.average} out of 5 stars</p>
              <Link to={reviews.href}>
                {reviews.totalCount} reviews
              </Link>
            </div>
          </div>

          <form>
            {/* Colors */}
            <div className="colors">
              <h3>Color</h3>

              <fieldset aria-label="Choose a color">
                <RadioGroup value={selectedColor || ""} onChange={setSelectedColor} className="radiogroup">
                  {colors?.map((color: any) => (
                    <Radio
                      key={color.name}
                      value={color}
                      aria-label={color.name}
                      className={classNames(
                        color.selectedClass,
                        'colorSelected',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(color.class, 'colorCircle')}
                      />
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>

            {/* Accessories */}
            <div className="accessories">
              <div className="title">
                <h3>Accessories</h3>
              </div>

              <fieldset aria-label="Choose a size">
                <RadioGroup
                  value={selectedAcessory || ""}
                  onChange={setSelectedAcessory}
                  className="radio-group"
                >
                  {accessories?.map((accessory: any) => (
                    <Radio
                      key={accessory.name}
                      value={accessory}
                      disabled={!accessory.inStock}
                      className={classNames(
                        accessory.inStock
                          ? 'active'
                          : 'inactive',
                        'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6',
                      )}
                    >
                      <span>{accessory.name}</span>
                      {accessory.inStock ? (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                        >
                          <svg
                            stroke="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            className="absolute inset-0 size-full stroke-2 text-gray-200"
                          >
                            <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                          </svg>
                        </span>
                      )}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>

            {product && <BtnCart className="add-cart btn-orange" 
              product={{
                ...product,
                color: selectedColor?.name,
                accessory: selectedAcessory?.name,
                alt: selectedImage?.alt,
                src: selectedImage?.src,
                quantity: 1,
              }}
            />
            }
          </form>
        </div>

        <div className="description">
          {/* Description and details */}
          <div className="title">
            <h3>Description</h3>

            <div className="content">
              <p>{description}</p>
            </div>
          </div>

          <div className="highlights">
            <h3>Highlights</h3>

            <div className="content">
              <ul role="list">
                {highlights?.map((highlight: any) => (
                  <li key={highlight}>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="details">
            <h2>Details</h2>

            <div>
              <p>{details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}