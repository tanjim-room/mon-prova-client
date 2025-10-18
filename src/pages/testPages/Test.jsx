import React, { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
// === Import your JSON data ===
import testsData from "../../../public/assessments.json";
import { Link } from "react-router-dom";
const Test = () => {

    const [selectedTest, setSelectedTest] = useState(null);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [allAnswered, setAllAnswered] = useState(false);

    // Reset state when a new test is selected
    useEffect(() => {
        if (selectedTest) {
            setAnswers({});
            setResult(null);
            setAllAnswered(false);
        }
    }, [selectedTest]);

    // Check if all questions are answered
    useEffect(() => {
        if (!selectedTest) return;
        const totalAnswered = Object.keys(answers).length;
        const totalQuestions = selectedTest.questions.length;
        setAllAnswered(totalAnswered === totalQuestions);
    }, [answers, selectedTest]);

    // Calculate score and severity on submit
    const handleSubmit = () => {
        if (!selectedTest) return;
        const scoring = selectedTest.scoring;
        let total = 0;

        selectedTest.questions.forEach((q) => {
            const ans = answers[q.id];
            if (ans === undefined) return;

            // Handle reverse-scored questions (for PSS-10)
            if (scoring.type === "sum-with-reverse" && q.reverse) {
                const revMap = scoring.reverseMapping;
                total += revMap[ans];
            } else {
                total += parseInt(ans);
            }
        });

        // Find severity level
        const level =
            scoring.severityLevels.find(
                (lvl) => total >= lvl.min && total <= lvl.max
            )?.label || "অজানা";

        setResult({ total, level });
    };

    // (Optional) Send result after submission
    useEffect(() => {
        if (result && selectedTest?.method === "POST") {
            const payload = {
                testId: selectedTest.id,
                answers,
                totalScore: result.total,
                severity: result.level,
            };
            console.log("Sending data:", payload);
            // fetch("/api/save-test", { ... })
        }
    }, [result]);

    return (
        <div className="min-h-screen p-4  rounded-md">

            {/* Test Card View */}
            {!selectedTest && (
                <div className="grid md:grid-cols-1 gap-6">
                       <h2 className='text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>
                মনপ্রভা মানসিক স্বাস্থ্য মূল্যায়ন
            </h2>
                    {testsData.map((test) => (
                        <div
                            key={test.id}
                            onClick={() => setSelectedTest(test)}
                            className="cursor-pointer bg-[#EFF7FE] p-8 rounded-md shadow hover:shadow-lg transition flex flex-col items-center border space-y-2"
                        >
                            <img
                                src={test.icon}
                                alt={test.shortTitle}
                                className="h-24 w-24 mb-4"
                            />
                            <h2 className="text-xl font-bold text-[#007AF5] mb-2">
                                {test.title}
                            </h2>
                            <p className="text-md font-semibold">({test.shortTitle})</p>
                            <p className="text-gray-600 text-center w-3/4">{test.description}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Question View */}
            {selectedTest && (
                <div className="mx-auto bg-white p-8 rounded-md shadow">
                    {/* Back Button */}
                    <div className='mb-4'>
                        <button className="border-2 rounded-md flex justify-center items-center hover:bg-[#E8594A] hover:text-white transition">
                            <Link to="/patientDashboard/assessment" className="flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md">
                                <div className='flex gap-4 items-center'>
                                    <span className="text-xl"><IoArrowBackSharp /></span>
                                    <span className='text-center text-lg'>পিছনে যান</span>
                                </div>
                            </Link>
                        </button>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                        {selectedTest.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{selectedTest.description}</p>

                    {selectedTest.questions.map((q, i) => (
                        <div key={q.id} className="mb-6">
                            <p className="font-medium mb-2">
                                {i + 1}. {q.text}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {selectedTest.options.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() =>
                                            setAnswers((prev) => ({ ...prev, [q.id]: opt.value }))
                                        }
                                        className={`px-4 py-2 rounded-xl border ${answers[q.id] === opt.value
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

                    {/*Show Submit Button only after all answered */}
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

                    {/*Result Display */}
                    {result && (
                        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
                            <p className="text-lg font-semibold text-blue-700">
                                মোট স্কোর: {result.total} / {selectedTest.scoring.maxScore}
                            </p>
                            <p className="text-gray-700 mt-2">
                                স্তর: <span className="font-bold">{result.level}</span>
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Test;