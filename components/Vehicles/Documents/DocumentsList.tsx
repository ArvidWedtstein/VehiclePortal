"use client";

import dayjs from "dayjs";
import FilePreviewModal from "./FilePreviewModal";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  CloudUploadOutlined,
  FileOpenOutlined,
  Image,
} from "@mui/icons-material";
import { ChangeEvent, FormEvent, useState } from "react";
import { uploadFile } from "@/components/Lookups/Documents/Documents";

interface DocumentsListProps {
  documents: {
    error: string | null;
    path: string | null;
    signedUrl: string;
    id: number;
    created_at: string;
    vehicle_id: number;
    name: string;
    type?: string | undefined;
    service_log_id?: number | undefined;
    file_id: string;
  }[];
}

export default function DocumentsList({ documents }: DocumentsListProps) {
  const [currentDocument, setCurrentDocument] = useState<{
    url: string | null;
    filename: string | null;
  }>({
    url: null,
    filename: null,
  });

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    uploadFile(`TF21166/${file.name}`, file);
  };

  return (
    <>
      <FilePreviewModal
        open={!!currentDocument.url}
        url={currentDocument.url || ""}
        filename={currentDocument.filename || ""}
        onClose={() => setCurrentDocument({ url: null, filename: null })}
      />
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadOutlined />}
      >
        Upload file
        <input
          type="file"
          onChange={(event) =>
            uploadFile(
              `TF21166/${event.target.files?.[0]?.name || ""}`,
              event.target.files?.[0]
            )
          }
          hidden
        />
      </Button>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {documents.map((document) => (
          <ListItem key={document.id}>
            <ListItemButton
              onClick={() =>
                setCurrentDocument({
                  url: document.signedUrl,
                  filename: document.name,
                })
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FileOpenOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={document.name}
                secondary={dayjs(document.created_at).format(
                  "DD.MM.YYYY HH:mm"
                )}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
