import { useState } from 'react'
import ReadingGoal from './ReadingGoal'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isGoalVisible, setIsGoalVisible] = useState(true)

  function handleReadPages() {
    setCurrentPage((currentPage) => currentPage + 10)
  }

  function handleClose() {
    setIsGoalVisible(false)
    console.log('Reading goal dismissed')
  }

  return (
    <>
      {isGoalVisible && (
        <ReadingGoal
          title="React basics"
          goalPages={50}
          currentPage={currentPage}
          onReadPages={handleReadPages}
          onClose={handleClose}
        />
      )}
    </>
  )
}

export default App
