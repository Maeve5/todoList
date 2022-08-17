import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import View from './View';
import Add from './Add';
import Edit from './Edit';

function Template() {

    const [mode, setMode] = useState('VIEW');
    const [id, setId] = useState(0);
    const [todoLists, setTodoLists] = useState([]);
    // const [content, setContent] = useState(null);
    let content = null;
    
    // 할일 체크 이벤트
    const onCheck = (id, todo, isCheck) => {
        // const newLists = [...todoLists]
        const newLists = JSON.parse(JSON.stringify(todoLists)); // 깊은 복사
        // {id: number; todo: string; isCheck: boolean}[]
        /**
         * {
         *  id: 0,
         *  todo: '할일',
         *  isCheck: false
         * }
         */
        const checkLists = newLists.map((row) => {
            if (row.id === Number(id)) {
                if (todo) {
                    return {
                        ...row,
                        todo: todo
                    };
                }
                else if (isCheck !== undefined) {
                    return {
                        ...row,
                        isCheck: isCheck
                    };
                }
            }
            return row;
        })
        // 삼항연산자
        setTodoLists(checkLists);
    }
    
    const onAdd = (todo) => {
        const newTodo = {
            id: id + 1,
            todo: todo
        }
        const newLists = JSON.parse(JSON.stringify(todoLists));
        newLists.push(newTodo);
        setTodoLists(newLists);
        setId(id + 1);
    }
    
    const onEdit = (id, todo) => {
        const editTodo = {
            id: id,
            todo: todo
        }
        const newLists = JSON.parse(JSON.stringify(todoLists));
        for (let i = 0; i < newLists.length; i++) {
            if (newLists[i].id === id) {
                newLists[i] = editTodo;
                break;
            }
        }
        setTodoLists(newLists);
        alert('수정되었습니다.');
    }
    
    const onDelete = (id) => {
        const newLists = JSON.parse(JSON.stringify(todoLists));
        const changedLists = newLists.filter((row) => {
            return row.id !== id
        })
        setTodoLists(changedLists);
        alert('삭제되었습니다.');
    }

    // mode 값이 변할때마다 실행
    // useEffect(() => {
    //     switch (mode) {
    //         case "VIEW":
    //             setContent(<View
    //                 todoLists={todoLists}
    //                 onCheck={onCheck}
    //             />);
    //             break;
    //         case "ADD":
    //             setContent(
    //                 <Add
    //                     todoLists={todoLists}
    //                     onAdd={onAdd}
    //                 />);
    //             break;
    //         case "EDIT":
    //             setContent(<Edit
    //                 todoLists={todoLists}
    //                 onEdit={onEdit}
    //                 onDelete={onDelete}
    //             />);
    //             break;
    //         default:
    //             setContent(null);
    //             break;
    //     }
    // }, [mode]);

    // 최초 렌더링 시에 한번만 실행
    useEffect(() => {

    }, []);

    // 렌더링 모두 종료 후에 한번만 실행
    useEffect(() => {

    });

    if (mode === 'VIEW') {
        // if (id === 0) {
        //     content = <p>ADD를 눌러 할 일을 추가하세요.</p>;
        // } else {
        //     content = <View
        //         todoLists={todoLists}
        //         onCheck={onCheck}
        //         />;
        // }
        content = <View todoLists={todoLists} onCheck={onCheck}/>;
    }
    else if (mode === 'ADD') {
        content = <Add todoLists = {todoLists} onAdd = {onAdd}/>
    }
    else if (mode === 'EDIT') {
        // if (id === 0) {
        //     content = <p>ADD를 눌러 할 일을 추가하세요.</p>
        // } else {
        //     content = <Edit todoLists={todoLists} onEdit={onEdit} onDelete={onDelete}/>
        // }
        content = <Edit todoLists={todoLists} onEdit={onEdit} onDelete={onDelete}/>
    }

    return (
        <main className='todolistTemplate'>
            <header className='title'>
                To do List
            </header>
            <Nav
                mode={mode}
                className='todoNav'
                onChangeMode={(title) => {
                    setMode(title);
                }}/>
            <section className='formWrap'>
                {content ? content : <div/>}
            </section>
        </main>
    );
};

export default Template;

// 최적화