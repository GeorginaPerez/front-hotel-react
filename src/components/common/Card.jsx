import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({ img, title, legend, textButton = 'Ver más detalles', goTo}) => {

    return (
        <div className="p-4 md:w-1/3">
          <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
            <img
                className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={img}
                alt="blog"
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                {title}
              </h1>
              <p className="leading-relaxed mb-3">
                {legend}
              </p>
              <div className="flex items-center flex-wrap ">
                <Link className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"  
                to={{
                        pathname: goTo,
                    }}>
                  {textButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
}
