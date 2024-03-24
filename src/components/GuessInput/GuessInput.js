import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("")
  function handleSubmit(event) {
    event.preventDefault();
    // no longer needed because added pattern to <input>
    // if (guess.length !== 5) {
    //   window.alert('Please enter exactly 5 characters  😃')
    //   return;
    // }
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }
  return (
  <form 
    onSubmit={handleSubmit}className="guess-input-wrapper">
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      required
      disabled={gameStatus !== 'running'}
      minLength={5}
      maxLength={5}
      // Required because input is changed to uppercase. min and maxLength are no longere needed
      pattern="[a-zA-Z]{5}"
      title="5 letter word"
      id="guess-input" 
      type="text" 
      value={tentativeGuess} 
      
      // This wasn't the issue but leaving solution code in

      // onChange={(event) => {
      //   setTentativeGuess(event.target.value.toUpperCase());
      
      onChange={(event) => {
        const nextGuess = event.target.value.toUpperCase();
        setTentativeGuess(nextGuess);
      }} />
  </form>
  )
}

export default GuessInput;
