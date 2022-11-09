export default function ShowBreakpoint() {
  return (
    <div>
      <div className="px-3 py-px text-lg font-bold text-yellow-400 bg-yellow-100 rounded-md sm:block max-w-max md:hidden">
        SM
      </div>
      <div className="hidden px-3 py-px text-lg font-bold text-red-400 bg-red-100 rounded-md max-w-max md:block lg:hidden xl:hidden 2xl:hidden">
        MD
      </div>
      <div className="hidden px-3 py-px text-lg font-bold text-green-400 bg-green-100 rounded-md max-w-max lg:block xl:hidden 2xl:hidden">
        LG
      </div>
      <div className="hidden px-3 py-px text-lg font-bold text-blue-400 bg-blue-100 rounded-md max-w-max xl:block 2xl:hidden">
        XL
      </div>
      <div className="hidden px-3 py-px text-lg font-bold text-purple-400 bg-purple-100 rounded-md max-w-max 2xl:block">
        2XL
      </div>
    </div>
  )
}
