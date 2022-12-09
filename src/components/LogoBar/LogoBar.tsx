import React from 'react'
import RamtechLogoSvg from '../SvgComponents/RamtechLogoSvg'
import UE from '../SvgComponents/UE'

function LogoBar() {
  return (
    <div
        className='w-full
                  flex items-center justify-center
                  pt-2 pb-2'
    >
        <div
            className='w-[80%]
                      flex flex-col lg:flex-row items-center
                      '
        >
            <div
                className='flex items-center mb-8 lg:mb-0'
            >
                <div
                    className='w-[72px] h-[72px]
                              flex items-center justify-center
                              mr-2'       
                >
                    <RamtechLogoSvg />
                </div>
                <div>
                    <p
                        className='text-2xl font-bold'
                    >
                        RAMTECH
                    </p>
                    <p
                        className='text-[#3490c9] font-medium text-lg'
                    >
                        Research Center on Advanced Materials & Technologies
                    </p>
                </div>
            </div>
            <a
                href='https://european-union.europa.eu/'
                target="_blank"
                rel="noreferrer"
                className='flex flex-col lg:ml-auto'
            >
                <UE />
                <p
                    className='mt-1 font-medium text-[#1e258f]'
                >
                    EUROPEAN UNION
                </p>
            </a>
        </div>
    </div>
  )
}

export default LogoBar