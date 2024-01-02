"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import './page.css';
import  ProgressBar  from './Component/ProgressBar'
import Reveal from './Component/Reveal'
import Label from './Component/Label';
import Cursor from './Component/Cursor';
import CircleRec from './Component/CircleRec';
import Ellipse from './Component/Ellipse';
import Projects from './Component/Projects';
import ParallaxText from './Component/InfiniteLoop';
import  Contact  from './Component/Contact';


export default function Home() {

  return (
    <>
      <ProgressBar />
      <section className='home'>
        <Label />
        <CircleRec />
        <Ellipse zIndex="1" top={20} left={35} size="80px" background="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 5.73%, #FFF 100%)"/>
        <Ellipse zIndex="1" top={55} left={60} size="80px" background="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 5.73%, #FFF 100%)"/>
      </section>
      <Reveal>
        <Projects />
      </Reveal>
      <section className='stack'>
      <h2 className='text-center mx-auto my-5'>My Stack</h2>
      <Ellipse zIndex="-1" top={20} left={35} size="80px" background="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 5.73%, #FFF 100%)"/>
        <Ellipse zIndex="-1" top={40} left={60} size="80px" background="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 5.73%, #FFF 100%)"/>
      <ParallaxText baseVelocity={-3}>JavaScript</ParallaxText>
      <ParallaxText baseVelocity={3}>React</ParallaxText>
      <ParallaxText baseVelocity={-3}>MongoDB</ParallaxText>
      <ParallaxText baseVelocity={3}>SQL</ParallaxText>
      <ParallaxText baseVelocity={-3}>Git</ParallaxText>
      <ParallaxText baseVelocity={3}>ASP.NET</ParallaxText>
      <ParallaxText baseVelocity={-3}>HTML</ParallaxText>
      <ParallaxText baseVelocity={3}>CSS</ParallaxText>
      <ParallaxText baseVelocity={-3}>Node</ParallaxText>
      <ParallaxText baseVelocity={3}>C#</ParallaxText>
      </section>
      {/* <footer className='mx-auto'>
        <Contact />
      </footer> */}
    </>
  )
}
