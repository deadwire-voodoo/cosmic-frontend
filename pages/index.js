import 'tailwindcss/tailwind.css'
import HeroSection from '../components/HeroSection';
import Footer2 from '../components/Footer2';
import InfoCards from '../components/InfoCards';
import PreFlight from '../components/PreFlight';
import FAQ from '../components/FAQ';
import NavBar from '../components/NavBar';


export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection/>
      <InfoCards/>
      <PreFlight/>
      <FAQ/>
      <Footer2/>
      
    </>
  );
}