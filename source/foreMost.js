import React from "react"
import ReactDom from "react-dom/client"
import './foreMost.css'
import TopBar from "./topBar/topBar.js"
import MainCover from "./mainCover/mainCover.js"

function RootComponent() {
  return (
    <div>
      <TopBar />
      <MainCover />
    </div>
  )
}

const root = ReactDom.createRoot(document.querySelector("#source"));
root.render(<RootComponent />);

if (module.hot) {
  module.hot.accept()
}