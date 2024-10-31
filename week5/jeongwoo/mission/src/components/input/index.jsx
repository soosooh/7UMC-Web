const Input = ({ type, placeholder, error, register, id }) => {
  return (
      <div>
          <input
              type={type}
              placeholder={placeholder}
              style={{
                  width: '100%',
                  height: '52px',
                  padding: '0 16px',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
              }}
              {...register(id)}
          />
          {error && (
              <p style={{ color: '#f03e3e', textAlign: 'left', marginTop: '8px', fontSize: '14px' }}>
                  {error.message}
              </p>
          )}
      </div>
  );
};

export default Input;