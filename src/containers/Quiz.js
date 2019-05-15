import React, {Component} from 'react'
import ActiveQuiz from '../components/ActiveQuiz'

export default class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'Как деал ?',
                answer: [
                    {text: 'Вопрос 1', id:'1'},
                    {text: 'Вопрос 2', id:'2'},
                    {text: 'Вопрос 3', id:'3'},
                    {text: 'Вопрос 4', id:'4'},
                ]
            }]
    }
    onActiveItem = answerId => {
        console.log(answerId);
    }

    render() {
        return (
            <div className='quiz'>
                <h1>Quiz</h1>
                <div className='Quiz-active-quiz'>
                    <ActiveQuiz
                        answers={this.state.quiz[0].answer}
                        question={this.state.quiz[0].question}
                        onActiveItem={this.onActiveItem}
                    />
                </div>
            </div>
        )
    }
}