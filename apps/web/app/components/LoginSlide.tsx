'use client';

// 
export default function LoginSlide({ onClose }: { onClose: () => void }) {
    return (
      <div>
        <button onClick={onClose}>닫기</button>
        <ul>
          <li>로그인</li>
          <li>계정 생성하기</li>
        </ul>
      </div>
    );
  }