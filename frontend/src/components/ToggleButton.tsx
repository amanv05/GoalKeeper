import { CheckIcon } from "lucide-react"
import { useState } from "react"

const ToggleButton = () => {

    const [isCompleted, SetIsCompleted] = useState(false);

  return (
    <div>
      <CheckIcon />
    </div>
  )
}

export default ToggleButton
