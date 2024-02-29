import Add from "@mui/icons-material/Add";
import Button from "./Button/index.js";
import { useState } from "react";
// import AddDtDialog from "./AddDtDialog";

const AddDtButton = () => {
    const [open, setOpen] = useState(false);
    return (
        
            <Button id="dt-button" onClick={() => setOpen(true)}>
                <Add /> &nbsp;Create Decision Tree
            </Button>
        
    );
};

export default AddDtButton;
