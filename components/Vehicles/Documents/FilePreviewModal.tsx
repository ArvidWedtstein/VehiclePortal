import {
  Close,
  Rotate90DegreesCwOutlined,
  Rotate90DegreesCcwOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import PageLoader from "next/dist/client/page-loader";
import Image from "next/image";
import { useState } from "react";

interface FilePreviewModalProps {
  open?: boolean;
  onClose?: () => void;
  url?: string;
  filename?: string;
}
export default function FilePreviewModal({
  open = false,
  url,
  filename,
  onClose,
}: FilePreviewModalProps) {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  const zoomIn = () => setScale(scale + 0.1);
  const zoomOut = () => setScale(scale - 0.1);
  const rotateLeft = () =>
    setRotation((previousRotation) => previousRotation - 90);
  const rotateRight = () =>
    setRotation((previousRotation) => previousRotation + 90);

  const handleClose = () => {
    onClose?.();

    setRotation(0);
    setScale(1);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      scroll={"paper"}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{filename}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme: Theme) => theme.palette.grey[500],
        }}
      >
        <Close />
      </IconButton>
      <DialogContent
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            transition: "transform 0.3s ease",
            transformOrigin: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {url && <Image src={url || ""} alt={""} width={500} height={400} />}
        </div>
      </DialogContent>
      <AppBar sx={{ position: "relative" }} color="default">
        <Toolbar sx={{ gap: 3 }}>
          <ButtonGroup variant="outlined" aria-label="zoom functions">
            <Button onClick={zoomIn} endIcon={<ZoomInOutlined />}>
              Zoom In
            </Button>
            <Button onClick={zoomOut} endIcon={<ZoomOutOutlined />}>
              Zoom Out
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" aria-label="rotation functions">
            <Button
              onClick={rotateLeft}
              endIcon={<Rotate90DegreesCcwOutlined />}
            >
              Rotate Left
            </Button>
            <Button
              onClick={rotateRight}
              endIcon={<Rotate90DegreesCwOutlined />}
            >
              Rotate Right
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Dialog>
  );
}
