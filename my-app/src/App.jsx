import { useState } from 'react'
import reactLogo from './assets/react.svg'
import PollOption from './PollOption';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [options, setOptions] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Rat', count: 0 },
  ]);

  const handleVote = (index) => {
    const newOptions = [...options];
    newOptions[index].count += 1;
    setOptions(newOptions);
  };

  const getLeader = () => {
    const max = Math.max(...options.map(opt => opt.count));
    const leaders = options.filter(opt => opt.count === max);
    if (max === 0) return 'No votes yet!';
    if (leaders.length > 1) return `It's a tie! (${leaders.map(l => l.option).join(' & ')}) - ${max} vote(s)`;
    return `Current Leader: ${leaders[0].option} with ${max} vote(s)`;
  };

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Vote for the Best Pet</h1>
      {options.map((opt, idx) => (
        <PollOption
          key={idx}
          label={opt.option}
          count={opt.count}
          onVote={() => handleVote(idx)}
        />
      ))}
      <h2 style={{ marginTop: '2rem' }}>{getLeader()}</h2>
    </div>
  );
}

export default App
