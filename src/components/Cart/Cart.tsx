'use client'

import { XMarkIcon } from '@heroicons/react/24/outline';
import "./Cart.css";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useCart } from './CartContext';

export default function Cart() {
  const { state, dispatch, isOpen, setIsOpen } = useCart();

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
                        {state.items.length === 0 && 
                          <p>Seu carrinho está vazio.</p>
                        }
                        <ul role="list" className="divider-gray">
                          {state.items.map((c) => (
                            <li key={`${c.id}-${c.color}-${c.accessory}`}>
                              <div className="img-wrapper">
                                <img alt={c.alt} src={c.src} />
                              </div>
                              <div className="content">
                                <div>
                                  <div className="name-price">
                                    <a href={`../../products/${c.id}`}>{c.name}</a>
                                    <span>
                                      {c.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                                    </span>
                                  </div>
                                  <p className="text-lg">{c.color} / {c.accessory}</p>
                                </div>
                                <div className="qty-remove my-3">
                                  <div className="incDecBtns">
                                    <button 
                                      className="incBtn btn-gray-800"
                                      onClick={() => dispatch({ 
                                        type: "INCREMENT_QUANTITY", payload: {
                                          id: c.id,
                                          color: c.color,
                                          accessory: c.accessory
                                        }
                                      })}
                                    >+</button>
                                    <span>
                                      {c.quantity}
                                    </span>
                                    <button
                                      className="decBtn btn-gray-800"
                                      onClick={() => dispatch({ 
                                        type: "DECREMENT_QUANTITY", 
                                        payload: {
                                          id: c.id,
                                          color: c.color,
                                          accessory: c.accessory
                                        }
                                      })}
                                    >-</button>  
                                  </div>

                                  <div key={c.id} className="flex">
                                    <button onClick={() => dispatch({
                                      type: "REMOVE_ITEM",
                                      payload: {
                                        id: c.id,
                                        color: c.color,
                                        accessory: c.accessory
                                      }
                                    })} className="btn-remove">
                                      Remove
                                    </button>
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
                      <p>{state.total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
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