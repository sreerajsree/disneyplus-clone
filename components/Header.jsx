import Image from "next/image"

function Header() {
  return (
    <div className='sticky bg-[#040714] top-0 z-[1000] flex items-center h-[72px] px-10 md:px-12'>
        <Image /> 
    </div>
  )
}

export default Header