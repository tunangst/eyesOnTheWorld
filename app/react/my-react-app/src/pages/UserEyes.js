import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUserAndEyes } from '../actions/userAction';
import BuildEyeCards from '../extra/utilityFunctions/BuildEyeCards';

const UserEyes = props => {
    const { getUserAndEyes, selectedUserEyes, selectedUserObj } = props;
    const userId = props.match.params.user;
    console.log(selectedUserObj);
    useEffect(() => {
        getUserAndEyes(userId);
    }, [getUserAndEyes, userId]);

    let cardList = [];
    if (selectedUserEyes.length > 0) {
        selectedUserEyes.forEach(eye =>
            cardList.push(<BuildEyeCards key={eye._id} eye={eye} />)
        );
    }
    return <section className='userEyes'>{cardList}</section>;
};

const mapStateToProps = state => ({
    selectedUserEyes: state.user.selectedUserEyes,
    selectedUserObj: state.user.selectedUserObj
});

export default connect(mapStateToProps, { getUserAndEyes })(UserEyes);
