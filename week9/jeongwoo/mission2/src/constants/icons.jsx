import { ShoppingBag } from 'lucide-react';

export const CartIcon = () => {
  return <ShoppingBag size={28} color="white" />;
};

export const ChevronUp = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8L18 14H6L12 8Z" fill="#6D6FFF"/>
    </svg>
  );
};

export const ChevronDown = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 16L6 10H18L12 16Z" fill="#6D6FFF"/>
    </svg>
  );
};