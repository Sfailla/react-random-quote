import React from 'react';

import HeaderComponent from './HeaderComponent';
import TitleComponent from './TitleComponent';
import QuoteBoxComponent from './BoxComponent';


class QuoteGeneratorApp extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <TitleComponent />
                <QuoteBoxComponent />
            </div>
        );
    }
}

export default QuoteGeneratorApp;
