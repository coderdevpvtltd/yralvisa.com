import React from 'react';
import { FileText, Image, Shield, Lock } from 'lucide-react';

const DocumentsSection = () => {
  return (
    <div className="py-12 px-4 md:px-8">
      <h2 className="text-center text-2xl font-bold mb-12 py-2 px-8 rounded-full bg-white inline-block mx-auto">Documents we collect</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <FileText className="text-white" size={24}/>
          </div>
          <h3 className="text-xl font-medium mb-1">Payment information</h3>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Image className="text-white" size={24}/>
          </div>
          <h3 className="text-xl font-medium mb-1">Photos</h3>
        </div>
      </div>
      
      <h2 className="text-center text-3xl font-bold mb-16">Key Features</h2>
      
    </div>
  );
};

export default DocumentsSection;