'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import "./Cart.css";
import { useCart } from './CartContext';

export default function Cart() {
  const { cart, dispatch, isOpen, setIsOpen } = useCart();

  const handleRemove = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={setIsOpen} className="shop-cart">
        <DialogBackdrop
          transition
          className="dialog-backdrop"
        />
        <div className="fixedOvHidden">
          <div className="absOvHidden">
            <div className="fixedPointerNone">
              <DialogPanel
                transition
                className="dialog-panel"
              >
                <div className="flex-bg-shadow">
                  <div className="product">
                    <div className="top-cart">
                      <DialogTitle>Shopping cart</DialogTitle>
                      <div className="close-btn-wrapper">
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    <div className="products">
                      <div className="flow-root">
                        <ul role="list" className="divider-gray">
                          {cart.items.map((c) => (
                            <li key={c.id}>
                              <div className="img-wrapper">
                                <img alt={c.alt} src={c.src} />
                              </div>
                              <div className="content">
                                <div>
                                  <div className="name-price">
                                    <h3>
                                      <a href={`../../products/${c.id}`}>{c.name}</a>
                                    </h3>
                                    <p>{c.price}</p>
                                  </div>
                                  <p>{c.color}</p>
                                </div>
                                <div className="qty-remove">
                                  <p>Qty {c.quantity}</p>
                                  <div key={c.id} className="flex">
                                    <button onClick={() => handleRemove(c.id)} className="btn-remove">Remove</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bottom-cart">
                    <div className="subtotal">
                      <p>Subtotal</p>
                      <p>$100.00</p>
                    </div>
                    <p>Shipping and taxes calculated at checkout.</p>
                    <div className="checkout-wrapper">
                      <a
                        href="#"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="continue-shopping">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}