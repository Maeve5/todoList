import React, {useState, useRef} from 'react';
import View from './View';

function Add({todoLists, onAdd}) {

    const [data, setData] = useState('');

    // useRef : 리렌더링하지 않고 컴포넌트의 속성만 조회 & 수정한다.
    const input = useRef(null); // Ref 객체 생성

    const _onChange = (e) => {
        setData(e.target.value)
    }

    return (
    <div>
        {/* 기존 할 일 목록 */}
        <article>
            <View todoLists={todoLists} mode={'ADD'} />
        </article>
        {/* 추가할 할 일 */}
        <article className='todoWrap'>
            <div>
                <input
                    type="text"
                    name="todo"
                    value={data}
                    onChange={_onChange}
                    className='todoInput'
                    placeholder='할 일을 입력하세요.'
                    autoComplete='off'
                    autoFocus
                    ref={input} // 적용하고 싶은 DOM 속성으로 ref 값을 정해준다.
                />
                <input
                    type="button"
                    onClick={() => {
                        onAdd(data);
                        setData('')
                        input.current.focus(); // Ref.current = 선택한 DOM
                    }}
                    value="Add"/>
            </div>
        </article>
    </div>
    );
};

export default Add;