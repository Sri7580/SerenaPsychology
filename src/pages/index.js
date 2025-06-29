import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Faq from '../components/Faq';
import { useEffect } from 'react';
import AOS from 'aos';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Head>
        
        <title>Dr. Serena Blake</title>
        <meta name="description" content="Therapy for growth, healing, and clarity." />
      </Head>
      
      <Hero />
      <About />
      <Services />
      <Faq />
      <Footer />
    </>
  );
}