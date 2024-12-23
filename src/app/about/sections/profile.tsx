import React from 'react'
import img2 from './../../../../public/img/img-2.png'
import img3 from './../../../../public/img/img-3.png'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className="bg-zinc-50 w-full p-[2%] md:px-[18%] px-4 text-zinc-950 md:py-[5%] py-[10%]">
      <div className="bg-red-700 h-[10px] w-[60px]"></div>
      <div className="flex justify-between items-center flex-wrap">
        <div className="md:w-[45%]">
          <h2 className="text-[1.5rem] font-bold mb-8 md:mt-0 mt-4">
            Our Mission
          </h2>
          <p className="md:leading-loose leading-normal ">
            At the heart of everything we do is a commitment to safety,
            efficiency, and innovation. Our mission is to provide high-quality
            products and services that enhance productivity and safeguard
            operations across industries. By continuously improving our
            processes and listening to customer needs, we strive to be the most
            trusted partner in the market.
          </p>
        </div>
        <Image
          className="md:w-[30vw] w-[100%] md:my-0 my-4 "
          src={img2}
          alt=""
        />
      </div>
      <br />
      <div className="flex justify-between items-center flex-wrap">
        <Image
          className="md:w-[30vw] w-[100%]  order-last md:order-first md:my-0 my-4 "
          src={img3}
          alt=""
        />
        <div className="md:w-[45%]">
          <h2 className="text-[1.5rem] font-bold mb-8 md:mt-0 mt-4">
            Why Choose Us?
          </h2>
          <div>
            <p className="md:leading-loose leading-normal ">
              We are dedicated to delivering exceptional quality and service.
              Our focus on customer satisfaction means that we work closely with
              each client to understand their unique challenges and provide
              tailored solutions. From product selection to after-sales support,
              we ensure that every step of your experience with us is seamless,
              efficient, and reliable. Choose us for:
            </p>
            <ul className="pl-4 list-disc list-inside">
              <li>High-quality products</li>
              <li>Personalized service</li>
              <li>Industry expertise</li>
              <li>Commitment to safety and sustainability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile