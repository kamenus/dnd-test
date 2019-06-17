import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../constants'

function Knight() {
  const [isDragging, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
  })

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 40,
        fontWeight: 'bold',
        cursor: 'move',
        height: '25vh',
        background: 'red',
      }}
    >
    </div>
  )
}

export default Knight