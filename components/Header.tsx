import React from 'react'
import Link from 'next/link'
import NavItems from './NavItems'
import UserDropdown from './UserDropdown'

const Header = ({user}:{user:User}) => {
  return (
    <div>
      <header className='sticky top-0 header'>
        <div className='container header-wrapper'>
            <Link href="/">
                <img src="/assets/icons/logo.svg" alt="HotStock logo" width={140} height={32} className='h-8 w-auto cursor-pointer'/>
            </Link>
            <nav className='hidden sm:block'>
                <NavItems/>

            </nav>
            <UserDropdown user={user}/>
        </div>
      </header>
    </div>
  )
}

export default Header
