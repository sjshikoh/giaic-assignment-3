import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='h-[92PX] py-16px px-[220px] bg-[#043873] flex justify-between'>
     <div className='w-[134px] h-6 '>
      <Image src={"/logo.png"} alt="Logo" width={134} height={24}/>
      </div> 

      <div className='w-[737.5px] h-[60px] flex justify-between'>
        <div className='w-[549px] h-[23px]'>
          <div className='flex flex-row justify-between text-white'>

            <Link href="/" className='hover:text-sky-400'>Home</Link>
            <Link href="/products" className='hover:text-sky-400'>Products</Link>
            <Link href="/solution" className='hover:text-sky-400'>Solution</Link>
            <Link href="/resources" className='hover:text-sky-400'>Resources</Link>
            <Link href="/pricing" className='hover:text-sky-400'>Pricing</Link>
            
            
          </div>

        </div>
        <div className='w-[126px] h-[60px] rounded-lg py-4 px-10 bg-[#FFE492] gap-[10px]'>
          <button className='hover:text-orange-400'>Login</button>
        </div>
      </div> 
    </header>
  )
}

export default Navbar
