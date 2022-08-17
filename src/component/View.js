import React from 'react';

const View = ({todoLists, onCheck}) => {

    const _onCheck = (e) => {
        const check = e.target;
        onCheck(check.id, check.todo, check.checked);
    }
    
    const viewLists = todoLists.map((row, idx) => {
        return (
            <div key={idx}>
                <input
                    id={row.id}
                    type="checkbox"
                    className='checkbox'
                    onChange={_onCheck}
                    checked={row.isCheck
                        ? true
                        : false}/>
                <input
                    style={{
                        textDecoration: row.isCheck
                            ? 'line-through'
                            : 'none',
                        color: row.isCheck
                            ? 'gray'
                            : 'black'
                        }}
                    id={row.id}
                    value={row.todo}
                    className='todoInput'
                    type="text"
                    readOnly="readOnly"/>
            </div>
        );
    })
    
    return (
        <article className='viewWrap'>
            {
                todoLists.length ?
                viewLists :
                <p>ADD를 눌러 할 일을 추가하세요.</p>
            }
        </article>
    );
};

export default React.memo(View);