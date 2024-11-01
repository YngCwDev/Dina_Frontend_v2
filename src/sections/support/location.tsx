"use client";

import MapLocation from '@/components/map'
import React from 'react'

const Location = () => {
    const Maputo = { lat: -25.969268, lng: 32.573176 };
    const Tete = { lat: -16.138379, lng: 33.610681 };
  return (
    <div className='bg-white flex justify-center'>
          <div className='flex gap-4'>
              <MapLocation current={Maputo} classname="w-[49vw]" />
              <MapLocation current={Tete} classname="w-[49vw]" />
            </div>
    </div>
  )
}


export  default Location;
 