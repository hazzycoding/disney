import Image from "next/image"
import { FaHome } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineStar, AiOutlinePlus } from 'react-icons/ai';
import { signIn, useSession, signOut } from "next-auth/client"
import { useRouter } from "next/router";

const Header = () => {
  const [session] = useSession();
  const router = useRouter()
  return (
    <div className='sticky bg-[#040714] top-0 z-[1000] flex h-[72px] items-center px-10 md:px-12'>
      <Image src="/images/logo.svg" width="80" height="80" className='curssor-pointer' />
      {session && (


        <div className='hidden ml-10 md:flex items-center space-x-6 '>
          <a className="header-link group">
            <FaHome className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <AiOutlineSearch className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <AiOutlinePlus className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <AiOutlineStar className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
        </div>
      )}
      {!session ? (
        <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide
       hover:bg-white hover:text-black transition duration-500" onClick={signIn}>Login</button>) : (
        <img
          src={session.user.image}
          className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
          onClick={signOut}
        />)}
    </div >
  )
}

export default Header