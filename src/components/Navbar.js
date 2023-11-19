import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import Logo from '../img/Ico.png'
import Basket from '../img/Basket.svg'
import Comparison from '../img/Comparison.svg'
import Favourites from '../img/Favourites.svg'
import Profil from '../img/Profil.svg'

export default function Header() {
    const [active,isActive]=useState(false)
    if (active === true){
        console.log("hello");
    }



  return (<>
    <header >
        <div className='max-w-[1180px] mx-auto flex items-center gap-[30px] justify-between  px-5 py-[18px] font-basic bg-white'>
            <div className=''>
                <Link href='/'>
                    <Image
                    src={Logo}
                    className='max-h-[81px] max-w-[171px]'
                    alt='Логотип'
                    />
                </Link>
            </div>
            <div
                className="min-w-[350px] border-black border-solid border-2 max-[670px]:hidden"
            >
                <input 
                placeholder='Поиск по каталогу'
                type="search" />
            </div>
            <div>
                <nav>
                    <ul className='flex gap-[25px] items-center text-[12px] max-[1070px]:hidden max-[1130px]:gap-[15px]'>
                        <li className='flex whitespace-nowrap flex-col items-center'>
                            <Link href='/about'>О нас</Link>
                        </li>
                        <li>
                            <Link 
                            className='flex flex-col items-center justify-center'
                            href='/'>
                                <Image 
                                    src={Comparison}
                                />
                                Сравнение
                            </Link>
                        </li>
                        <li >
                            <Link 
                            className='flex flex-col items-center justify-center'
                            href='/'>
                                <Image 
                                    src={Basket}
                                />
                                Корзина
                            </Link>
                        </li>
                        <li >
                            <Link 
                            className='flex flex-col items-center justify-center'
                            href='/'>
                                <Image 
                                    src={Favourites}
                                />
                                Избранное
                            </Link>
                            
                        </li>
                        <li >
                            <Link 
                            className='flex flex-col items-center justify-center'
                            href='/'>
                                <Image 
                                    src={Profil}
                                />
                                Профиль
                            </Link>
                        
                        </li>
                        <li >
                            <Link href='/'>Войти</Link>
                        </li>
                        <li >
                            <Link href='/'>Регистрация</Link>
                        </li>
                    </ul>
                    <div onClick={(e)=>{
                        e.preventDefault()
                        isActive(!active)
                    }} 
                        className="space-y-2 min-[1070px]:hidden cursor-pointer">
                        <div className="w-12 h-2 rounded bg-base "></div>
                        <div className="w-12 h-2 rounded bg-base "></div>
                        <div className="w-12 h-2 rounded bg-base "></div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    
        <div className={active ?
        'transition-transform absolute right-[20px] z-40 bg-white':
        'transition-transform absolute right-[20px] z-40 bg-white hidden'
        }>
            <nav>
                <ul className='flex items-end flex-col p-4 gap-6'>
                        <li className='border-black border-solid border-b-2 border-spacing-4'>
                            <Link href='/about'>О нас</Link>
                        </li>
                        <li className='border-black border-solid border-b-2 border-spacing-4'>
                            <Link 
                            className='flex gap-[10px]'
                            href='/'>
                                <Image 
                                    src={Comparison}
                                />
                                Сравнение
                            </Link>
                        </li>
                        <li className='border-black border-solid border-b-2 border-spacing-4'>
                            <Link 
                            className='flex gap-[10px]'
                            href='/'>
                                <Image 
                                    src={Basket}
                                />
                                Корзина
                            </Link>
                        </li>
                        <li className='border-black border-solid border-b-2 border-spacing-4'>
                            <Link 
                            className='flex gap-[10px]'
                            href='/'>
                                <Image 
                                    src={Favourites}
                                />
                                Избранное
                            </Link>
                            
                        </li>
                        <li className='border-black border-solid border-b-2 border-spacing-4'>
                            <Link 
                            className='flex gap-[10px]'
                            href='/'>
                                <Image 
                                    src={Profil}
                                />
                                Профиль
                            </Link>
                        
                        </li>
                        <li className='border-black border-solid border-b-2 border-spacing-4'>
                            <Link href='/'>Регистрация</Link>
                            {" / "}
                            <Link href='/'>Войти</Link>
                        </li>

                </ul>
            </nav>
        </div>
    <div 
    onClick={(e)=>{
        e.preventDefault()
        isActive(!active)
    }}   
    className={active ?'transition-opacity duration-500 absolute opacity-30 bg-black min-w-[100%] min-h-[100vh] ' :
     'duration-500 transition-opacity absolute opacity-0 bg-black min-w-[100%] '}></div>
  
</>)
}
