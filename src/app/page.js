import 'bootstrap/dist/css/bootstrap.min.css';
import './page.css';
import { Label } from '../../components/Label';
import CircleRec from '../../components/CircleRec';
import Ellipse from '../../components/Ellipse/Ellipse';
import ProjectCard from '../../components/ProjectCard';
import ParallaxText from '../../components/InfiniteLoop';
import Contact from '../../components/Contact';

export default function Home() {
  return (
    <div >
      <section className='home'>
        <Label />
        <CircleRec />
        <Ellipse zIndex="1" top={20} left={35} size="80px" background="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 5.73%, #FFF 100%)"/>
        <Ellipse zIndex="1" top={55} left={60} size="80px" background="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 5.73%, #FFF 100%)"/>
      </section>
      <section className='mb-5 px-2 projects'>
        <h2 className='text-center'>My Projects</h2>
      <ProjectCard />
      </section>
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
      <footer className='mx-auto'>
        <Contact />
      </footer>
    </div>
  )
}
