import React from 'react';

const CompA = (props) => {
    let textInput = React.createRef();
    const onTransferClick = () => props.transferDataCallback(textInput.value);
    return(
        <>
        <input type='text'
            ref={ r => textInput = r }
        ></input>
        <button onClick={onTransferClick}>->Transfer-></button>
        </>
    );
}
export default CompA;