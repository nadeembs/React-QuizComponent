import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton'
class QuizQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {
            incorrectAnswer: false
        };
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
                {
                    this.state.incorrectAnswer ? (<p className='error'>Sorry, that's not right</p>) : null
                }
            </main>
        );
    }
    handleClick(buttonText) {
        const isCorrectAnswer = this.props.quiz_question.answer === buttonText;
        if(isCorrectAnswer) {
            this.setState({incorrectAnswer: false});
            this.props.showNextQuestionHandler();
        } else {
            this.setState({incorrectAnswer: true});
        }
    }
}

export default QuizQuestion;