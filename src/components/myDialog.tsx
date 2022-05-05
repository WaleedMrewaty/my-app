import { Dialog, DialogContent } from "@mui/material";
import {characterType} from "../types/characters"
import Character from "./character";

type PropType = {
  character:characterType;
  open:boolean;
  onClose:() => void;
}

const MyDialog = ({character,open,onClose}:PropType) => {
  return (
    <div onClick={onClose}>
    <Dialog 
    style={{cursor:'pointer'}}
      open={open}
      onClose={onClose}
      fullScreen={true}
    >
      <DialogContent>
      <Character character={character}/>
      </DialogContent>
    </Dialog>
  </div>
  )}

export default MyDialog