interface ReadingGoalProps {
  title: string
  goalPages: number
  currentPage: number
  onReadPages: () => void
  onClose: () => void
}

function ReadingGoal({
  title,
  goalPages,
  currentPage,
  onReadPages,
  onClose,
}: ReadingGoalProps) {
  return (
    <section className="reading-goal">
      <button
        type="button"
        className="reading-goal-close"
        onClick={onClose}
        aria-label="Close"
      >
        x
      </button>
      <h2>{title}</h2>
      <progress value={currentPage} max={goalPages} />
      <p>
        {currentPage} / {goalPages} pages
      </p>
      <button type="button" onClick={onReadPages}>
        Read 10 pages
      </button>
    </section>
  )
}

export default ReadingGoal
