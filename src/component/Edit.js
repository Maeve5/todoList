import React from 'react';
import EditForm from './EditForm';

const Edit = ({ todoLists, onEdit, onDelete }) => {

    return (
        <article className="todoWrap">
            {todoLists.map((row, idx) => {
                return (
                    <EditForm
                        key={idx}
                        row={row}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                )
            })}
        </article>
    )
};

export default Edit;