import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import SuggestedEye from '../extra/utilityFunctions/SuggestedEye';
import {
    mergeSort,
    findAndAddDistance
} from '../extra/utilityFunctions/utilities';
import { toggleSuggestion } from '../actions/tabsAction';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import icons from '../extra/images/icons.svg';

const SuggestionBar = props => {
    const {
        eyes,
        eye,
        tabs: { suggestions },
        states: { suggestLocal },
        toggleSuggestion
    } = props;
    console.log(suggestions);

    let suggestedEyes = [];
    // sort eye list into array
    // take closest up to 10 eyes and loop over them posting to suggested eyes arr
    if (suggestions) {
        let eyesArray;
        if (!suggestLocal) {
            eyesArray = mergeSort('dsc', eyes);
            console.log(eyesArray);
            console.log('eyesArray sorted');
        } else {
            const addDistance = findAndAddDistance(eye, eyes);
            console.log(addDistance);
            eyesArray = mergeSort('asc', addDistance);
            eyesArray = eyesArray.slice(1);
        }
        if (eyesArray !== null && eyesArray.length > 0) {
            if (eyesArray.length < 10) {
                for (let i = 0; i < eyesArray.length; i++) {
                    suggestedEyes.push(
                        <SuggestedEye key={i} eye={eyesArray[i]} />
                    );
                }
            } else {
                for (let i = 0; i < 10; i++) {
                    suggestedEyes.push(
                        <SuggestedEye key={i} eye={eyesArray[i]} />
                    );
                }
            }
        }
    }

    useEffect(() => {
        console.log('running useEffect in suggestionBar');
        //find close eyes
    }, []);

    let suggestionComponent = (
        // <CSSTransitionGroup
        //     transitionName='CSSTransitionSuggestions'
        //     transitionAppear={true}
        //     transitionAppearTimeout={5000}
        //     transitionEnter={false}
        //     transitionLeave={false}
        // >
        <aside className='suggestionClosed'>
            <svg
                className='icon'
                onClick={eyes.length > 0 ? () => toggleSuggestion() : null}
            >
                <use href={`${icons}#down`}></use>
            </svg>
        </aside>
        // </CSSTransitionGroup>
    );
    if (suggestions) {
        suggestionComponent = (
            // <CSSTransitionGroup
            // transitionName='CSSTransitionSuggestions'
            // transitionAppear={false}
            // transitionAppearTimeout={5000}
            // transitionEnter={true}
            // transitionLeave={true}
            // >
            <aside className='suggestionOpen'>
                <svg className='icon' onClick={() => toggleSuggestion()}>
                    <use href={`${icons}#up`}></use>
                </svg>
                <div className='suggestionContainer'>{suggestedEyes}</div>
            </aside>
            // </CSSTransitionGroup>
        );
    }

    return suggestionComponent;
};

const mapStateToProps = state => ({
    eyes: state.eyes,
    eye: state.eye,
    tabs: state.tabs,
    states: state.states
});
export default connect(mapStateToProps, { toggleSuggestion })(SuggestionBar);