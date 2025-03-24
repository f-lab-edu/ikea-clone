'use client';

import React, {useState} from 'react';
import LoginSlide from './LoginSlide';

export default function Header() {
  const [loginSlide, setLoginSlide] = useState(false);

  return (
    <header>
      <div>
        <span>IKEA 로고</span>
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