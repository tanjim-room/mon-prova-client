import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import testsData from "../../../public/assessments.json";

const TestQuestion = () => {
    const { testid } = useParams(); // string id
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [allAnswered, setAllAnswered] = useState(false);

    // Find test by string id
    const selectedTest = testsData.find((t) => t.id === testid);

    useEffect(() => {
        if (selectedTest) {
            setAnswers({});
            setResult(null);
            setAllAnswered(false);
        }
    }, [selectedTest]);

    // Check if all answered
    useEffect(() => {
        if (!selectedTest) return;
        setAllAnswered(Object.keys(answers).length === selectedTest.questions.length);
    }, [answers, selectedTest]);

    const handleSubmit = () => {
        if (!selectedTest) return;

        let total = 0;

        selectedTest.questions.forEach((q) => {
            const ans = answers[q.id];
            if (ans === undefined) return;

            // Reverse scoring for PSS-10
            if (
                selectedTest.scoring.type === "sum-with-reverse" &&
                selectedTest.scoring.reverseItemIds.includes(q.id)
            ) {
                total += selectedTest.scoring.reverseMapping[ans];
            } else {
                total += parseInt(ans);
            }
        });

        const level =
            selectedTest.scoring.severityLevels.find(
                (lvl) => total >= lvl.min && total <= lvl.max
            )?.label || "অজানা";

        setResult({ total, level });
    };

    if (!selectedTest) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-[#EFF7FE]">
                <h2 className="text-2xl font-bold text-red-600 mb-4">⚠️ টেস্ট পাওয়া যায়নি</h2>
                {/* <Link to="/patientDashboard/assessment" className="text-blue-600 hover:underline flex items-center gap-1">
          <IoArrowBackSharp /> ফিরে যান
        </Link> */}
            </div>
        );
    }

    return (
        <div className="min-h-screen p-4 bg-[#EFF7FE]">
            <div className="bg-white rounded-md p-8 shadow border">
                {/* Back Button */}
                <Link
                    to="/patientDashboard/assessment"
                    className="border-2 rounded-md flex items-center gap-2 px-4 py-2 font-semibold hover:bg-[#E8594A] hover:text-white transition w-fit mb-4"
                >
                    <IoArrowBackSharp /> ফিরে যান
                </Link>

                <h2 className='text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>{selectedTest.title}</h2>
                <p className="text-blue-600 mb-8 ">{selectedTest.description}</p>

                <div className="px-8">
   {selectedTest.questions.map((q, index) => (
          <div key={q.id} className="mb-6">
            <p className="mb-4 text-left font-bold">
              {index + 1}. {q.text}
            </p>
            <div className="flex flex-wrap gap-3">
              {selectedTest.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() =>
                    setAnswers((prev) => ({ ...prev, [q.id]: opt.value }))
                  }
                  className={`px-4 py-2 rounded-xl border ${
                    answers[q.id] === opt.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-50 hover:bg-blue-50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
                </div>

                {allAnswered && !result && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={handleSubmit}
                            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                        >
                            ফলাফল দেখুন
                        </button>
                    </div>
                )}

                {result && (
                    <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
                        <p className="text-lg font-semibold text-blue-700">
                            মোট স্কোর: {result.total}
                        </p>
                        <p className="text-gray-700 mt-2">
                            স্তর: <span className="font-bold">{result.level}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestQuestion;
