import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './ParallaxScroll.scss';

class ParallaxScroll extends Component {

    render(){
        return (
            <div id="about">
                <div className="bgimg-1">
                    <div className="caption">
                        <span className="border-lined">SCROLL DOWN</span>
                    </div>
                </div>
                <div className="parall-text-bg-w">
                    <h3>테스트중중</h3>
                    <p>
                    테스트를 하고 있습니다 테스트테스트
                    테스트를 하고 있습니다 테스트테스트
                    테스트를 하고 있습니다 테스트테스트
                    테스트를 하고 있습니다 테스트테스트
                    테스트를 하고 있습니다 테스트테스트
                    테스트를 하고 있습니다 테스트테스트
                    테스트를 하고 있습니다 테스트테스트
                    테스트를 하고 있습니다 테스트테스트
                    테스트를 하고 있습니다 테스트테스트
                    </p>
                </div>
                <div className="bgimg-2">
                    <div className="caption">
                        <span className="border">LESS HEIGHT</span>
                    </div>
                </div>
                <div>
                    <div className="parall-text-bg-b">
                        <p>
                        테스트테스트테스트테스트테스트
                        </p>
                    </div>
                </div>
                <div className="bgimg-3">
                    <div className="caption">
                        <span className="border">SCROLL UP</span>
                    </div>
                </div>
                <div>
                    <div className="parall-text-bg-b">
                        <p>
                        테스트트트트트트트트트트트트트
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ParallaxScroll;