import React from 'react';

const View = ({todoLists, onCheck, mode="VIEW"}) => {

    const _onCheck = (e) => {
        const check = e.target;
        onCheck(check.id, check.todo, check.checked);
    }
    
    const viewLists = todoLists.map((row, idx) => {
        return (
            <div key={idx}>
                {mode === "VIEW" && <input
                    id={row.id}
                    type="checkbox"
                    className='checkbox'
                    onChange={_onCheck}
                    checked={row.isCheck
                        ? true
                        : false}/>}
                <input
                    style={{
                        textDecoration: (row.isCheck && mode==="VIEW")
                            ? 'line-through'
                            : 'none',
                        color: (row.isCheck && mode==="VIEW")
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
            {viewLists}
        </article>
    );
};

export default React.memo(View);