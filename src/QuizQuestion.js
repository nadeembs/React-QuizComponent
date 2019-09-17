import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton'
class QuizQuestion extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <main>
                <section>
                <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                    {this.props.quiz_question.answer_options.map(
                        (v, i, a) => {
                            return <QuizQuestionButton 
                                        key={i} 
                                        button_text={v} 
                                        clickHandler={this.handleClick.bind(this)}  />
                        }
                    )}
                </ul>
                </section>
            </main>
        );
    }
    handleClick(buttonText) {
        const isCorrectAnswer = this.props.quiz_question.answer === buttonText;
        if(isCorrectAnswer) {
            this.props.showNextQuestionHandler();
        }
    }
}

export default QuizQuestion;