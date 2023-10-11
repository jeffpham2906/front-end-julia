
function Form3ColContainer ({children}) {
  return (
    <div className="grid grid-cols-[1fr,1.5fr,auto] items-center gap-8 sm:flex sm:flex-col sm:items-start sm:gap-1">
      {children}
    </div>
  )
}

export default Form3ColContainer
