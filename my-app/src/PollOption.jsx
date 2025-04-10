const PollOption = ({ label, count, onVote }) => {
    return (
      <div style={{
        marginBottom: '1rem',
        padding: '1rem',
        backgroundColor: 'beige',
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '200px'
      }}>
        <h3>{label}</h3>
        <p>Votes: {count}</p>
        <button onClick={onVote}>Vote</button>
      </div>
    );
  };
  
  export default PollOption;
  