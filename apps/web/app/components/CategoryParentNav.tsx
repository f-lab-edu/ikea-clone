'use client';

import { useState } from "react";
import CategoryNav from "@/components/categoryAll/ProductCategoryNav";
import DebelopCategoryNav from "app/components/categoryAll/DevelopCategoryNav";

export default function CategoryParentNav() {

    const [categoryMenu, setCategoryMenu] = useState('allProductCate');

    return (
        <div>
            <div>
                <button onClick={() => setCategoryMenu('allProductCate')}>
                    모든 제품
                </button>
                <button onClick={() => setCategoryMenu('placeProductCate')}>
                    공간별 쇼핑하기
                </button>
                <button onClick={() => setCategoryMenu('saleProductCate')}>
                    특별한 가격
                </button>
                <button onClick={() => setCategoryMenu('newsCate')}>
                    새로운 소식
                </button>
                <button onClick={() => setCategoryMenu('ideaCate')}>
                    아이디어
                </button>
                <button onClick={() => setCategoryMenu('planningCheckCate')}>
                    플래닝&체크 서비스
                </button>
                <button onClick={() => setCategoryMenu('seeMoreCate')}>
                    더 보기
                </button>
            </div>
            <div>
                {categoryMenu === 'allProductCate' && <CategoryNav />}
                {categoryMenu === 'placeProductCate' && <DebelopCategoryNav />}
                {categoryMenu === 'saleProductCate' && <DebelopCategoryNav />}
                {categoryMenu === 'newsCate' && <DebelopCategoryNav />}
                {categoryMenu === 'ideaCate' && <DebelopCategoryNav />}
                {categoryMenu === 'planningCheckCate' && <DebelopCategoryNav />}
                {categoryMenu === 'seeMoreCate' && <DebelopCategoryNav />}
            </div>
        </div>
    );
  }