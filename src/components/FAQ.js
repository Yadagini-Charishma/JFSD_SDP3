import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const toggleCategory = (category) => {
        setActiveCategory(activeCategory === category ? null : category);
    };

    const faqs = [
        {
            category: "For Students",
            questions: [
                {
                    question: "What is the placement process?",
                    answer: "The placement process involves multiple stages including resume submission, aptitude tests, group discussions, technical interviews, and HR interviews."
                },
                {
                    question: "How do I register for placements?",
                    answer: "Students can register for placements through the placement portal by filling out the necessary forms and uploading their resumes."
                },
                {
                    question: "What are the eligibility criteria for placements?",
                    answer: "Eligibility criteria vary by company but generally include academic performance, attendance, and completion of pre-placement training."
                },
                {
                    question: "How do I prepare for placements?",
                    answer: "Preparation involves improving your technical skills, participating in mock interviews, and keeping your resume updated."
                },
                {
                    question: "Can I apply for multiple companies?",
                    answer: "Yes, students can apply for multiple companies, but they must follow the placement cell’s guidelines regarding the number of offers they can accept."
                },
                {
                    question: "What should I do if I get selected?",
                    answer: "If you are selected, you should confirm your acceptance on the placement portal and follow the instructions provided by the company and placement cell."
                }
            ]
        },
        {
            category: "For Placement Cell",
            questions: [
                {
                    question: "How to manage student registrations?",
                    answer: "The placement cell can manage student registrations through the admin panel of the placement portal, where they can approve or reject applications."
                },
                {
                    question: "How to schedule placement drives?",
                    answer: "Placement drives can be scheduled using the event management feature in the placement portal, where companies and students are notified automatically."
                },
                {
                    question: "How to track student progress?",
                    answer: "The placement cell can track student progress through the portal’s dashboard, which provides detailed reports on student activities and placements."
                },
                {
                    question: "How to handle company requests?",
                    answer: "Company requests can be handled by the placement cell through the portal’s communication module, where they can coordinate with company HR representatives."
                },
                {
                    question: "How to update placement policies?",
                    answer: "Placement policies can be updated in the portal’s settings section, where the placement cell can define new rules and criteria for student eligibility."
                },
            ]
        },
    ];

    const filteredFAQs = faqs.map(category => ({
        ...category,
        questions: category.questions.filter(faq =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }));

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <input
                type="text"
                placeholder="Search for a question..."
                className="faq-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="faq-list">
                {filteredFAQs.map((category, catIndex) => (
                    <div key={catIndex} className="faq-category">
                        <h2 
                            className="faq-category-title" 
                            onClick={() => toggleCategory(catIndex)}
                        >
                            {category.category}
                            <span className={`faq-category-icon ${activeCategory === catIndex ? 'expanded' : ''}`}>
                                {activeCategory === catIndex ? '-' : '+'}
                            </span>
                        </h2>
                        {activeCategory === catIndex && category.questions.length > 0 && (
                            <div className="faq-items">
                                {category.questions.map((faq, index) => (
                                    <div
                                        key={index}
                                        className={`faq-item ${activeIndex === index && activeCategory === catIndex ? 'active' : ''}`}
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <h3 className="faq-question">{faq.question}</h3>
                                        <p className="faq-answer">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
