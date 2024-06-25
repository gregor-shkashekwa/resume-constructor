import React, { useState, useRef } from 'react';
import {Div, Image, Headline, Text} from '@vkontakte/vkui';

const FileUploader = ({ onImageUpload, uploadedImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.target.classList.add('dragover');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.target.classList.remove('dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.target.classList.remove('dragover');
    handleFileSelect(e.dataTransfer.files);
  };

  const handleFileSelect = (files) => {
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setImageUrl(imageUrl);
        onImageUpload(imageUrl); // Передаем URL изображения в функцию обратного вызова
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
    onImageUpload(null);
  };

  const handleClick = () => {
    fileInputRef.current.click();
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
            src={imageUrl} 
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
        <Div>
          <Headline level="2" weight="bold" style={{ marginBottom: 8 }}>
            Добавь фото
          </Headline>
          <Text level="2" weight="regular" style={{ color: 'var(--vkui--color_text_secondary)' }}>
            Перетащи или кликни для загрузки
          </Text>
        </Div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => handleFileSelect(e.target.files)}
      />
    </Div>
  );
};

export default FileUploader;