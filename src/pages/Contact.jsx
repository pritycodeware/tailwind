import React from 'react'

function Contact() {
  return (
    <div>
      <nav className="bg-white py-2 md:py-4">
  <div className="container px-4 mx-auto md:flex md:items-center">

    <div className="flex justify-between items-center">
      <a href="#" className="font-bold text-xl text-indigo-600">Agriculture Farming </a>
      <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
      </button>
    </div>
    <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
      <a href="Home" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</a>
      <a href="services" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Services</a>
      <a href="Blog" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Blog</a>
      <a href="Contact" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</a>
      <a href="Login" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
      <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
    </div>
  </div>
</nav>

<div className="container my-24 px-6 mx-auto">
  <section className="mb-32 text-gray-800">
  <img alt="content" className="object-cover object-center h-[450px] w-[100%]" src="https://cdn.pixabay.com/photo/2017/09/28/13/27/nature-2795521__480.jpg" />
    <div className="flex items-center mb-6">
      <div>
      </div>
    </div>
    <h1 className="font-bold text-3xl mb-6">An intriguing title for an interesting article</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi harum tempore
      cupiditate asperiores provident, itaque, quo ex iusto rerum voluptatum delectus corporis
      quisquam maxime a ipsam nisi sapiente qui optio! Dignissimos harum quod culpa officiis
      suscipit soluta labore! Expedita quas, nesciunt similique autem, sunt, doloribus pariatur
      maxime qui sint id enim. Placeat, maxime labore. Dolores ex provident ipsa impedit, omnis
      magni earum. Sed fuga ex ducimus consequatur corporis, architecto nesciunt vitae ipsum
      consequuntur perspiciatis nulla esse voluptatem quos dolorum delectus similique eum vero
      in est velit quasi pariatur blanditiis incidunt quam.
    </p>
  </section>

{/* start from */}

<div>
        <div className="px-6 py-12 md:px-12 bg-gray-100 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32 gap-y-28">
        <div className="grid lg:grid-cols-2 gap-14 flex items-center">
          <div className="mt-12 lg:mt-0">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer <br /><span className="text-blue-600">for your business</span></h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet, itaque accusantium odio, soluta, corrupti aliquam
              quibusdam tempora at cupiditate quis eum maiores libero
              veritatis? Dicta facilis sint aliquid ipsum atque?
            </p>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
              <form>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="mb-6">
                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="First name" />
                  </div>
                  <div className="mb-6">
                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Last name" />
                  </div>
                </div>
                <input type="email" className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
                <input type="contact" className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Contact" />
                <input type="password" className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                <div className="form-check flex justify-center mb-6">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                 <label class="form-check-label" for="flexCheckDefault">Checkbox</label>
                </div>
                <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block px-6 py-2.5 mb-6 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign up</button>
                <div className="text-center">
                  <p className="mb-6">or sign up with:</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</div>

{/* close form */}

{/* footer     */}

<footer className="footer-1 bg-gray-100 py-8 sm:py-12 gap-0">
  <div className="container mx-auto px-2">
    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
        <h5 className="text-xl font-bold mb-6">Blog</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Cool stuff</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Random feature</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team feature</a>
          </li>
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
        <h5 className="text-xl font-bold mb-6">Resources</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource name</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</a>
          </li>
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 className="text-xl font-bold mb-6">Contact </h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</a>
          </li>
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 className="text-xl font-bold mb-6">Help</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
        <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
        <div className="flex sm:justify-center xl:justify-start">
          <a href="" className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="" className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
            <i className="fab fa-google-plus-g"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
      <div className="sm:w-full px-4 md:w-1/6">
        <strong>vinratech#</strong>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 className="font-bold mb-2">Address</h6>
        <address className="not-italic mb-4 text-sm">
        1/1005, vishal khand - 1, gomati nagar lucknow, 226010.
        </address>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 className="font-bold mb-2">Free Resources</h6>
        <p className="mb-1 text-sm">PRIORITY COMMODITIES <strong> BLOG</strong>.
          <em>Post</em></p>
      </div>
      <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
        <button className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">Get Started</button>
      </div>
    </div>
  </div>
</footer>

    {/* footer close */}


</div>

  )
}

export default Contact