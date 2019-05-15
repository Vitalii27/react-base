import React from 'react'
import AnswerItem from '../AnswerItem/AnswerItem'

const AnswerList = props => {
    return(
        <ul>
            {props.answers.map((answer, index) => {

                return (
                    <AnswerItem
                        key={index}
                        answer={answer}
                        onActiveItem={props.onActiveItem}
                    />
                )
            })}
        </ul>
    )
}
export default AnswerList
