import peaceHand from "@/assets/icons/peace-hand.png"
import eyes from "@/assets/icons/eyes.png"
import checkmark from "@/assets/icons/checkmark.png"
import waveHand from "@/assets/icons/wave-hand.png"
import code from "@/assets/icons/code.png"
import rocket from "@/assets/icons/rocket.png"
import search from "@/assets/icons/search.png"

const iconMap = {
  "peace-hand": peaceHand,
  "eyes": eyes,
  "checkmark": checkmark,
  "wave-hand": waveHand,
  "code": code,
  "rocket": rocket,
  "search": search,
}

export type IconName = keyof typeof iconMap

interface IconProps {
  name: IconName
  className?: string
  alt?: string
}

export default function Icon({ name, className = "w-6 h-6", alt = "" }: IconProps) {
  return (
    <img 
      src={iconMap[name]} 
      alt={alt} 
      className={className}
    />
  )
}
