import Image from "next/image";
import { CiSearch } from "react-icons/ci";

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
               <h1>Right side</h1>
            </div>

            </div>
        </>
    )
}