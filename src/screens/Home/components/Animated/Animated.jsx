import { useState, useEffect, useRef } from 'react';

const Animated = () => {
    const [count, setCount] = useState(0);
    const [string, setString] = useState('/amimation_figures/MAIN_FIG_ANIM_EXPLODE_00001.jpg');
    
    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = useRef();
    const previousTimeRef = useRef();

    const beforeTen = '/amimation_figures/MAIN_FIG_ANIM_EXPLODE_0000';
    const afterTen = '/amimation_figures/MAIN_FIG_ANIM_EXPLODE_000';
    const forHunder = '/amimation_figures/MAIN_FIG_ANIM_EXPLODE_00'
    
    const animate = time => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        
        // Pass on a function to the setter of the state
        // to make sure we always have the latest state

        setCount(prevCount => (prevCount + deltaTime * 0.05) % 100);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        if (count < 10) {
            setString(beforeTen);
        } else if (count > 9 && count < 100) {
            setString(afterTen);
        } else if (count > 99) {
            setString(forHunder);
        }
      }, [count]); // Make sure the effect runs only once
    
    useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once

    return (
        <div className="home-last-screen-figure">
            <img src={`${string}${Math.round(count)}.jpg`} alt="" className="home-last-screen-figure" />
        </div>
      );
}

export default Animated;