import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, CompositeDecorator, convertToRaw, convertFromRaw } from 'draft-js';
import { getSelectionRange, getSelectionCoords } from './utils';
import InlineToolbar from './InlineToolbar';

import './draft-editor.css';


const DraftEditor = ({onHandleChange, readOnly = false, content = {}}) => {
	 
	const [editorState, setEditorState] = useState(	EditorState.createEmpty(decorator) );
	const [inlineToolbar, setInlineToolbar] = useState({ show: false });


	useEffect(() => {
		if(content.hasOwnProperty('blocks')) {

			if(!content.hasOwnProperty('entityMap')) content.entityMap = {};

			setEditorState(EditorState.createWithContent(convertFromRaw(content), decorator));
		}
	}, [content]);



	const onChange = (editorState) => {

		if (!editorState.getSelection().isCollapsed()) {
			const selectionRange = getSelectionRange();
			if (!selectionRange) {
				setInlineToolbar({ show: false });
			  return;
			}
			const selectionCoords = getSelectionCoords(selectionRange);
			setInlineToolbar({
				 show: true,
				 position: {
					top: selectionCoords.offsetTop,
					left: selectionCoords.offsetLeft
				 }
			});
		 } else {
			setInlineToolbar({ show: false });
		 }

		setEditorState(editorState);

		if(onHandleChange) {
			const raw = convertToRaw(editorState.getCurrentContent());
			onHandleChange(raw);
		}
	}

	const toggleInlineStyle = (inlineStyle) => {
		onChange(
		  RichUtils.toggleInlineStyle(editorState,inlineStyle)
		);
	}

	const handleKeyCommand = (command) => {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
		  onChange(newState);
		  return true;
		}
		return false;
	}

	const setLink = () => {
		// получаем ссылку из prompt диалога
		const urlValue = prompt('Введите ссылку', '');

		// получаем текущий contentState
		const contentState = editorState.getCurrentContent();
		// создаем Entity
		const contentStateWithEntity = contentState.createEntity(
		  'LINK',
		  'SEGMENTED',
		  { url: urlValue }
		);
		const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
		// обновляем свойство currentContent у editorState
		const newEditorState = EditorState.set(editorState, {currentContent: contentStateWithEntity});
  
		// с помощью метода toggleLink из RichUtils генерируем новый
		// editorState и обновляем стейт
		setEditorState(
		  	RichUtils.toggleLink(
			 newEditorState,
			 newEditorState.getSelection(),
			 entityKey
		  )
		);
	 }

	return (
		<div id="editor-container" className="c-editor-container js-editor-container" >
			
			{inlineToolbar.show
				? <InlineToolbar
					editorState={editorState}
					onToggle={toggleInlineStyle}
					position={inlineToolbar.position}
					setLink={setLink}
				/>
				: null
			}
			<div className="editor">
				<Editor
					readOnly={readOnly}
					editorState={editorState}
					onToggle={toggleInlineStyle}
					customStyleMap={customStyleMap}
					handleKeyCommand={handleKeyCommand}
					onChange={onChange} />
			</div>
		</div>
	);
}
const customStyleMap = {
	HIGHLIGHT: {
	  backgroundColor: 'rgba(74, 216, 79, 0.53)',
	},
};

const findLinkEntities = (contentBlock, callback, contentState) => {
	contentBlock.findEntityRanges(
	  (character) => {
		 const entityKey = character.getEntity();
		 return (
			entityKey !== null &&
			contentState.getEntity(entityKey).getType() === 'LINK'
		 );
	  },
	  callback
	);
}
const Link = (props) => {
	const { url } = props.contentState.getEntity(props.entityKey).getData();
 
	return (
	  <a href={url} title={url} rel="noopener noreferrer" target="_blank" className="link">
		 {props.children}
	  </a>
	);
};
 const decorator = new CompositeDecorator([
	{
	  strategy: findLinkEntities,
	  component: Link,
	},
]);	
export default DraftEditor;