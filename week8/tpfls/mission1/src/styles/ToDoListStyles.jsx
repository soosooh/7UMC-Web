const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    color: 'black',
    marginBottom: '30px',
  },
  loadingContainer: {
    marginTop: '20px', // ToDo 생성 버튼 아래 여백
    textAlign: 'center',
  },
  errorContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  errorIcon: {
    fontSize: '50px',
    color: '#ff4d4d',
    marginBottom: '10px',
  },
  errorMessage: {
    fontSize: '16px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', // 입력 필드와 버튼 간의 간격
    marginBottom: '40px', // 버튼과 리스트 간 간격 추가
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    boxSizing: 'border-box',
  },
  addButton: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

export default styles;
