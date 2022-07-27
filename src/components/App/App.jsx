import s from './App.module.css'
import GameBoard from '../GameBoard/GameBoard'
import Steps from '../Steps/Steps'


const App = () => {
    return (
        <div className={s.App}>
            <header>
                <h1>Лабиринт</h1>
            </header>
            <GameBoard/>
            <Steps/>
        </div>
    )
}

export default App
