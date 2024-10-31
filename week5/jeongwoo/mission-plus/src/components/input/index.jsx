const Input = ({ label, type, placeholder, error, register, id, ...props }) => {
    return (
        <div>
            {label && (
                <label
                    htmlFor={id}
                    style={{
                        display: 'block',
                        textAlign: 'left',
                        marginBottom: '8px',
                        color: 'white',
                        fontSize: '14px'
                    }}
                >
                    {label}
                </label>
            )}
            {type === 'select' ? (
                <select
                    id={id}
                    style={{
                        width: '100%',
                        height: '52px',
                        padding: '0 16px',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '16px',
                        boxSizing: 'border-box',
                        backgroundColor: 'white'
                    }}
                    {...register(id)}
                    {...props}
                >
                    {props.children}
                </select>
            ) : (
                <input
                    id={id}
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
                    {...props}
                />
            )}
            {error && (
                <p style={{ color: '#f03e3e', textAlign: 'left', marginTop: '8px', fontSize: '14px' }}>
                    {error.message || error}
                </p>
            )}
        </div>
    );
};

export default Input;