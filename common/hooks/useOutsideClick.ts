import { useRef, useEffect, LegacyRef } from 'react'
const useOutsideClick = (callback: () => void): LegacyRef<HTMLDivElement> | undefined => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      if (
        ref.current != null &&
        event.target instanceof HTMLElement &&
        !ref.current.contains(event.target)
      ) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return ref
}

export default useOutsideClick
