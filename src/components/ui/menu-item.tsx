import Link from 'next/link';
import React from 'react'

type MenuItemProps = {
  label: string;
  to: string;
}

function MenuItem({to, label}: MenuItemProps) {
  return (
    <li className="p-2 hover:bg-gray-100">
      <Link className="block" href={to}>
        {label}
      </Link>
    </li>
  );
}

export default MenuItem