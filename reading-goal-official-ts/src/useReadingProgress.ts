import { useEffect, useState } from 'react'

function useReadingProgress(storageKey: string, initialValue: number) {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const saved = localStorage.getItem(storageKey)
    return saved ? Number(saved) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(storageKey, String(currentPage))
  }, [currentPage, storageKey])

  return [currentPage, setCurrentPage] as const
}

export default useReadingProgress
