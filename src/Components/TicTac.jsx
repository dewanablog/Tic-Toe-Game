import React, { useRef, useState } from 'react'
import './tictac.css'
import xImg from '../assets/x.png'
import zeroImg from '../assets/zero.png'

let data = ["","","","","","","","",""]

const TicTac = () => {

    

    const [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)
    const titlRef = useRef(null)

    const toggle = (e, num) => {
        if (lock) {
            return 0
        }
        if (data[num] !== "") {
            return
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${xImg}' alt='X' />`
            data[num] = "x"
        } else {
            e.target.innerHTML = `<img src='${zeroImg}' alt='O' />`
            data[num] = "o" 
        }
        setCount(count + 1)
        checkWin()
    }

    const checkWin = () =>{
        if(data[0] === data[1] && data[1] === data[2] && data[2] !== ''){
            win(data[2])
        }else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ''){
            win(data[6])
        }else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ''){
            win(data[8])
        }else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ''){
            win(data[6])
        }else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ''){
            win(data[7])
        }else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ''){
            win(data[8])
        }else if(data[0] === data[1] && data[1] === data[2] && data[2] !== ''){
            win(data[2])
        }
    }

    const winImgClassName = "win-img"

     const win = (winner) => {
        setLock(true)
        if(winner === "x"){
            titlRef.current.innerHTML = `Congratulation The <img className = 'win-img' src = ${xImg} alt = 'xImg'/> is Win the game`
        }else{
            titlRef.current.innerHTML = `Congratulation The <img className = 'win-img' src = ${zeroImg} alt = 'zeroImg'/> is Win the game`
        }
     }


     const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const boxes_Array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];


     const reset = () =>{
        setLock(false)
        data = ["","","","","","","","",""]
        titlRef.current.innerHTML = `<h2>Tic Tac Toe Game In <span>React</span></h2>`

        boxes_Array.map((e) => {
            e.current.innerHTML = ''
        })
     }

    return (
        <div className='container'>
            <h2 className = 'title' ref={titlRef}>Tic Tac Toe Game In <span>React</span></h2>
            <div className="board">
                <div className="row1">
                    <div className="box" ref={box1} onClick={(e) => toggle(e, 0)}></div>
                    <div className="box" ref={box2} onClick={(e) => toggle(e, 1)}></div>
                    <div className="box" ref={box3}  onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className="row2">
                    <div className="box" ref={box4} onClick={(e) => toggle(e, 3)}></div>
                    <div className="box" ref={box5} onClick={(e) => toggle(e, 4)}></div>
                    <div className="box"  ref = {box6} onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className="row3">
                    <div className="box" ref={box7} onClick={(e) => toggle(e, 6)}></div>
                    <div className="box" ref={box8}  onClick={(e) => toggle(e, 7)}></div>
                    <div className="box" ref={box9} onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button className='reset' onClick={() => {reset()}}>reset</button>
        </div>
    )
}

export default TicTac