"use client";

import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import Service from "./Service";

type ServiceDialogProps = {
  id?: number | null | undefined;
  open?: boolean;
  onClose?: () => void;
};
export default function ServiceDialog({
  id,
  open = false,
  onClose,
}: ServiceDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      {open && (
        <>
          <DialogContent>
            <Service id={id || undefined} />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={async () => {
                try {
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
