import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className='flex items-center justify-between max-w-6xl'>
            {/* Left */}
            <div className=' relative cursor-pointer'>
                <Image src='/logo.png'
                       alt={'logo'}
                       width='120'
                       height='120'
                       className='object-contain'
                       priority />
            </div>
            <div>
               <h1>Right side</h1>
            </div>
            {/* Middle */}

            {/* Right */}
            </div>
        </>
    )
}