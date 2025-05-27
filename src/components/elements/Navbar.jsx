import useOpenNavbar from '../../hooks/useOpenNavbar';
import Logo from '../../assets/images/logo.png';
import {Button} from '../index';
import {NavbarItem} from '../../data/NavbarItem';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const {navRef, refSpan1, refSpan2, refSpan3, handleToggle} = useOpenNavbar();

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary shadow-xl z-10 rounded-b-4xl py-2">
      <div className='container flexBetween relative'>
        <div className="w-[100px] md:w-[120px] flexCenter"><Link to="/" className='hover:bg-transparent'>
          <img src= {Logo} alt='LugxGaming'/></Link>
        </div>
        <div ref={navRef} className='max-md:hidden'>
          <ul className="flexColumn items-center absolute bg-white max-md:shadow-xl w-full top-[80px] left-0 rounded-b-4xl md:flex-row md:gap-3 md:top-0 md:bg-transparent md:relative trnsform">
            {NavbarItem.map((item) => (
              <li onClick={handleToggle} key={item.id} className='max-md:p-4 text-center max-md:border-b-septenary max-md:border-b max-md:border-solid max-md:w-full max-md:text-center last-of-type:border-none'>
                <NavLink to={item.href}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flexCenter gap-4">
          <Button className="hover:bg-secondary" title="Sign In"/>
          <div className='md:hidden flexColumn justify-between gap-2 cursor-pointer size-[25px]' onClick={handleToggle}>
            <span ref={refSpan1} className='w-[18px] h-0.5 bg-white origin-top-left rotate-0 trnsform'></span>
            <span ref={refSpan2} className='w-[25px] h-0.5 bg-white' ></span>
            <span ref={refSpan3} className='w-[18px] h-0.5 bg-white origin-bottom-left rotate-0 trnsform'></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar