import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Welcome to Furydom
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Furydom is a vibrant community of passionate developers dedicated to innovation, collaboration, and growth. Founded by Vineet Somani, our platform is designed to bring together like-minded individuals who share a zeal for coding, learning, and pushing the boundaries of technology.

                        </p>
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Our Story
                        </h2>
                        <p className="mt-4 text-gray-600">
Furydom was born out of a desire to create a space where developers could connect, share ideas, and work together on projects that matter. Our founder, Vineet Somani, recognized the need for a community that fosters creativity, knowledge-sharing, and camaraderie. With Furydom, we aim to provide a supportive ecosystem that empowers developers to turn their vision into reality.

                        </p>
                         <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Join the Movement
                        </h2>
                        <p className="mt-4 text-gray-600">
If you're a developer who is passionate about building something new, something exciting, or something that makes a difference, then Furydom is the place for you. Join our community today and become a part of a movement that is shaping the future of technology.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
