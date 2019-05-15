import React from 'react'

export default props => (
    <li onClick={() => props.onActiveItem(props.answer.id)}>
        {props.answer.text}

    </li>
)