import React from 'react'
import Footer from './Footer'

export default function Hero() {
  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product1.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Makeup</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product2.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Brushes</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product3.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Home needs</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product4.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">water bottle</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product3.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Home needs</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product6.jpg"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Stationary</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/brush1.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Brushes</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product2.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Home needs</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>

<div id="sticky-banner" tabindex="-1" class="sticky top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
    <div class="flex items-center mx-auto">
        <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span class="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600">
                <span class="sr-only">Light bulb</span>
            </span>
            <span>New Products launching Every Month <a href="/" class="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">ECOSHOP</a></span>
        </p>
    </div>
    <div class="flex items-center">
        <button data-dismiss-target="#sticky-banner" type="button" class="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close banner</span>
        </button>
    </div>
</div>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product1.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Makeup</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product2.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Brushes</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product3.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Home needs</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product4.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">water bottle</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product3.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Home needs</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product6.jpg"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Stationary</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/brush1.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Brushes</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full  hover:shadow-xl hover:delay-150 hover:ease-in-out hover:scale-95">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/product2.png"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Home needs</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
</>
  )
}
