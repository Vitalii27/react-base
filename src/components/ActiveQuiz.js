import React from 'react'
import AnswerList from './AnswerList/AnswerList'

export default props => (
    <div className='active-quiz'>
        <p>
            <span>
                <strong>2.</strong>
                {props.question}
            </span>
            <small>4 из 2</small>
        </p>
        <AnswerList
            answers={props.answers}
            onActiveItem={props.onActiveItem}
        />
    </div>
)