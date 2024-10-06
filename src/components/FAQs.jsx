import { useState } from 'react';

const FAQs = [
  {
    question: 'What is PyHack?',
    answer: 'PyHack is a Python-based hackathon where participants collaborate to solve real-world problems.'
  },
  {
    question: 'Where will the workshops be held?',
    answer: 'The workshops will be held online and in select locations around the world.'
  },
  {
    question: 'What will I learn at PyHack?',
    answer: 'You will learn Python programming, best practices, and how to build projects efficiently in teams.'
  },
  {
    question: 'Do I need prior Python experience?',
    answer: 'No prior experience is required. We welcome beginners and experienced programmers alike.'
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="flex flex-col md:flex-row gap-8 p-8">
      <div className="w-full md:w-1/3">
        <h2 className="text-3xl font-bold">FAQs</h2>
      </div>
      <div className="w-full md:w-2/3">
        {FAQs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm focus:outline-none"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white border border-gray-200 rounded-lg mt-2">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}

        <div className="mt-4 flex justify-start">
          <a
            href="#see-more"
            className="text-blue-500 text-sm underline decoration-solid underline-offset-8 hover:no-underline flex items-center"
          >
            <span className="mr-2">See More →</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
