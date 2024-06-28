import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import {
  GridRowModes,
  GridRowModesModel,
  GridRowsProp,
  GridToolbarContainer,
} from "@mui/x-data-grid";

interface EditToolbarProps {
  setServices: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
  // setServiceLogId: (dlg: { open: boolean; id: null | number }) => void;
  setServiceLogId: (dlg: () => { open: boolean; id: null | number }) => void;
}

export default function EditToolbar(props: EditToolbarProps) {
  const { setServices, setRowModesModel, setServiceLogId } = props;

  const handleClick = () => {
    setServiceLogId(() => ({ open: true, id: null }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<Add />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}
