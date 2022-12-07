import ThumbUpIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDownOutlined";
import DoubleDownArrowIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import DoubleUpArrowIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import WorkspaceScreen from "./WorkspaceScreen";


    function ListCard(props) {
    const { store } = useContext(GlobalStoreContext);
    const [editActive, setEditActive] = useState(false);
    const [text, setText] = useState(idNamePair.name);
    const [isExpand, setIsExpand] = useState(false);

    function handleExpand() {
        store.setCurrentList(idNamePair._id);
        setIsExpand(true);
    }

    function handleUnexpand() {
        setIsExpand(false);
        store.closeCurrentList();
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
    function ListCard(props) {
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
                    <div style={{ marginLeft: "10px" }}>By: </div>
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
                    <div style={{ marginLeft: "10px" }}>By: </div>
                </div>

                <div id='expand-box2'>
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
                    <div style={{ marginLeft: "10px" }}>By: </div>
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

if(editActive && !isExpand) {
    cardElement = (
        <TextField
            margin='normal'></TextField>
}