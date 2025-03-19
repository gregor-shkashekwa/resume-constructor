import React, { useState, useRef } from 'react';
import { Div, Image, Headline, Text } from '@vkontakte/vkui';

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string | null) => void;
  uploadedImageUrl: string | null;
  setImageWarningModal: (value: boolean) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageUpload,
  uploadedImageUrl,
  setImageWarningModal,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    handleFileSelect(e.dataTransfer.files);
  };

  const handleFileSelect = (files: FileList) => {
    if (files.length > 0) {
      const file = files[0];
      const validTypes = ['image/png', 'image/jpeg'];
      if (!validTypes.includes(file.type)) {
        // If the file type is invalid, trigger the warning modal
        setImageWarningModal(true);
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setImageUrl(imageUrl);
        onImageUpload(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
    onImageUpload(null);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Div
      className="dropzone"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh',
        maxWidth: '100%',
        maxHeight: '100%',
      }}
    >
      {uploadedImageUrl ? (
        <Div
          className="image-container"
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
          }}
        >
          <Image
            src={imageUrl!}
            alt="Uploaded"
            style={{
              width: '280px',
              height: '280px',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
          <Div
            className="remove-btn"
            onClick={handleRemoveImage}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
          >
            <Text>x</Text>
          </Div>
        </Div>
      ) : (
        <Div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
          <Headline weight="2" style={{ marginBottom: 8 }}>
            Добавь фото
          </Headline>
          <Div style={{ color: 'var(--vkui--color_text_secondary)' }}>
            <Text>Перетащи или кликни для загрузки</Text>
          </Div>
        </Div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => handleFileSelect(e.target.files as FileList)}
      />
    </Div>
  );
};

export default ImageUploader;
