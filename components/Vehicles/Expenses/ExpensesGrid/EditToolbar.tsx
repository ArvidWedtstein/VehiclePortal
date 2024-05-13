import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import {
  GridRowModes,
  GridRowModesModel,
  GridRowsProp,
  GridToolbarContainer,
} from "@mui/x-data-grid";

interface EditToolbarProps {
  setExpenses: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

export default function EditToolbar(props: EditToolbarProps) {
  const { setExpenses, setRowModesModel } = props;

  const handleClick = () => {
    const id = Math.random();
    setExpenses((oldRows) => [
      ...oldRows,
      {
        id,
        currency: "NOK",
        expense_date: new Date(),
        odometer_reading: null,
        notes: null,
        expense_type: null,
        cost: null,
        amount: null,
        unit: "liter",
        isNew: true,
      },
    ]);

    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
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
