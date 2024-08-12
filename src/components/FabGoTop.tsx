import { Fab } from '@mui/material'
import { useState, useEffect } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

interface IFabGoTopProps {
  refSpect: React.RefObject<HTMLDivElement>
}
export const FabGoTop = ({ refSpect }: IFabGoTopProps) => {
  const [showFab, setShowFab] = useState<boolean>(false)
  useEffect(() => {
    if (!refSpect.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setShowFab(!entry.isIntersecting),
      { threshold: 0.5 },
    )
    observer.observe(refSpect.current)
    return () => observer.disconnect()
  }, [refSpect])
  return (
    <Fab
      color="primary"
      aria-label="Go to top"
      sx={{
        position: 'fixed',
        display: 'block',
        bottom: 16,
        right: 16,
        zIndex: 1,
        opacity: showFab ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
      size="small"
      onClick={() => refSpect.current?.scrollIntoView({ behavior: 'smooth' })}
    >
      <ArrowUpwardIcon />
    </Fab>
  )
}
