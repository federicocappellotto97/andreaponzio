import FirstColumn from "./_partials/FirstColumn"
import SecondColumn from "./_partials/SecondColumn"
import ThirdColumn from "./_partials/ThirdColumn"

const Footer = () => {
  return (
    <footer className="flex items-center p-30 mt-auto">
      <div className="flex-1">
        <FirstColumn />
      </div>
      <div>
        <SecondColumn />
      </div>
      <div className="flex-1 flex justify-end">
        <ThirdColumn />
      </div>
    </footer>
  )
}

export default Footer
