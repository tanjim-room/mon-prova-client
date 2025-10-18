import React, { useState, useEffect } from "react";
import NavBarDoctor from "../../components/NavBarDoctor";
import Button from "../../components/buttons/Button";

const DoctorHelp = () => {
  const [questions, setQuestions] = useState([]);
  const [replyText, setReplyText] = useState({});

  
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("helpQuestions")) || [];
    setQuestions(stored);
  }, []);


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
    <div className="bg-[#EFF7FE] p-4">
       
      <div  className="min-h-[850px] p-8 bg-white rounded-md">
        <h1 className='text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>
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
                <p className="text-xs text-gray-400 mt-1 text-left">
                  পোস্টেড : {q.timestamp}
                </p>
                <h2 className="font-semibold text-lg text-left">রোগীর প্রশ্ন:</h2>
                <p className="text-gray-800 text-left">{q.question}</p>
                

                <div className="divider"></div>

                {q.reply ? (
                  <div className="bg-[#EFF7FE] p-3 rounded-md">
                    <h3 className="font-semibold text-blue-700 mb-1 text-left">
                      আপনার উত্তর:
                    </h3>
                    <p className="text-left">{q.reply}</p>
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
