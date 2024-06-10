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
}

export default function EditToolbar(props: EditToolbarProps) {
  const { setServices, setRowModesModel } = props;

  const handleClick = () => {
    const id = parseInt((Math.random() * 10).toFixed(0));
    setServices((oldRows) => [
      ...oldRows,
      {
        id,
        currency: "NOK",
        type: null,
        service_provider: null,
        odometer_reading: null,
        notes: null,
        service_date: new Date(),
        cost: null,
        isNew: true,
      },
    ]);

    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "type" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<Add />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}
