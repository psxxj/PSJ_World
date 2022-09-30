import React from "react"
import ReactDom from "react-dom"

function RootComponent() {
  return (
    <div>
      <h1>Psxxj World</h1>
      <p>Setting---</p>
    </div>
  )
}

ReactDom.render(<RootComponent />, document.querySelector("#source"))
if (module.hot) {
  module.hot.accept()
}