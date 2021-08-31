import React, { useState } from 'react';

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label[0]);

  return (
    <div className="space-y-16 sm:space-y-24">
      <ul className="inline-flex gap-6">
        {children.map((tab) => {
          const label = tab.props.label[0];

          return (
            <li key={label}>
              <button
                className={` ${
                  label === activeTab ? 'bg-indigo-600 text-white' : 'bg-none text-indigo-600'
                } p-2 transition duration-100 ease-in-out border-2 border-indigo-600 hover:bg-indigo-600 rounded-sm hover:text-white px-3 py-1`}
                onClick={() => setActiveTab(label)}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
      {children.map((item) => {
        if (item.props.label[0] === activeTab) return item.props.children;
      })}
    </div>
  );
}

export default Tabs;
