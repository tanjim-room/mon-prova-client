import React, { useState, useEffect } from "react";
import NavBarDoctor from "../../components/NavBarDoctor";
import Button from "../../components/buttons/Button";

const DoctorHelp = () => {
  const [questions, setQuestions] = useState([]);
  const [replyText, setReplyText] = useState({});

  // Load questions from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("helpQuestions")) || [];
    setQuestions(stored);
  }, []);

  // Handle reply submission
  const handleReply = (id) => {
    if (!replyText[id]?.trim()) return;

    const updated = questions.map((q) =>
      q.id === id ? { ...q, reply: replyText[id] } : q
    );

    setQuestions(updated);
    localStorage.setItem("helpQuestions", JSON.stringify(updated));
    setReplyText({});
  };

  return (
    <div>
        <NavBarDoctor></NavBarDoctor>
      <div  className="min-h-[850px] p-16 bg-[#E1ECFF] rounded-lg mt-16">
        <h1 className="text-3xl font-bold mb-6 text-center">
          রোগীদের সহায়তা করুন
        </h1>

        {questions.length === 0 ? (
          <p className="text-center text-gray-500">
          কোনো প্রশ্ন করা হয়নি।
          </p>
        ) : (
          questions.map((q) => (
            <div key={q.id} className="card bg-base-100 shadow-md border mb-6">
              <div className="card-body">
                <h2 className="font-semibold text-lg">রোগীর প্রশ্ন:</h2>
                <p className="text-gray-800">{q.question}</p>
                <p className="text-xs text-gray-400 mt-1">
                  পোস্টেড : {q.timestamp}
                </p>

                <div className="divider"></div>

                {q.reply ? (
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-md">
                    <h3 className="font-semibold text-green-700 mb-1">
                      আপনার উত্তর:
                    </h3>
                    <p>{q.reply}</p>
                  </div>
                ) : (
                  <>
                    <textarea
                      className="textarea textarea-bordered w-full mb-3"
                      placeholder="আপনার উত্তর লিখুন..."
                      value={replyText[q.id] || ""}
                      onChange={(e) =>
                        setReplyText({ ...replyText, [q.id]: e.target.value })
                      }
                    ></textarea>
                    <div onClick={() => handleReply(q.id)}>
                      <Button text="উত্তর পাঠান"></Button>
                    </div>
                    
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DoctorHelp;
