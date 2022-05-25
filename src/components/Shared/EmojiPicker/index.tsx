import { Tooltip } from '@components/UI/Tooltip'
import useOnClickOutside from '@components/utils/hooks/useOnClickOutside'
import data from '@emoji-mart/data'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import trackEvent from '@lib/trackEvent'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { FC, useEffect, useRef, useState } from 'react'

type Props = {
  // eslint-disable-next-line no-unused-vars
  onSelectEmoji: (emoji: string) => void
}

const Picker = (props: any) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import('emoji-mart').then((EmojiMart) => {
      new EmojiMart.Picker({ ...props, data, ref })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={ref} />
}

const EmojiPicker: FC<Props> = ({ onSelectEmoji }) => {
  const { resolvedTheme } = useTheme()
  const [showPicker, setShowPicker] = useState(false)
  const pickerRef = useRef(null)

  useOnClickOutside(pickerRef, () => setShowPicker(false))

  const onEmojiClick = (data: { native: string }) => {
    onSelectEmoji(data.native)
  }

  return (
    <div className="relative">
      <Tooltip placement="top" content="Emoji">
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={() => {
            trackEvent('choose emoji')
            setShowPicker(!showPicker)
          }}
          aria-label="Choose Emoji"
        >
          <div className="w-full text-brand-500 dark:text-brand-400">
            <EmojiHappyIcon className="w-5 h-5" />
          </div>
        </motion.button>
      </Tooltip>
      {showPicker && (
        <div className="absolute z-50" ref={pickerRef}>
          <Picker onEmojiSelect={onEmojiClick} theme={resolvedTheme} />
        </div>
      )}
    </div>
  )
}

export default EmojiPicker
