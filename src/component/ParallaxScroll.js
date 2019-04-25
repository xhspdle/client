import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './ParallaxScroll.scss';

class ParallaxScroll extends Component {

    render(){
        return (
            <div id="about" styile="margin-top:80px;">
                <div className="bgimg-1">
                    <div className="caption">
                        <span className="border-lined">DEVELOPMENT TEAM</span>
                    </div>
                </div>
                <div className="parall-text-bg-w">
                    <h3>OF DEVELOPER</h3>
                    <p>
                    회사 구성원 모두가 개발자인 회사, 데브짓수입니다.
                    개발자의, 개발자에 의한, 개발자를 위한 회사를 지향합니다.
                    팀 단위로 협업하며 유기적으로 문제해결하고 성과를 공유합니다.
                    성장과 배움에 목마른 개발자들이 모여 서로를 위한 문화를 만들어 나갑니다.
                    기술 스택은 Javascript, jQuery, React, NodeJS, Java, Spring, OracleSQL, MySQL, MSSQL 이며
                    웹개발이 중심입니다. 주로 Spring을 기반으로 한 WEB 프로젝트를 진행하며
                    React, NodeJS와 같은 신기술 또한 개척하고 있습니다.
                    </p>
                </div>
                <div className="bgimg-2">
                    <div className="caption">
                        <span className="border">MARATHON</span>
                    </div>
                </div>
                <div>
                    <div className="parall-text-bg-b">
                        <p>
                        직업 특성상, 체력을 관리해주지 않으면 나이들어 고생합니다.
                        이에 데브짓수는 마라톤에 정기적으로 참여하여
                        구성원들의 체력향상을 도모합니다.
                        </p>
                    </div>
                </div>
                <div className="bgimg-3">
                    <div className="caption">
                        <span className="border">WORK LIFE BALANCE</span>
                    </div>
                </div>
                <div>
                    <div className="parall-text-bg-b">
                        <p>
                        평일 10시 출근, 6시 퇴근.
                        금요일 4시 퇴근.
                        수습에서 벗어나면 화, 목 재택근무.
                        데브짓수는 저녁있는 삶을 추구합니다.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ParallaxScroll;