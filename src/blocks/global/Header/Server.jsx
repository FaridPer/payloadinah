import { getPayload } from 'payload'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import './header.css'
import Link from 'next/link'
import SearchBar from './search'

export default async function HeaderServer() {
    const payload = await getPayload({ config })
    const header = await payload.findGlobal({
        slug: 'header',
        depth: 2,
    })
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={header.logo.url} alt="INAH Puebla Logo" className="logo-img" />
        </div>
      </div>
      <div className="nav-container">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
        </label>
        <ul>
          {header.nav.map((item,index)=>{
            return (
              <li key={item.id}> {/* Using 'item.link' as the unique key */}
                <Link href={item.link}>{item.label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <SearchBar/>
      </div>
    </header>
  )
}
