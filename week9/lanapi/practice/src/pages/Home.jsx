import React from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col min-h-[500px]">
        <header className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">My Todo App</h1>
        </header>
        <TodoInput />
        <TodoList />
      </div>
    </main>
  );
}
