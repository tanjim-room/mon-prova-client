import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Button from "../../components/buttons/Button";

const PatientHelp = () => {
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("helpQuestions")) || [];
    setQuestions(stored);
  }, []);

  const handlePost = () => {
    if (!question.trim()) return;

    const newQuestion = {
      id: Date.now(),
      question,
      reply: "",
      timestamp: new Date().toLocaleString(),
    };

    const updated = [...questions, newQuestion];
    setQuestions(updated);
    localStorage.setItem("helpQuestions", JSON.stringify(updated));
    setQuestion("");
  };

  return (
    <div className="bg-[#EFF7FE] p-4">
   
      <div className="min-h-[850px] p-8 bg-white rounded-md">
        <div>
            <h2 className='text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>
            সহায়তা নিন
          </h2>

        {/* Post Question Section */}
        <div className="form-control mb-8 space-y-4">
          <textarea
            className="textarea textarea-bordered h-24 w-full"
            placeholder="আপনার প্রশ্ন লিখুন..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>

          <div onClick={handlePost}>
            <Button text=" প্রশ্ন পোস্ট করুন"></Button>
          </div>
         
        </div>

        {/* Display All Questions */}
        <div className="space-y-5">
          {questions.length === 0 ? (
            <p className="text-center text-gray-500 italic">
              এখনো কোনো প্রশ্ন করা হয়নি।
            </p>
          ) : (
            questions.map((q) => (
              <div
                key={q.id}
                className="card border border-gray-200 shadow-md bg-base-100"
              >
                <div className="card-body">
                  <p className="text-xs text-gray-400 mt-1 text-left">
                    পোস্ট করা হয়েছে: {q.timestamp}
                  </p>
                  <h2 className="font-semibold text-lg text-left">আপনার প্রশ্ন:</h2>
                  <p className="text-gray-800 text-left">{q.question}</p>
                  

                  <div className="divider"></div>

                  {q.reply ? (
                    <div className="bg-[#EFF7FE]   p-3 rounded-md">
                      <h3 className="font-semibold text-gray-800 text-left">
                        ডাক্তারের উত্তর:
                      </h3>
                      <p className="text-left">{q.reply}</p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400 italic tetxt-left">
                      ডাক্তারের উত্তর অপেক্ষায়...
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHelp;
