import React from 'react'
import Square from '../Square'
import Knight from '../Knight'
import BoardSquare from '../BoardSquare'
import { canMoveKnight, moveKnight } from '../../utils/Game'
import { DragDropContextProvider } from 'react-dnd'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'


function renderSquare(i, knightPosition) {
   const x = i % 8
   const y = Math.floor(i / 8)


   return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
         <BoardSquare x={x} y={y}>
            {renderPiece(x, y, knightPosition)}
         </BoardSquare>
      </div>
   )
}

function renderPiece(x, y, [knightX, knightY]) {
   if (x === knightX && y === knightY) {
      return <Knight />
   }
}

function Board({ knightPosition }) {
   const squares = []
   for (let i = 0; i < 64; i++) {
      squares.push(renderSquare(i, knightPosition))
   }

   return (
      <div
         style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexWrap: 'wrap',
         }}
      >
         {squares}
      </div>
   )
}

export default DragDropContext(HTML5Backend)(Board)