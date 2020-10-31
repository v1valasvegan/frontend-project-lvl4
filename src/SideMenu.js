import React from 'react';

export default function SideMenu({ channels }) {
  return (
    <aside>
      <ul>
        {channels.map((c) => (
          <li>
            <pre>{JSON.stringify(c, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </aside>
  );
}
