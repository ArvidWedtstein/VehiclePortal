"use client";

import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import Expense from "./Expense";

type ExpenseDialogProps = {
  id?: number | null | undefined;
  open?: boolean;
  onClose?: () => void;
};
export default function ExpenseDialog({
  id,
  open = false,
  onClose,
}: ExpenseDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      {open && (
        <>
          <DialogContent>
            <Expense id={id || undefined} />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={async () => {
                try {
                  // TODO: update
                  onClose?.();
                } catch (error) {
                  alert(error);
                }
              }}
            >
              Save
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
