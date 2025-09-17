import WebsiteContent from "./WebContent"
import WebsiteFooter from "./WebFooter"
import WebsiteHeader from "./WebHeader"

function CreateLayout() {
  return (
    <>
    <WebsiteHeader/>
    <WebsiteContent/>
    <WebsiteFooter/>
    </>
  )
}

export default CreateLayout