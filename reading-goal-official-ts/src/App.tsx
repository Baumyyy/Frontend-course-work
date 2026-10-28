import { useState } from 'react'
import ReadingGoal from './ReadingGoal'
import useReadingProgress from './useReadingProgress'
import './App.css'

const STORAGE_KEY = 'reading-goal-current-page'

function App() {
  const [currentPage, setCurrentPage] = useReadingProgress(STORAGE_KEY, 0)
  const [isGoalVisible, setIsGoalVisible] = useState<boolean>(true)

  function handleReadPages(): void {
    setCurrentPage((currentPage) => currentPage + 10)
  }

  function handleClose(): void {
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
