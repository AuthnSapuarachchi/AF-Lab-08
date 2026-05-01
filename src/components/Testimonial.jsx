function Testimonial() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', margin: '20px 0' }}>
      <img src="https://via.placeholder.com/50" alt="Customer" style={{ borderRadius: '50%' }} />
      <div>
        <p style={{ fontStyle: 'italic' }}>"This service changed my life! Highly recommended."</p>
        <strong>- Jane Doe</strong>
      </div>
    </div>
  );
}

export default Testimonial;