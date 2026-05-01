function Button({ label, size, color }) {
  const styles = {
    padding: size === 'large' ? '15px 30px' : '10px 20px',
    backgroundColor: color || 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return <button style={styles}>{label}</button>;
}

export default Button;