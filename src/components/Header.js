import React from 'react'
import Logo from './Logo'
import UserAvatar from './UserAvatar'
export default function Header() {
    return (
        <header>
            <nav className='container'>
                <Logo/>
                <UserAvatar/>
            </nav>
        </header>
    )
}
