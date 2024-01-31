import React, { useState } from 'react';
import { Editor, EditorState, ContentState, RichUtils } from 'draft-js';
import { Editor as WysiwygEditor, getDefaultKeyBinding, KeyBindingUtil } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TermForm = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (newEditorState) => {
      setEditorState(newEditorState);
    };
  
    const handleKeyCommand = (command, editorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
  
      if (newState) {
        onEditorStateChange(newState);
        return 'handled';
      }
  
      return 'not-handled';
    };
  
    const mapKeyToEditorCommand = (e) => {
      if (e.keyCode === 9 /* TAB */) {
        const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
        if (newEditorState !== editorState) {
          onEditorStateChange(newEditorState);
        }
        return;
      }
  
      return getDefaultKeyBinding(e);
    };
  
    const toggleBlockType = (blockType) => {
      onEditorStateChange(RichUtils.toggleBlockType(editorState, blockType));
    };
  
    const toggleInlineStyle = (inlineStyle) => {
      onEditorStateChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };
  
   
  return (
    <div style={{flex:1,flexDirection:'column',width:'100%',display:'flex'}}>
        <text style={{color:'black',fontWeight:'bold',textAlign:'start',alignSelf:'flex-start',fontSize:20,marginTop:20,marginBottom:10,marginLeft:'15%'}}>Description</text>
            <div style={{height:"50%",width:'70%',alignSelf:'center'}}>
            <div>
    
      <WysiwygEditor
        editorState={editorState}
        wrapperClassName="word-editor-wrapper"
        editorClassName="word-editor"
        onEditorStateChange={onEditorStateChange}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={mapKeyToEditorCommand}
      />
    </div>     </div>

    </div>
  );
};

export default TermForm;
