'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import { useCallback } from 'react';
import './../../styles/tiptap-styles.css'; // Optional: Add your custom styles

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({
        multicolor: true, // Mendukung berbagai warna highlight
      }),
      Image.configure({
        inline: false,
        allowBase64: false,
      })
    ],
    content: '<p>Welcome to the full-featured Tiptap editor!</p>',
  });

  const addImage = useCallback(() => {
    const url = prompt('Enter the image URL:');
    if (url) {
      const isValidImage = /\.(jpeg|jpg|png|gif|svg)$/i.test(url); // Validasi URL gambar
      if (isValidImage) {
        editor.chain().focus().setImage({ src: url }).run();
      } else {
        alert('Invalid image URL. Please enter a valid image link (jpg, png, gif, svg).');
      }
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="editor-container">
      {/* Toolbar */}
      <div className="toolbar">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'active' : ''}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'active' : ''}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'active' : ''}
        >
          Underline
        </button>
        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHighlight({ color: '#FFD700' }) // Pilih warna highlight
              .run()
          }
          className={editor.isActive('highlight') ? 'active' : ''}
        >
          Highlight
        </button>
        <button onClick={addImage}>Add Image</button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'active' : ''}
        >
          Align Left
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? 'active' : ''}
        >
          Align Center
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'active' : ''}
        >
          Align Right
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={editor.isActive({ textAlign: 'justify' }) ? 'active' : ''}
        >
          Justify
        </button>
        <button onClick={() => editor.chain().focus().clearContent().run()}>
          Clear
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} className="editor-content" />
    </div>
  );
};

export default Tiptap;
