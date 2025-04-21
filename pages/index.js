import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import personalData from '../data/personal.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${personalData.name} - ${personalData.title}`}</title>
        <meta name="description" content={personalData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${personalData.name} - ${personalData.title}`} />
        <meta property="og:description" content={personalData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={personalData.siteUrl} />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalData.name} - ${personalData.title}`} />
        <meta name="twitter:description" content={personalData.description} />
      </Head>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
