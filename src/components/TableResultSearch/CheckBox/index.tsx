import React, { useState } from 'react';

const Checkbox = () => {

  return (
    <div className='flex flex-col p-4 border border-slate-300 my-4'>
    <div>filter</div>
      <label>
        <input
          type="checkbox"
        />
        Check me!
      </label>

      <label>
        <input
          type="checkbox"
        />
        Check me!
      </label>

      <label>
        <input
          type="checkbox"
        />
        Check me!
      </label>
      <label>
        <input
          type="checkbox"
        />
        Check me!
      </label>
      <label>
        <input
          type="checkbox"
        />
        Check me!
      </label>
    </div>
  );
};

export default Checkbox;