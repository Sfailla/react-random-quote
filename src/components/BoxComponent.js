import React from 'react';
import axios from 'axios';


class QuoteBoxComponent extends React.Component {   
    state = {
        quote: '',
        author: '',
        className: 'quote-box__container',
        authClassName: 'quote-box__author'
    }
    
    handleGetQuote = () => {
        axios.get('https://random-quote-generator.herokuapp.com/api/quotes/random')
            .then((response) => {
                const quote = response.data.quote;
                const author = response.data.author;

                const fadeIn = ' fade-in';
                const className = this.state.className.concat(fadeIn);
                const authClassName = this.state.authClassName.concat(fadeIn);

                this.setState(() => ({ className, authClassName }));
                setTimeout(() => {
                    this.setState(() => ({ className: 'quote-box__container', authClassName: 'quote-box__author' }));
                }, 1000);

                this.setState(() => ({ quote, author }));
                
            }).catch(error => {
                console.log(error);
            })
    }

    handleTweetQuote = () => {
        let encodedComponent = encodeURIComponent(this.state.quote, -this.state.author );
        window.open(`https://twitter.com/intent/tweet?text=${encodedComponent}`);
    }

    render() {        
        return (
            <div className="quote-box">
                <div className={this.state.className}>
                    <div className="quote-box__icon-box"><svg className="icon quote-box__icon--quote"><use xlinkHref="img/sprite.svg#icon-left-quote"></use></svg></div>
                    {this.state.quote === '' ? <p className="quote-box__p-quote-string">click the get quote button to get started!</p> 
                                             : <div className="quote-box__quote">{this.state.quote}</div>}
                </div>
                <div className="quote-box__vertical-space-container">
                    <div className={this.state.authClassName}>-{this.state.author}</div>
                    <div className="quote-box__container-buttons">
                        <button className="button quote-box__button--twitter" onClick={this.handleTweetQuote}><svg className="quote-box__icon--twitter"><use xlinkHref="img/sprite.svg#icon-twitter"></use></svg></button>
                        <button className="button quote-box__button--get-quote" onClick={this.handleGetQuote}>get quote</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default QuoteBoxComponent;