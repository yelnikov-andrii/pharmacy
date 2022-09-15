import { MainPage } from "../MainPage/MainPage"
import { Medicines } from "../Medicines/Medicines"
import { Route, Routes } from "react-router-dom"

export const Main = () => {
  return (
      <main className='main'>
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />}>
        </Route>
        <Route path='/medicines/*' element={<Medicines />}>
        </Route>
      </Routes>
    </div>
  </main>
  )
}