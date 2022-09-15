import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <Carousel responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite={true}
      >

        {
          [ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYoNAtb1z65Z0yEQcEYuWvQi-OMw95_QfAZw&usqp=CAU',
            'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgtAkv-WwZyiiXQEjoMg4-ouTDMWXe6yH6g&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sgCG_4uP3A41xsuFTHe4Scmj7-8MWGNXlg&usqp=CAU',
            'https://images.pexels.com/photos/2253359/pexels-photo-2253359.jpeg?auto=compress&cs=tinysrgb&w=600',
          ].map((index, i, arr) => (
            <div className='px-2 pb-10' key={i} >
              <img src={index} alt="loading..." className='w-full h-[270px]' />
            </div>
          ))
        }

      </Carousel>

      {/* card start */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Services</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Nonacademic agricultural Services:
              These can be referred to as skill-based agricultural services or vocational agricultural services.
              Nonacademic or skill-based agricultural services can be sub classified into the following. i.
              Skilled agricultural services:
              These are agriculture services that are skilled in nature.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 hover:bg-green-400 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover  object-center mb-6" src="https://tse3.mm.bing.net/th?id=OIP.zp3ONutCOki8pt9z45SycgHaE7&pid=Api&P=0" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Technology transfer services</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Hard working</h2>
                <p className="leading-relaxed text-base">Responsible for passing out advice, knowledge, and information to farmers.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 hover:bg-green-400 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://tse3.mm.bing.net/th?id=OIP.13nbMZmSswvnHje632w0bgHaEK&pid=Api&P=0" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Advisory Services</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Hard working</h2>
                <p className="leading-relaxed text-base">Responsible for assisting farmers in case of particular issues they face.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 hover:bg-green-400 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://tse4.mm.bing.net/th?id=OIP.ceqvblIFeaSqENLyNQFMBwHaE8&pid=Api&P=0" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Facilitation Services</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Hard working</h2>
                <p className="leading-relaxed text-base">Responsible for supporting farmers to analyse their problems and develop.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100  hover:bg-green-400 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://tse2.mm.bing.net/th?id=OIP.yqQybRAyP-RrCun2cf1G-AHaFj&pid=Api&P=0" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Public Extension Services:</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Hard working</h2>
                <p className="leading-relaxed text-base">The Public Extension System handles the Extension Services and Public .</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Slider


