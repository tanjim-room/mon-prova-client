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
    <div >
      <NavBar></NavBar>
      <div className="min-h-[850px] p-16 bg-[#E1ECFF] rounded-lg mt-16">
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center">
          সহায়তা নিন
        </h1>

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
                  <h2 className="font-semibold text-lg">আপনার প্রশ্ন:</h2>
                  <p className="text-gray-800">{q.question}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    পোস্ট করা হয়েছে: {q.timestamp}
                  </p>

                  <div className="divider"></div>

                  {q.reply ? (
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-md">
                      <h3 className="font-semibold text-green-700">
                        চিকিৎসকের উত্তর:
                      </h3>
                      <p>{q.reply}</p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400 italic">
                      চিকিৎসকের উত্তর অপেক্ষায়...
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
