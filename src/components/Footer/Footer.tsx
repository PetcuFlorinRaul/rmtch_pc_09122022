import React from 'react'

function Footer() {
  return (
    <div
        className='flex items-center justify-center
                  w-full
                  bg-[#054164]
                  text-white'
    >
        <div
            className='flex flex-col items-center lg:flex-row lg:items-start 
                      w-[80%]
                      pt-4 pb-4'
        >
            <div
                className='flex flex-col mr-10'
            >
                <p
                    className='font-semibold text-2xl'
                >
                    Contact
                </p>
                <ul>
                    <li
                        style={{
                            display: "flex"
                        }}
                    >
                        <div className='mr-2 font-semibold'>
                            Adress:
                        </div>
                        <div
                            className='max-w-[200px]'
                        >
                            Universitatea Alexandru Ioan Cuza din Iaşi
                            Departamentul de Ştiinţe
                            Bulevardul Carol I, Nr. 11, 700506, Iasi
                            Romania
                        </div>
                    </li>
                    <li
                        style={{
                            display: "flex",
                            marginTop: "16px"
                        }}
                    >
                        <div className='mr-2 font-semibold'>
                            Phone:
                        </div>
                        <div
                            className='max-w-[200px]'
                        >
                            0040 (0) 232.201.173
                        </div>
                    </li>
                    <li
                        style={{
                            display: "flex",
                            marginTop: "16px"
                        }}
                    >
                        <div className='mr-2 font-semibold'>
                            Fax:
                        </div>
                        <div
                            className='max-w-[200px]'
                        >
                            0040 (0) 232.201.150
                        </div>
                    </li>
                </ul>
            </div>
            <div
                className='flex flex-col mt-10 lg:mt-0'
            >
                <p
                    className='font-semibold text-2xl'
                >
                    Links
                </p>
                <ul
                >
                    <li
                        style={{
                            display: "flex",
                            marginTop: "0px"
                        }}
                    >
                        <div className='mr-2 font-semibold'>
                            University Website:
                        </div>
                        <div
                            className='max-w-[200px]'
                        >
                            <a
                                target={"_blank"}
                                href="www.uaic.ro"
                                className='hover:underline'
                            >
                                www.uaic.ro
                            </a>
                        </div>
                    </li>
                    <li
                        style={{
                            display: "flex",
                            marginTop: "16px"
                        }}
                    >
                        <div className='mr-2 font-semibold'>
                            Fonds:
                        </div>
                        <div
                            className='max-w-[200px]'
                        >
                            <a
                                target={"_blank"}
                                href="www.uaic.ro"
                                className='hover:underline'
                            >
                                www.fonduri-ue.ro
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer