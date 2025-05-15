// FAQ.js
import React from 'react';
import { motion } from 'framer-motion';

// FAQItem Component
const FAQItem = ({ question, answer }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-4">{question}</h3>
      <p className="text-gray-400 text-sm">{answer}</p>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      
      <motion.p 
        className="text-center text-gray-400 mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        How yralvisa rotects your transactions
      </motion.p>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FAQItem 
          question="How do other charges compare with the market?" 
          answer={<>
            <strong>ATM Withdrawal Charges:</strong><br />
            yralvisa: USD 3/transaction<br /><br />
            Scapia, OneCard, Infinia: 2.5% of the withdrawal amount or INR 500 - whichever is higher<br /><br />
            BookMyForex, Thomas Cook, & similar services: USD 2.5-6/transaction
          </>}
        />
        <FAQItem 
          question="Which bank has yralvisa partnered with?" 
          answer="yralvisa has partnered with IndusInd Bank, recognized as a leading bank in the Indian forex card sector."
        />
        <FAQItem 
          question="What are the withdrawal options after the trip, and what charges apply?" 
          answer="yralvisa allows for free INR withdrawals post-trip, making it the only card on the market with this feature. Additionally, the withdrawals are done at the Interbank rate (the one you see on google) so yralvisa does not earn any money on you withdrawing your unused balance post the trip."
        />
        <FAQItem 
          question="Is the yralvisa card a credit or a debit card?" 
          answer="yralvisa is a prepaid forex card that requires funds to be loaded prior to usage."
        />
        <FAQItem 
          question="What is the KYC process?" 
          answer="Users will need to complete a brief video KYC process to activate the card, which typically takes only a few minutes."
        />
        <FAQItem 
          question="Will online transactions be enabled?" 
          answer="Yes, online transactions are enabled and can be managed directly by the user for added control."
        />
        <FAQItem 
          question="Is an account with IndusInd Bank required?" 
          answer="No, an existing relationship with IndusInd Bank is not required to obtain the yralvisa card."
        />
        <FAQItem 
          question="Will my CIBIL score be impacted?" 
          answer="As this is a prepaid card, CIBIL scores are unaffected."
        />
        <FAQItem 
          question="Are there any hidden charges?" 
          answer="yralvisa has no hidden charges."
        />
      </div>
    </section>
  );
};

export default FAQ;