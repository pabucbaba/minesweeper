import React, { useEffect,useState } from 'react'
import bomb from './bomb.png'
const Square = ({onFaultClick,isVisible,isBomb,neighborBombCount,gameOver}) => {
    let [isLeftClicked,setIsLeftClicked] = useState(false);
    let [isRightClicked,setIsRightClicked] = useState(false);
    let [isFaultClicked,setIsFaultClicked] = useState(false);
    useEffect(() => !gameOver ? (setIsLeftClicked(false),setIsRightClicked(false),setIsFaultClicked(false)) : false , [gameOver]);
    function handleClick(e)
    {
        if(gameOver)
            return;
        e.preventDefault();
        if (e.type === 'click') {
            console.log('Left click');
            if(isRightClicked) 
                setIsRightClicked(false);
            setIsLeftClicked(true);
            if(isBomb)
            {
                setIsFaultClicked(true);
                onFaultClick();
            }
          } else if (e.type === 'contextmenu') {
            console.log('Right click');
            setIsRightClicked(true);
          }
    }
    return (<>
    
        <div onClick={handleClick} onContextMenu={handleClick}  style={{color:"white",cursor:"pointer",width:"60px",float:"left",textAlign:"center",height:"50px",paddingTop:"15px",fontSize:"19px", border:"2px solid #1b1717",backgroundColor:isRightClicked || isFaultClicked ? "red" : "#536162"}}>
            {!isRightClicked && !isLeftClicked && !gameOver ? ""
            :
             (isLeftClicked && !isFaultClicked) || (gameOver && !isBomb) ? neighborBombCount 
             :
             isBomb && !isRightClicked? <img src={bomb}></img> : ""}
        </div>
        </>
    );
};

export default Square;
