
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { SendIcon } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { QUICK_VIDEO_SUGGESTIONS } from "@/data/constant"

function Hero() {
  return (
    <div className="flex items-center mt-20 flex-col">
        <div>
            <h2 className="text-4xl font-bold">
                Learn Smarter with <span className="text-primary">AI Video Courses</span>
            </h2>
            <p className="text-center text-gray-500 mt-3 text-xl">Turn any topic into a complete course</p>
        </div>

<div className="grid w-full max-w-xl mt-5 bg-white z-10 gap-6">
      <InputGroup>
        <InputGroupTextarea
          data-slot="input-group-control"
          className="flex field-sizing-content min-h-24 w-full resize-none rounded-xl bg-white px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
          placeholder="Autoresize textarea..."
        />
        <InputGroupAddon align="block-end">
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Full Course" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="full-course">Full Course</SelectItem>
    <SelectItem value="quick-explain-video">Quick Explanation Video</SelectItem>
    
  </SelectContent>
</Select>
          <InputGroupButton className="ml-auto" size="icon-sm" variant="default">
            <SendIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
<div className="flex gap-5 mt-5 max-w-3xl flex-wrap justify-center z-10">
    {QUICK_VIDEO_SUGGESTIONS.map((suggestion, index) => (
        <h2 className="border rounded-2xl px-2 p-1 text-sm bg-white" key={index}>{suggestion.title}</h2>
    ))}
</div>
    </div>
  )
}
export default Hero