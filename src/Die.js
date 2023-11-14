import React from 'react';

export default function Die(props) {

    const one = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M0 0h512v512H0z" fill="#2b283a" />
            <path
              d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z"
              fill={props.held ? '#f2cdcd' : '#FFFFFF'}
              />
        </svg>
    );

    const two = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M0 0h512v512H0z" fill="#2b283a" />
            <path
              d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
              fill={props.held ? '#ddb6f2' : '#FFFFFF'}
            />
        </svg>
    );
    
    const three = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M0 0h512v512H0z" fill="#2b283a" />
            <path
              d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
              fill={props.held ? '#f28fad' : '#FFFFFF'}
            />
        </svg>
    );
    
    const four = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M0 0h512v512H0z" fill="#2b283a" />
            <path
              d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
              fill={props.held ? '#fae3b0' : '#FFFFFF'}
            />
        </svg>
    );
    
    const five = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M0 0h512v512H0z" fill="#2b283a" />
            <path
              d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
              fill={props.held ? '#abe9b3' : '#FFFFFF'}
            />
        </svg>
    );
    
    const six = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M0 0h512v512H0z" fill="#2b283a" />
            <path
              d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
              fill={props.held ? '#96cdfb' : '#FFFFFF'}
            />
        </svg>
    );

    let diceImage = '';
    switch (props.value) {
        case 1:
            diceImage = one;
            break;
        case 2:
            diceImage = two;
            break;
        case 3:
            diceImage = three;
            break;
        case 4:
            diceImage = four;
            break;
        case 5:
            diceImage = five;
            break;
        default:
            diceImage = six;
    }

    return (
        <div className='die-face' onClick={props.hold}>
            {diceImage}
        </div>
    )
}