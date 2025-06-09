'use client';
import Image from 'next/image';
const NavMain = () => {
    return (
        <>
            <div className='navMain'>
                <div></div>
                <div className='logoMain'>
                    <Image src="gloria.svg" width={163} height={130} alt='' />
                </div>
                <div className='mainMenu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default NavMain
