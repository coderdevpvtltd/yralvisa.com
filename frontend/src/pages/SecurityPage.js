
import Navbar from '../components/SecurityPageComponents/Navbar';
import Hero from '../components/SecurityPageComponents/Hero';
import DocumentsSection from '../components/SecurityPageComponents/DocumentsSection';
import SecurityFeatures from '../components/SecurityPageComponents/SecurityFeatures';
import Footer from '../components/SecurityPageComponents/Footer';

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <DocumentsSection />
      <SecurityFeatures />
      <Footer />
    </div>
  );
};

export default SecurityPage;