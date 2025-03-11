import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [calculo, setCalculo] = useState('');
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setCalculo(e.target.value);
  };

  const soma = (a) => {
    if (a === 'AC') {
      setCalculo('');
      setResult(0);
    } else {
      setCalculo(calculo + a);
      setResult(evaluate(calculo));
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      soma('=');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-4xl mt-10'>Calculadora</h1>
      <div className='text-3xl bg-background rounded-sm p-5'>
        <input
          type='text'
          className='bg-input mb-3 mt-5 w-full max-w-96 text-white p-2'
          value={calculo}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <div className='grid grid-cols-4 gap-2'>
        <button onClick={() => soma('AC')} type='submit' className='bg-operator text-white p-3 rounded-sm'>AC</button>
<button onClick={() => soma('%')} type='submit' className='bg-operator text-white p-3 rounded-sm'>%</button>
<button onClick={() => soma('/')} type='submit' className='bg-operator text-white p-3 rounded-sm'>/</button>
<button onClick={() => soma('.')} type='submit' className='bg-operator text-white p-3 rounded-sm'>.</button>

<button onClick={() => soma(7)} type='submit' className='bg-numero text-black p-3 rounded-sm'>7</button>
<button onClick={() => soma(8)} type='submit' className='bg-numero text-black p-3 rounded-sm'>8</button>
<button onClick={() => soma(9)} type='submit' className='bg-numero text-black p-3 rounded-sm'>9</button>
<button onClick={() => soma('X')} type='submit' className='bg-operator text-white p-3 rounded-sm'>X</button>

<button onClick={() => soma(4)} type='submit' className='bg-numero text-black p-3 rounded-sm'>4</button>
<button onClick={() => soma(5)} type='submit' className='bg-numero text-black p-3 rounded-sm'>5</button>
<button onClick={() => soma(6)} type='submit' className='bg-numero text-black p-3 rounded-sm'>6</button>
<button onClick={() => soma('-')} type='submit' className='bg-operator text-white p-3 rounded-sm'>-</button>

<button onClick={() => soma(1)} type='submit' className='bg-numero text-black p-3 rounded-sm'>1</button>
<button onClick={() => soma(2)} type='submit' className='bg-numero text-black p-3 rounded-sm'>2</button>
<button onClick={() => soma(3)} type='submit' className='bg-numero text-black p-3 rounded-sm'>3</button>
<button onClick={() => soma('+')} type='submit' className='bg-operator text-white p-3 rounded-sm'>+</button>

<button onClick={() => soma('=')} type='submit' className='col-span-4 bg-equal text-white p-3 rounded-sm'>=</button>

        </div>
        <p className='text-white'>Resultado: {result}</p>
      </div>
    </div>
  );
}

export default App;
