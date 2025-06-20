import React, { useState, useRef, useEffect } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is 9 to 5?",
    answer: "9 to 5 is a modern job discovery platform that connects job seekers with curated opportunities tailored to their skills and goals.",
  },
  {
    question: "How do I apply for a job?",
    answer: "Simply browse the job listings, click on a role you're interested in, and follow the application instructions provided by the employer.",
  },
  {
    question: "Is it free to use the platform?",
    answer: "Yes, 9 to 5 is completely free for job seekers. No hidden charges or subscription fees.",
  },
  {
    question: "Can I upload my resume?",
    answer: "Absolutely. You can upload your resume to your profile so employers can easily access your qualifications.",
  },
  {
    question: "How often are job listings updated?",
    answer: "We update our listings daily to ensure you're seeing the latest opportunities from trusted employers.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isActive={index === activeIndex}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ faq, isActive, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isActive]);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={onClick}>
        {faq.question}
        <span style={{fontSize: '24px'}}>{isActive ? "−" : "+"}</span>
      </div>
      <div ref={contentRef} className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
