'use client'
import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const Jod = ({ placeholder }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = useMemo(() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Start typings...',
            style: {
                color: "#000", // Set text color to black
              },
		}),
		[placeholder]
	);

	return (
        <>
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
        <p>{content}</p>
        </>
	);
};

export default Jod;