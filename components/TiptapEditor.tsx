// components/TiptapEditor.tsx
'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';

interface TiptapEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Bold,
      Italic,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      BulletList,
      OrderedList,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose focus:outline-none', // Add Tailwind classes for styling
      },
    },
  });

  return (
    <div>
      {/* Toolbar */}
      <div style={{ marginBottom: '10px', display: 'flex', gap: '8px' }}>
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          style={{
            fontWeight: editor?.isActive('bold') ? 'bold' : 'normal',
            padding: '5px 10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Bold
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          style={{
            fontStyle: editor?.isActive('italic') ? 'italic' : 'normal',
            padding: '5px 10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Italic
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          style={{
            textDecoration: editor?.isActive('underline') ? 'underline' : 'none',
            padding: '5px 10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Underline
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
          style={{
            fontWeight: editor?.isActive('heading', { level: 1 }) ? 'bold' : 'normal',
            padding: '5px 10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          H1
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
          style={{
            fontWeight: editor?.isActive('heading', { level: 2 }) ? 'bold' : 'normal',
            padding: '5px 10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          H2
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
          style={{
            fontWeight: editor?.isActive('heading', { level: 3 }) ? 'bold' : 'normal',
            padding: '5px 10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          H3
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          style={{
            fontWeight: editor?.isActive('bulletList') ? 'bold' : 'normal',
            padding: '5px 10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Bullet List
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          style={{
            fontWeight: editor?.isActive('orderedList') ? 'bold' : 'normal',
            padding: '5px 10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Ordered List
        </button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;