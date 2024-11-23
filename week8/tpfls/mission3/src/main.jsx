import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.jsx';

// QueryClient 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 실패 시 1회 재시도
      refetchOnWindowFocus: false, // 창 포커스 시 데이터 다시 가져오지 않음
    },
  },
});

// React 애플리케이션 렌더링
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* QueryClientProvider로 전체 앱 감싸기 */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
