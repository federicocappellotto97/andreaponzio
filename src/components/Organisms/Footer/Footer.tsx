import FirstColumn from './_partials/FirstColumn'
import SecondColumn from './_partials/SecondColumn'
import ThirdColumn from './_partials/ThirdColumn'

const Footer = () => {
  return (
    <footer className="flex items-center p-30 mt-auto">
      <div className="flex-1 hidden lg:block">
        <FirstColumn />
      </div>
      <div className="flex-1 lg:flex-auto">
        <SecondColumn />
      </div>
      <div className="flex-1 hidden lg:flex justify-end">
        <ThirdColumn />
      </div>
    </footer>
  )
}

export default Footer
