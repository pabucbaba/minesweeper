import logo from './logo.svg';
import './App.css';
import React, { useEffect,useState } from 'react'
import Square from './Square';
function App() {
const gridSize = 8;
  let [mineContent,setMineContent] = useState();
  let [isFault,setIsFault] = useState(false);

  useEffect(() => {
    createSquareContents();
  }, []);
  function createSquareContents()
  {
    let gridContent = new Array(gridSize);
    for(let i=0;i<gridSize;i++)
    {
      gridContent[i] = new Array(gridSize);
      for(let z = 0;z<gridSize;z++)
      {
          let randNumber = Math.floor(Math.random() * 100);   
          let isBomb = randNumber < 30;
          gridContent[i][z] = {'isBomb':isBomb,'neighborBombCount':0};
      }
    }
    setNeighborCounts(gridContent);
  }
  function setNeighborCounts(gridContent)
  {
    for(let i=0;i<gridSize;i++)
    {
      for(let z = 0;z<gridSize;z++)
      {
        let rowsToCheck = [];
        const left = z-1;
        const right = z+1;
        const above = i-1;
        const below = i+1;
        const hasLeft = left >= 0;
        const hasRight = right <= gridSize-1;
        const hasAbove = above >= 0;
        const hasBelow = below <= gridSize-1;
        let mineCount = 0;
        if(hasLeft)
        {
          mineCount = gridContent[i][left].isBomb ? mineCount+1 : mineCount;
        }
        if(hasRight)
        {
          mineCount = gridContent[i][right].isBomb ? mineCount+1 : mineCount;
        }
        if(hasAbove)
        {
          mineCount = gridContent[above][z].isBomb ? mineCount+1 : mineCount;
          if(hasLeft)
          {
            mineCount = gridContent[above][left].isBomb ? mineCount+1 : mineCount;
          }
          if(hasRight)
          {
            mineCount = gridContent[above][right].isBomb ? mineCount+1 : mineCount;
          }
        }
        if(hasBelow)
        {
          mineCount = gridContent[below][z].isBomb ? mineCount+1 : mineCount;
          if(hasLeft)
          {
            mineCount = gridContent[below][left].isBomb ? mineCount+1 : mineCount;
          }
          if(hasRight)
          {
            mineCount = gridContent[below][right].isBomb ? mineCount+1 : mineCount;
          }
        }
        gridContent[i][z].neighborBombCount = mineCount;
       
      }
    }
    console.log(gridContent);
    setMineContent(gridContent);
  }
  
  function setOnFaultClick()
  {
    setIsFault(true);
  }
  function startNewGame()
  {
    setIsFault(false);
    setMineContent([]);
    createSquareContents();
  }
  return (
    <>
   
      <div className="canvas">
      {isFault ? <div style={{width:"100%",marginBottom:"50px"}}><div style={{fontSize:"16px",width:"350px",margin:"0 auto"}}>Mine exploded! <span onClick={startNewGame} style={{cursor:"pointer",color:"blue"}}>Click here to start new game</span></div></div> : <></>}
        {mineContent && mineContent.map(mineRow => 
        {
          return (<>
            {mineRow.map(mineItem => 
          {
            return (<Square gameOver={isFault} onFaultClick={setOnFaultClick} isBomb={mineItem.isBomb} neighborBombCount={mineItem.neighborBombCount} isVisible={true}></Square>)
          })}
          <div style={{clear:"both"}}></div>
          </>
          )
        })}
        
      </div>
      </>
  );
}

export default App;
