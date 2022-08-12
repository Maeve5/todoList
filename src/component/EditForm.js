import React, {useState} from 'react';

const EditForm = ({row, onEdit, onDelete}) => {
    const {id, todo} = row;
    
    const [data, setData] = useState(todo);

    return (
        <div>
            <input
                type="text"
                id={id}
                name="todo"
                value={data}
                onChange={(e) => {
                    setData(e.target.value)}}
                className='todoInput'
                placeholder='할 일을 입력하세요.'
                autoComplete='off'/>
            <input
                type="button"
                className="V btn"
                id={id}
                onClick={() => {
                    onEdit(id, data);
                }}
                value="V"/>
            <input
                type="button"
                className="X btn"
                id={id}
                onClick={() => {
                    onDelete(id);
                }}
                value="X"/>
        </div>
    );
};
export default EditForm;