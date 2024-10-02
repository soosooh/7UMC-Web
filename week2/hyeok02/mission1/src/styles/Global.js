const globalStyles = `
  .body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }

  .heading {
    font-weight: bold;
    margin-bottom: 20px;
  }

  .paragraph {
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }

  .button:active {
    background-color: #1c6ea4;
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .apply-button {
    background-color: #2ecc71;
  }

  .input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  .card {
    margin-bottom: 10px;
  }
`;

export const injectGlobalStyles = () => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = globalStyles;
  document.head.appendChild(styleElement);
};
