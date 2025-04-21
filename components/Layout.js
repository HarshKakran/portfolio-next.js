import { useTheme } from '../context/ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const { theme } = useTheme();
  
  return (
    <div className={`${theme} min-h-screen`}>
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300 min-h-screen">
        <Navbar />
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
