// 날짜를 포맷팅하는 함수
export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  // 간단한 문자열 잘라내기 (truncate)
  export const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };
  
  // 유니크 ID 생성 (테스트용 또는 임시 ID 생성)
  export const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  
  // ToDo 필터링: 완료된 항목과 미완료 항목 분리
  export const filterTodos = (todos, isCompleted) => {
    return todos.filter((todo) => todo.completed === isCompleted);
  };
  