import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="h-[461px] px-[220px] pt-[140px] pb-8 gap-[200px] bg-[#043873]">
        <div className="h-[289px] gap-[100px]">
        <Image src={"/Content.png"} alt="footer" width={1480} height={289} />
        </div>

      </footer>
  )
}

export default Footer
