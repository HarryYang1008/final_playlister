import { useContext, useState } from "react";
import AuthContext from '../auth';
import { GlobalStoreContext } from "../store";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import ThumbUpIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDownOutlined";

    
        
          
    

        
    
    @@ -20,8 +17,9 @@ import WorkspaceScreen from "./WorkspaceScreen";
  
import DoubleDownArrowIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import DoubleUpArrowIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import WorkspaceScreen from "./WorkspaceScreen";
/*
    This is a card in our list of top 5 lists. It lets select
    a list for editing and it has controls for changing its 
    name or deleting it.
    
    @author McKilla Gorilla
*/
function ListCard(props) {
    const { idNamePair, selected, resetSongIndex } = props;
    const { store } = useContext(GlobalStoreContext);
    const { auth } = useContext(AuthContext);
    const [editActive, setEditActive] = useState(false);
    const [text, setText] = useState(idNamePair.name);
    const [isExpand, setIsExpand] = useState(false);

    
          
            
    

          
          
            
    

          
    
    @@ -109,7 +107,7 @@ function ListCard(props) {
  
    function handleExpand() {
        store.setCurrentList(idNamePair._id);
        setIsExpand(true);
    }
    function handleUnexpand() {
        setIsExpand(false);
        store.closeCurrentList();
        resetSongIndex();
    }
    function handleDeleteList(event, id) {
        event.stopPropagation();
        let _id = event.target.id;
        _id = ("" + _id).substring("delete-list-".length);
        store.markListForDeletion(id);
    }
    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleToggleEdit(event) {
        event.stopPropagation();
        toggleEdit();
    }
    function toggleEdit() {
        let newActive = !editActive;
        if (newActive) {
            store.setIsListNameEditActive();
        }
        setEditActive(newActive);
    }
    function handleKeyPress(event) {
        if (event.code === "Enter") {
            // let id = event.target.id.substring("list-".length);
            handleBlur();
        }
    }
    // handle blur->
    function handleBlur() {
        store.changeListName(idNamePair._id, text);
        toggleEdit();
    }
    function handleUpdateText(event) {
        setText(event.target.value);
    }
    let selectClass = "unselected-list-card";
    if (selected) {
        selectClass = "selected-list-card";
    }
    let cardStatus = false;
    if (store.isListNameEditActive) {
        cardStatus = true;
    }
    let cardElement;
    if (!store.currentList)
        cardElement = (
            <div
                id={idNamePair._id}
                key={idNamePair._id}
                style={{
                    marginTop: "5px",
                    display: "flex",
                    width: "100%",
                    border: "3px solid lightBlue",
                    borderRadius: "20px",
                    backgroundColor: "lightyellow",
                }}
                onDoubleClick={handleToggleEdit}
            >
                <div id='unexpand-box1'>
                    <div id='list-card-title'>{idNamePair.name}</div>
                    <div style={{ marginLeft: "10px" }}>By: {auth.getUserName()} </div>
                    <div style={{ marginLeft: "10px", marginBottom: "7px" }}>
                        published:
                    </div>

    
          
            
    

          
          
            
    

          
    
    @@ -162,7 +160,7 @@ function ListCard(props) {
  
                </div>
                <div id='unexpand-box2'>
                    <div style={{ marginLeft: "10px" }}>
                        <IconButton>
                            <ThumbUpIcon />
                        </IconButton>
                        10
                        <IconButton>
                            <ThumbDownIcon />
                        </IconButton>
                        10
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            right: "20px",
                            bottom: "1px",
                        }}
                    >
                        <IconButton
                            onClick={
                                // handleLoadList(event, idNamePair._id);
                                handleExpand
                            }
                        >
                            <DoubleDownArrowIcon fontSize='large' />
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    else if (store.currentList._id === idNamePair._id) {
        cardElement = (
            <div
                id={idNamePair._id}
                key={idNamePair._id}
                style={{
                    marginTop: "5px",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    border: "3px solid lightBlue",
                    borderRadius: "20px",
                    backgroundColor: "lightyellow",
                }}
                onDoubleClick={handleToggleEdit}
            >
                <div id='expand-box1'>
                    <div id='list-card-title'>{idNamePair.name}</div>
                    <div style={{ marginLeft: "10px" }}>By: {auth.getUserName()}</div>
                </div>

                <div id='expand-box2'>

    
          
            
    

          
          
            
    

          
    
    function ListCard(props) {
  
                    {/* {console.log(store.currentList)} */}
                    <WorkspaceScreen />
                </div>
                <div id='expand-box3' style={{ position: "relative" }}>
                    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <button style={{ marginLeft: "20px" }} onClick={handleUndo}>Undo</button>
                        <button style={{ marginLeft: "5%" }} onClick={handleRedo}>Redo</button>
                        <button style={{ marginLeft: "5%" }}>Publish</button>
                        <button
                            style={{ marginLeft: "5%" }}
                            onClick={(event) => handleDeleteList(event, idNamePair._id)}
                        >
                            Delete
                        </button>
                        <button style={{ marginLeft: "5%" }}>Duplicate</button>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            right: "20px",
                            bottom: "1px",
                        }}
                    >
                        <IconButton onClick={handleUnexpand}>
                            <DoubleUpArrowIcon fontSize='large' />
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    } else {
        cardElement = (
            <div
                id={idNamePair._id}
                key={idNamePair._id}
                style={{
                    marginTop: "5px",
                    display: "flex",
                    width: "100%",
                    border: "3px solid lightBlue",
                    borderRadius: "20px",
                    backgroundColor: "lightyellow",
                }}
                onDoubleClick={handleToggleEdit}
            >
                <div id='unexpand-box1'>
                    <div id='list-card-title'>{idNamePair.name}</div>
                    <div style={{ marginLeft: "10px" }}>By: {auth.getUserName()}</div>
                    <div style={{ marginLeft: "10px", marginBottom: "7px" }}>
                        published:
                    </div>

    
          
            
    

          
    
    
  
                </div>
                <div id='unexpand-box2'>
                    <div style={{ marginLeft: "10px" }}>
                        <IconButton>
                            <ThumbUpIcon />
                        </IconButton>
                        10
                        <IconButton>
                            <ThumbDownIcon />
                        </IconButton>
                        10
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            right: "20px",
                            bottom: "1px",
                        }}
                    >
                        <IconButton
                            onClick={
                                // handleLoadList(event, idNamePair._id);
                                handleExpand
                            }
                        >
                            <DoubleDownArrowIcon fontSize='large' />
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    }
    if (editActive && !isExpand) {
        cardElement = (
            <TextField
                margin='normal'
                required
                fullWidth
                id={"list-" + idNamePair._id}
                label='Playlist Name'
                name='name'
                autoComplete='Playlist Name'
                className='list-card'
                onKeyPress={handleKeyPress}
                onBlur={handleBlur}
                onChange={handleUpdateText}
                defaultValue={idNamePair.name}
                inputProps={{ style: { fontSize: 48 } }}
                InputLabelProps={{ style: { fontSize: 24 } }}
                autoFocus
            />
        );
    }
    return cardElement;
}
export default ListCard;