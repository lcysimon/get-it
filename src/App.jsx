import { useState, useCallback } from 'react'
import { quizzes, categories } from './data/quizzes'

// Helper function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // Swap elements
    const temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp
  }
  return newArray
}

// Helper function to select random questions
const getRandomQuestions = (allQuestions, count = 20) => {
  const shuffled = shuffleArray(allQuestions)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [filterCategory, setFilterCategory] = useState('all')

  const filteredQuizzes = filterCategory === 'all'
    ? quizzes
    : quizzes.filter(q => q.category === filterCategory)

  const handleAnswerSelect = useCallback((option) => {
    if (isAnswered) return
    setSelectedAnswer(option)
    setIsAnswered(true)
    
    if (option === selectedQuiz?.questions[currentQuestion]?.correctAnswer) {
      setScore(prev => prev + 1)
    }
  }, [isAnswered, selectedQuiz, currentQuestion])

  const handleNext = useCallback(() => {
    if (!selectedQuiz) return
    
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setCompleted(true)
    }
  }, [selectedQuiz, currentQuestion])

  const startQuiz = useCallback((quiz) => {
    const quizWithRandomQuestions = {
      ...quiz,
      questions: getRandomQuestions(quiz.questions, 20),
      originalQuestionsCount: quiz.questions.length
    }
    setSelectedQuiz(quizWithRandomQuestions)
    setCurrentQuestion(0)
    setScore(0)
    setCompleted(false)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setCurrentPage('quiz')
  }, [])

  const restartQuiz = useCallback(() => {
    if (selectedQuiz) {
      startQuiz(selectedQuiz)
    }
  }, [selectedQuiz, startQuiz])

  const resetQuiz = useCallback(() => {
    setCurrentPage('home')
  }, [])

  // Home Page
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-indigo-600">Get-It</h1>
                <p className="text-gray-500">Master your interview skills</p>
              </div>
              <div className="hidden md:block">
                <p className="text-sm text-gray-400">
                  Practice quizzes • Data Engineering • Real interview questions
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Available Quizzes</h2>
            <p className="text-gray-500">Select a quiz to start - 20 random questions will be selected</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filterCategory === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Categories
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filterCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Quiz Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuizzes.map(quiz => (
              <div
                key={quiz.id}
                className="card cursor-pointer hover:shadow-lg transition-shadow hover:-translate-y-1"
                onClick={() => startQuiz(quiz)}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full">
                    {quiz.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{quiz.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{quiz.description}</p>
                <div className="text-sm text-gray-400">
                  {quiz.questions.length} questions available • 20 random per session
                </div>
              </div>
            ))}
          </div>

          {filteredQuizzes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No quizzes found for this category</p>
            </div>
          )}
        </main>
      </div>
    )
  }

  // Quiz Page
  if (currentPage === 'quiz' && selectedQuiz) {
    const question = selectedQuiz.questions[currentQuestion]
    const isCorrect = selectedAnswer === question?.correctAnswer
    const progress = ((currentQuestion + (isAnswered ? 1 : 0)) / selectedQuiz.questions.length * 100)

    // Completed State
    if (completed) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
          <div className="card max-w-md w-full text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Quiz Completed!</h2>
              <p className="text-gray-500 mt-2">You scored:</p>
            </div>

            <div className="mb-6">
              <div className="text-5xl font-bold text-indigo-600">
                {score}/{selectedQuiz.questions.length}
              </div>
              <div className="text-sm text-gray-400 mt-2">
                {Math.round((score / selectedQuiz.questions.length) * 100)}% Correct
              </div>
              {selectedQuiz.originalQuestionsCount && selectedQuiz.originalQuestionsCount > selectedQuiz.questions.length && (
                <div className="text-xs text-gray-400 mt-2">
                  (Selected from {selectedQuiz.originalQuestionsCount} questions)
                </div>
              )}
            </div>

            <div className="space-y-3">
              <button onClick={restartQuiz} className="btn-primary w-full">
                Try Again (New Random Questions)
              </button>
              <button onClick={resetQuiz} className="btn-secondary w-full">
                Back to Quizzes
              </button>
            </div>
          </div>
        </div>
      )
    }

    // Active Quiz
    if (!question) return null

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <button onClick={resetQuiz} className="flex items-center text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <div className="text-center">
              <h2 className="font-semibold text-gray-800">{selectedQuiz.title}</h2>
              <p className="text-sm text-gray-400">Question {currentQuestion + 1} of {selectedQuiz.questions.length}</p>
            </div>
            <div className="w-20"></div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="card mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-6">{question.question}</h3>
            
            <div className="space-y-3">
              {question.options && question.options.map((option, idx) => {
                const isSel = selectedAnswer === option
                let bgClass = 'bg-gray-50 hover:bg-gray-100'
                let borderClass = 'border-2 border-transparent'
                let textClass = 'text-gray-700'
                
                if (isAnswered) {
                  if (option === question.correctAnswer) {
                    bgClass = 'bg-green-50'
                    borderClass = 'border-green-500'
                    textClass = 'text-green-700'
                  } else if (isSel) {
                    bgClass = 'bg-red-50'
                    borderClass = 'border-red-500'
                    textClass = 'text-red-700'
                  } else {
                    bgClass = 'bg-gray-50'
                    textClass = 'text-gray-400'
                  }
                } else if (isSel) {
                  bgClass = 'bg-indigo-50 border-indigo-500'
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-lg border ${borderClass} ${bgClass} transition-colors ${
                      isAnswered ? 'cursor-default' : 'cursor-pointer hover:border-indigo-300'
                    }`}
                  >
                    <span className={`font-medium ${textClass}`}>{option}</span>
                    {isAnswered && option === question.correctAnswer && (
                      <span className="float-right text-green-600">✓</span>
                    )}
                    {isAnswered && isSel && option !== question.correctAnswer && (
                      <span className="float-right text-red-600">✗</span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              Score: {score}
            </div>
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`btn-primary ${!isAnswered ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {currentQuestion < selectedQuiz.questions.length - 1 ? 'Next' : 'Finish'}
            </button>
          </div>

          {/* Explanation (shown after answer) */}
          {isAnswered && question.explanation && (
            <div className="card mt-6 bg-indigo-50 border border-indigo-100">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-indigo-800">{question.explanation}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}

export default App
