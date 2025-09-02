import { Children, Fragment, useState, useRef, useEffect } from 'react';

export function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const childrenArray = Children.toArray(children);
  const button = childrenArray.find(child => child.type === DropdownButton);
  const menu = childrenArray.find(child => child.type === DropdownMenu);

  return (
    <div className="relative" ref={dropdownRef}>
      {button && React.cloneElement(button, { 
        onClick: () => setIsOpen(!isOpen),
        isOpen
      })}
      {isOpen && menu}
    </div>
  );
}

export function DropdownButton({ children, className = '', isOpen, ...props }) {
  return (
    <button
      className={`flex items-center ${className}`}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
    </button>
  );
}

export function DropdownMenu({ children, className = '', width = 'w-56', align = 'left' }) {
  const alignment = {
    left: 'left-0',
    right: 'right-0'
  }[align];

  return (
    <div 
      className={`absolute mt-2 ${width} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${alignment} ${className}`}
      role="menu"
      aria-orientation="vertical"
      tabIndex="-1"
    >
      <div className="py-1" role="none">
        {children}
      </div>
    </div>
  );
}

export function DropdownMenuMulti({ items, onClose, onItemClick, className = '' }) {
  const renderItems = (items, level = 0, parentLabel = '') => {
    return items.map((item, index) => {
      const hasChildren = item.children && Array.isArray(item.children);
      const isExpandable = item.type === 'expand' || hasChildren;
      const itemKey = `${parentLabel}-${item.label || 'item'}-${index}`;

      return (
        <div key={itemKey} className="relative">
          <div 
            className={`flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}
            onClick={(e) => {
              e.stopPropagation();
              if (onItemClick) {
                onItemClick({ ...item, parentLabel });
              }
              if (item.href && onClose) {
                onClose();
              }
            }}
          >
            <span>{item.label}</span>
            {isExpandable && (
              <svg 
                className="w-4 h-4 ml-2 -mr-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            )}
          </div>
          
          {isExpandable && item.children && (
            <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-r-md border-l border-gray-200 z-10">
              {renderItems(Array.isArray(item.children) ? 
                item.children.map(child => ({
                  ...(typeof child === 'string' ? { label: child } : child),
                  parentLabel: item.label
                })) : [], 
                level + 1, 
                item.label
              )}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="py-1">
      {renderItems(items)}
    </div>
  );
}
