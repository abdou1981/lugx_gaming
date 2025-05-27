import {useState, useRef} from 'react';

const useOpenNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const refSpan1 = useRef(null);
  const refSpan2 = useRef(null);
  const refSpan3 = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    navRef.current.classList.toggle('openNav');
    refSpan1.current.classList.toggle('openSpan1');
    refSpan2.current.classList.toggle('openSpan2');
    refSpan3.current.classList.toggle('openSpan3');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    {navRef, refSpan1, refSpan2, refSpan3, handleToggle}
  )
}

export default useOpenNavbar