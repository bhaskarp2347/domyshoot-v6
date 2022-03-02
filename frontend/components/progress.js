import { useEffect, useState } from "react"
import { useNProgress } from "@tanem/react-nprogress"
import { useProgressStore } from "../store/useProgressStore"
import { useRouter } from "next/router"

const Progress = () => {
  const router = useRouter()
  const [hide, setHide] = useState(false)
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating)
  const isAnimating = useProgressStore((state) => state.isAnimating)
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  })

  useEffect(() => {
    const handleStart = () => {
      setHide(false)
      setIsAnimating(true)
    }
    const handleStop = () => {
      setTimeout(() => {
        setHide(true)
      }, 1000)
      setIsAnimating(false)
    }

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleStop)
    router.events.on("routeChangeError", handleStop)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleStop)
      router.events.off("routeChangeError", handleStop)
    }
  }, [router, isFinished, setIsAnimating])

  return (
    <div
      className="progress-bar-container"
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      <div
        className="progress-bar"
        style={{
          opacity: isFinished ? 0 : 1,
          marginLeft: hide ? "-100%" : `${(-1 + progress) * 100}%`,
          transition: `margin-left ${animationDuration}ms linear`,
        }}
      />
    </div>
  )
}

export default Progress
