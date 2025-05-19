import React from 'react';
import { Lock, Shield, CheckCircle } from 'lucide-react';

// FeatureCard component defined within the file
const FeatureCard = ({ title, description, benefit, hasImage = false }) => {
  return (
    <div className="bg-blue-50 p-8 rounded-lg relative h-full">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex items-center">
        <div className="bg-indigo-100 p-1 rounded-full">
          <div className="bg-indigo-600 p-1 rounded-full">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <p className="ml-3 text-gray-600">{benefit}</p>
      </div>
      {hasImage && (
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-70">
          <div className="bg-blue-200 w-full h-full rounded-full blur-md"></div>
        </div>
      )}
    </div>
  );
};

const SecurityFeatures = () => {
  return (
    <div className="py-8 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <FeatureCard 
          title="Data Minimization and Anonymization"
          description="Collect only the necessary data required for providing services and anonymize data wherever possible."
          benefit="Reduces the risk of data breaches by minimizing the amount of sensitive data stored."
        />
        
        <FeatureCard 
          title="End-to-End Encryption"
          description="Ensure that all data transmitted between your devices and yralvisa servers is encrypted, unreachable to unauthorized parties."
          benefit="Protects data during transit, ensuring privacy and security."
          hasImage={true}
        />
      </div>

      <div className="bg-indigo-600 text-white p-8 rounded-lg mb-16">
        <h2 className="text-center text-3xl font-bold mb-4">Compliance with Industry Standards</h2>
        <p className="text-center mb-12">
          Adhere to industry standards and regulations such as GDPR, CCPA, and PCI DSS to ensure data protection and privacy. We've the following certification with us:
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="bg-blue-400 w-20 h-20 rounded-full flex items-center justify-center">
            <span className="font-bold text-xs text-center">AICPA<br/>SOC</span>
          </div>
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center">
            <span className="font-bold text-xs text-center text-gray-800">ISO<br/>27001</span>
          </div>
          <div className="bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center">
            <span className="font-bold text-xs text-center">GDPR</span>
          </div>
          <div className="bg-blue-800 w-20 h-20 rounded-full flex items-center justify-center">
            <span className="font-bold text-xs text-center">NIST</span>
          </div>
          <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center">
            <span className="font-bold text-xs text-center">PCI-DSS</span>
          </div>
          <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center">
            <span className="font-bold text-xs text-center">ISO<br/>27701</span>
          </div>
        </div>
        
        <p className="text-center">
          Provides users with confidence that yralvisa meets stringent security and privacy requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <FeatureCard 
          title="Regular Security Audits"
          description="Conduct regular security audits and vulnerability assessments to identify and fix potential security issues."
          benefit="Ensures that security measures are up-to-date and effective against emerging threats."
        />
        
        <FeatureCard 
          title="Secure Access Controls"
          description="Implement robust access controls to ensure that only authorized personnel can access sensitive data."
          benefit="Prevents unauthorized access to user data within the organization."
        />
        
        <FeatureCard 
          title="User Education and Awareness"
          description="Provide users with information and resources on how to protect their data and recognize potential security threats."
          benefit="Empowers users to take an active role in protecting their personal information."
          hasImage={true}
        />
      </div>
    </div>
  );
};

export default SecurityFeatures;