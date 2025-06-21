import React from 'react'

const CommerceTopImage = () => {
  return (
    <div className="relative mb-5">
        <div className="bg-black relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZb360NlZhomuQL-pSLFqIlCLtQ63jXopSUQ&s"
            alt=""
            className="h-53 w-full object-cover opacity-55"
          />
          <div className="absolute top-0 left-0 flex justify-center items-center h-full flex-col w-full gap-5">
            <h1 className="text-4xl font-bold text-white text-center">
              Welcome to Our Marketplace
            </h1>
            <p className="text-xl text-white text-center">
              Discover amazing deals on unique items
            </p>
          </div>
        </div>
      </div>
  )
}

export default CommerceTopImage
