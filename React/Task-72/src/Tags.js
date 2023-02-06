import React from "react";

function Tags() {
    const [tags, setTags] = React.useState(['boomdotdev', 'task', 'tags', 'react']);
    //const tags = ['boomdotdev', 'task', 'tags', 'react'];
    return (
        <div className="tags">
            {
                tags.map((tag, index) => (
                    <span className="tag" key={index}>#{tag}</span>
                ))
            }
        </div>
    );
}

export default Tags;
