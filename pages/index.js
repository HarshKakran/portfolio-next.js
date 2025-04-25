import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import personalData from '../data/personal.json';
import projectsData from '../data/projects.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${personalData.name} - ${personalData.title}`}</title>
        <meta name="description" content={personalData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={`${personalData.skills.languages.join(', ')}, ${personalData.skills.frameworks.join(', ')}, portfolio, developer, frontend, web development`} />
        <meta name="author" content={personalData.name} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href={personalData.siteUrl} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${personalData.name} - ${personalData.title}`} />
        <meta property="og:description" content={personalData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={personalData.siteUrl} />
        <meta property="og:image" content={`${personalData.siteUrl}/images/social-preview.svg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${personalData.name} - ${personalData.title}`} />
        <meta property="og:site_name" content={`${personalData.name} | Portfolio`} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalData.name} - ${personalData.title}`} />
        <meta name="twitter:description" content={personalData.description} />
        <meta name="twitter:image" content={`${personalData.siteUrl}/images/social-preview.svg`} />
        <meta name="twitter:creator" content="@alexjohnson" />
        
        {/* Structured Data for SEO (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": personalData.name,
              "url": personalData.siteUrl,
              "jobTitle": personalData.title,
              "description": personalData.description,
              "sameAs": [
                personalData.github,
                personalData.linkedin,
                personalData.twitter
              ],
              "knowsAbout": [
                ...personalData.skills.languages,
                ...personalData.skills.frameworks,
                ...personalData.skills.tools,
                ...personalData.skills.other
              ],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": personalData.siteUrl
              },
              "workExample": projectsData.slice(0, 3).map(project => ({
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description
              }))
            })
          }}
        />
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
