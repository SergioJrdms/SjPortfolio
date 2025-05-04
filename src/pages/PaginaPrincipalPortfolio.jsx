import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef({}); // Store refs to sections

  // --- Intersection Observer Logic (Scroll Animation & Scroll Spy) ---
  useEffect(() => {
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0.15, // Animation trigger threshold
    };

    const scrollSpyOptions = {
        rootMargin: "-20% 0px -70% 0px", // Adjust zone for scroll spy
        threshold: 0,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // For Animations
          entry.target.classList.add('is-visible');

          // For Scroll Spy (check if it's the scroll spy observer)
          if (observer === scrollSpyObserverRef.current) {
             setActiveSection(entry.target.id);
          }
          // Optional: Unobserve animation after first time
          // if (observer === animationObserverRef.current) {
          //    animationObserverRef.current.unobserve(entry.target);
          // }
        } else {
           // Optional: Remove class if you want elements to re-animate when scrolling back up
           // entry.target.classList.remove('is-visible');
        }
      });
    };

    const animationObserver = new IntersectionObserver(handleIntersect, observerOptions);
    const scrollSpyObserver = new IntersectionObserver(handleIntersect, scrollSpyOptions);

    // Store observers in refs to access them in cleanup
    animationObserverRef.current = animationObserver;
    scrollSpyObserverRef.current = scrollSpyObserver;

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => animationObserver.observe(el));

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        sectionRefs.current[section.id] = section; // Store ref by id
        scrollSpyObserver.observe(section);
    });

    // --- Special case for Home section activation ---
     const homeObserverOptions = { threshold: 0.9 };
     const homeObserver = new IntersectionObserver((entries) => {
         if(entries[0].isIntersecting) {
             setActiveSection('home');
         }
     }, homeObserverOptions);
     const homeSection = document.getElementById('home');
     if(homeSection) {
         homeObserver.observe(homeSection);
     }

    // Cleanup function
    return () => {
      elements.forEach(el => animationObserver.unobserve(el));
      sections.forEach(section => scrollSpyObserver.unobserve(section));
       if (homeSection) {
            homeObserver.unobserve(homeSection);
        }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Refs for observers to use in cleanup
  const animationObserverRef = useRef();
  const scrollSpyObserverRef = useRef();


  return (
    <>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </>
  );
}

export default App;