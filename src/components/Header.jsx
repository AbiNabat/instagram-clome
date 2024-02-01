import Image from "next/image";
import {CiCirclePlus, CiSearch} from "react-icons/ci";
import {FaHome} from "react-icons/fa";

export default function Header() {
    return (
        <>
            <div className='flex items-center justify-between max-w-6xl'>

            <div className=' relative cursor-pointer'>
                <Image src='/logo.png'
                       alt={'logo'}
                       width='120'
                       height='120'
                       className='object-contain'
                       priority />
            </div>
                <div className='relative mt-1'>
                <div className='absolute top-2'>
                    <CiSearch className='h-5 text-gray-500 '/>
                </div>
                <input type='text' placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'/>
                </div>
            <div>
               <div className='flex gap-2 items-center'>
                   <FaHome className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
                   <CiCirclePlus className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
                   <Image src='/man.png'
                          alt='man'
                          width={30}
                          height={30}
                          className='rounded-full'
                   />
               </div>
            </div>

            </div>
        </>
    )
}