'use client';

import { useState } from 'react';
import { Inbox, Loader2 } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';

export default function UploadPage() {
  const [uploading, setUploading] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {"application/pdf": [".pdf"]},
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file.size > 50 * 1024 * 1024) {
        toast.error('File is too large');
        return;
      }
    },
  });

  return (
    <div className='p-2 bg-white rounded-xl'>
      <div
        {...getRootProps({
          className: `border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex items-center justify-center flex-col ${
            isDragActive ? 'border-blue-500' : 'border-gray-300'
          }`,
        })}
      >
        <input {...getInputProps()} />
        {uploading ? (
          <Loader2 className="h-10 w-10 animate-spin text-blue-500" />
        ) : (
          <>
            <Inbox className='w-10 h-10 text-blue-500' />
            <p className="mt-2 text-sm text-gray-600">
              {isDragActive ? "Drop the files here..." : "Drag 'n' drop some files here, or click to select files"}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
