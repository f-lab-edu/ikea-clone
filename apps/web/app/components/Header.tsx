'use client';

import React, {useState} from 'react';
import LoginSlide from './LoginSlide';
import Link from 'next/link';

export default function Header() {
  const [loginSlide, setLoginSlide] = useState(false);

  return (
    <header>
      <div>
        <Link href={'/'}>Ikea 로고</Link>
      </div>
      <div>
        <input type="text" placeholder="검색" />
      </div>
      <div>
        <button onClick={() => setLoginSlide(true)}>로그인</button>
        <button>장바구니</button>
      </div>
      <div>
        {loginSlide && (
            <LoginSlide onClose={()=> setLoginSlide(false)} />
        )}
      </div>
    </header>
  );
}