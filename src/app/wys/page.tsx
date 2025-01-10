"use client"; // Indicate that this component is client-side only

import { EditorState } from "draft-js"; // Import EditorState from draft-js
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false, // Disable server-side rendering for this component
  },
);

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function WysiwygEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Initialize editor state

  const onEditorStateChange = (newState: EditorState) => {
    setEditorState(newState); // Update the editor state
  };

  // Function to handle image upload
  const imageUploadCallback = (file: File) => {
    return new Promise((resolve, _reject) => {
      // Simulate an image upload process
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(file); // Generate a temporary URL for the image
        resolve({ data: { link: imageUrl } }); // Resolve with the image URL
      }, 1000);
    });
  };

  return (
    <div className="editor-container">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar-class"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          image: {
            uploadCallback: imageUploadCallback,
            alt: { present: true, mandatory: false }, // Allow alt text for images
          },
        }}
      />
    </div>
  );
}
