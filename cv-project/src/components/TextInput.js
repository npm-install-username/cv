import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function TextInput(props) {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
        console.log(editorRef.current.getContent());
        }
        props.updateCVContent(props.content, props.title, value, props.type)
    };
    let initialValue = '123123123'
    const [value, setValue] = useState(initialValue ?? '');
    useEffect(() => setValue(initialValue ?? ''), [initialValue]);
  return (
    <>
    <Editor
      initialValue={initialValue}
      value={value}
      onEditorChange={(newValue, editor) => setValue(newValue)}
      // onChange = {props.updateCVContent}
      init={{
        height: 500,
        resize: false,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
    />
    <button onClick={log}>Log editor content</button>
  </>
  )
}

export default TextInput