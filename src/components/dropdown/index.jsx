import { createContext, useContext, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PlusIcon, MinusIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';

const DropdownContext = createContext(null);

export function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef(null);

  const updatePosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  const toggle = () => {
    updatePosition();
    setIsOpen(!isOpen);
  };

  const close = () => setIsOpen(false);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close, buttonRef, position }}>
      <div className="relative">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownButton({ children, outline = false, ...props }) {
  const { toggle, buttonRef } = useContext(DropdownContext);
  
  const buttonClasses = `px-4 py-2 rounded-md transition font-bold flex items-center space-x-1 ${
    outline 
      ? 'border border-white hover:bg-white/30 text-white' 
      : 'bg-[#3b142b] hover:bg-white/30 text-white'
  }`;

  return (
    <button
      ref={buttonRef}
      onClick={toggle}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
}

export function DropdownMenu({ children, className = '', width = 'w-64' }) {
  const { isOpen, close, position } = useContext(DropdownContext);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const menuStyle = {
    position: 'absolute',
    top: `${position.top}px`,
    left: `${position.left}px`,
    minWidth: `${position.width}px`,
  };

  return createPortal(
    <div 
      ref={menuRef}
      style={menuStyle}
      className={`z-50 mt-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ${width} ${className}`}
    >
      <div className="py-1">
        {children}
      </div>
    </div>,
    document.body
  );
}

export function DropdownItem({ children, className = '', hasChildren, ...props }) {
  const { close } = useContext(DropdownContext);
  
  const handleClick = (e) => {
    if (props.onClick) {
      props.onClick(e);
    }
    if (!hasChildren) {
      close();
    }
  };

  return (
    <a
      {...props}
      onClick={handleClick}
      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center ${className}`}
    >
      <span>{children}</span>
      {hasChildren && <PlusIcon className="w-4 h-4" />}
    </a>
  );
}

export function DropdownDivider() {
  return <div className="border-t border-gray-100 my-1"></div>;
}

export function DropdownMenuMulti({ items, onClose }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [subIndex, setSubIndex] = useState(null);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div 
      ref={menuRef}
      className="w-64 bg-[#f7f3e8] rounded-lg shadow-lg text-[#3b142b] py-2"
      onClick={(e) => e.stopPropagation()}
    >
      {items.map((item, i) => (
        <div key={i} className="relative">
          {item.type === "link" ? (
            <Link
              to={item.href}
              className="w-full flex justify-between items-center px-4 py-2 hover:bg-[#e7decf] font-medium block"
              onClick={() => onClose?.()}
            >
              {item.label}
            </Link>
          ) : (
            <>
              <button
                onClick={() => {
                  setOpenIndex(openIndex === i ? null : i);
                  setSubIndex(null);
                }}
                className="w-full flex justify-between items-center px-4 py-2 hover:bg-[#e7decf] font-medium"
              >
                {item.label}
                {openIndex === i ? (
                  <MinusIcon className="w-4 h-4" />
                ) : (
                  <PlusIcon className="w-4 h-4" />
                )}
              </button>

              {openIndex === i && item.children && (
                <div className="bg-[#f0ebe2]">
                  {item.children.map((child, j) => (
                    <div key={j} className="relative">
                      <button
                        onClick={() => setSubIndex(subIndex === j ? null : j)}
                        className="w-full flex justify-between items-center px-6 py-2 hover:bg-[#ddd3c2] text-sm"
                      >
                        {child.label || child}
                        {child.children && <ChevronRightIcon className="w-4 h-4" />}
                      </button>

                      {subIndex === j && child.children && (
                        <div className="absolute left-full top-0 ml-1 w-56 bg-[#f7f3e8] rounded-md shadow-lg">
                          {child.children.map((sub, k) => (
                            <Link
                              key={k}
                              to={`/library/${child.label.toLowerCase().replace(/\s+/g, '-')}/${typeof sub === 'string' ? sub.toLowerCase().replace(/\s+/g, '-') : ''}`}
                              className="block px-4 py-2 hover:bg-[#e7decf] text-sm"
                              onClick={() => onClose?.()}
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
  const [openItem, setOpenItem] = useState(null);
  const [subOpenItem, setSubOpenItem] = useState(null);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });
  const itemRefs = useRef([]);

  const handleItemHover = (index, event) => {
    setOpenItem(index);
    if (itemRefs.current[index]) {
      const rect = itemRefs.current[index].getBoundingClientRect();
      setSubmenuPosition({
        top: rect.top - 8, // 8px is the padding of the parent menu
        left: rect.right + 8, // 8px offset from the parent
      });
    }
  };

  const handleSubItemHover = (index) => {
    setSubOpenItem(index);
  };

  return (
    <div className="flex w-full">
      <div className="w-64 bg-[#f7f3e8] text-[#3b142b] rounded-l-lg overflow-hidden">
        {items.map((item, i) => (
          <div key={i} ref={el => itemRefs.current[i] = el}>
            <button
              className={`w-full flex justify-between items-center px-4 py-3 hover:bg-[#e7decf] font-medium text-left ${
                openItem === i ? 'bg-[#e7decf]' : ''
              }`}
              onMouseEnter={(e) => handleItemHover(i, e)}
            >
              <span>{item.icon} {item.label}</span>
              {item.children && <PlusIcon className="w-4 h-4" />}
            </button>
          </div>
        ))}
      </div>

      {openItem !== null && items[openItem]?.children && (
        <div 
          className="w-64 bg-white border-l border-gray-200 rounded-r-lg overflow-hidden"
          style={{
            position: 'absolute',
            left: '100%',
            top: 0,
            minHeight: '100%',
            boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
          }}
        >
          {items[openItem].children.map((child, j) => (
            <div key={j} className="relative group">
              <button
                className={`w-full flex justify-between items-center px-4 py-3 text-sm hover:bg-gray-100 ${
                  subOpenItem === j ? 'bg-gray-50' : ''
                }`}
                onMouseEnter={() => handleSubItemHover(j)}
              >
                <span>{child.label || child}</span>
                {child.children && <PlusIcon className="w-4 h-4" />}
              </button>

              {subOpenItem === j && child.children && (
                <div 
                  className="absolute left-full top-0 w-64 bg-white border-l border-gray-200 rounded-r-lg shadow-lg overflow-hidden"
                  style={{
                    minHeight: '100%',
                  }}
                >
                  {child.children.map((sub, k) => (
                    <a
                      key={k}
                      href={`/library/${child.label.toLowerCase().replace(/\s+/g, '-')}/${typeof sub === 'string' ? sub.toLowerCase().replace(/\s+/g, '-') : ''}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
