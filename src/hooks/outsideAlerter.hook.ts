import { useEffect, RefObject } from 'react';

export function useOutsideAlerter(ref: RefObject<HTMLDivElement>, callback: () => void) {
  function handleClickOutside(event: any) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
