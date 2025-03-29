'use client';

import React, {useState} from 'react';
import LoginSlide from './LoginSlide';
import Link from 'next/link';

export default function Header() {
  const [loginSlide, setLoginSlide] = useState(false);

  return (
    <header>
      <div className="first-header">
        <div className="main-header-Language-Settings">
          <a href="#">
            <span>
              KR
              <span>한국어</span>
            </span>
          </a>
        </div>
        <div className="main-header-hey-order">
          <span>쉽고 편한 전화 주문, 헤이오더</span>
        </div>
        <div className="main-header-pickers">
          <div className='main-header-zip-code'>
            <span>
            우편 번호 입력
            </span>
          </div>
          <div className='main-header-select-store'>
            <span>
              매장 선택
            </span>
          </div>
        </div>
      </div>
      <div className="second-header">
      <div>
        <Link href={'/'}>Ikea 로고</Link>
      </div>
      <div>
        <input type="text" placeholder="검색" />
      </div>
      <div>
        <button onClick={() => setLoginSlide(true)}>로그인</button>
        <button>위시리스트</button>
        <button>장바구니</button>
      </div>
      <div>
        {loginSlide && (
            <LoginSlide onClose={()=> setLoginSlide(false)} />
        )}
      </div>
      </div>
    </header>
  );
}