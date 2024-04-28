import FirstScreen from './components/FirstScreen/FirstScreen'
import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import SecondScreen from './components/SecondScreen/SecondScreen';
import styles from './components/FirstScreen/FirstScreen.module.css'

const App = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0)

  const handleSelectedRating = (rating: number) => {
    setSelectedRating(rating)
  }

  return (
    <main className={styles.main_container}>
      <Routes>
        <Route path='/' element={<FirstScreen rating={handleSelectedRating}/>} />
        <Route path='/submitted' element={<SecondScreen selectedRating={selectedRating} />} />
      </Routes>
    </main>
  )
}

export default App