import React, { useState } from 'react';
import { FormLayoutGroup, FormItem, Input, CellButton } from '@vkontakte/vkui';

interface FioFormProps {
  formData: {
    nickname: string;
    name: string;
    patronymic: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const FioForm: React.FC<FioFormProps> = ({ formData, onInputChange }) => {
  const [showPatronymic, setShowPatronymic] = useState(formData.patronymic !== '');

  const onShowPatronymic = () => { setShowPatronymic(true); };

  const onRemovePatronynic = () => {
    setShowPatronymic(false);
    onInputChange('patronymic', '');
  };

  const handleInputChange = (field: string, value: string) => {
    // Фильтруем ввод, оставляя только русские символы (без пробелов)
    const filteredValue = value.replace(/[^а-яА-ЯёЁ]/g, ''); // Удаляем все, кроме русских букв
    onInputChange(field, filteredValue);
  };

  return (
    <>
      <FormLayoutGroup mode="horizontal">
        <FormItem htmlFor="nickname" top="Фамилия">
          <Input 
            id="nickname" 
            value={formData.nickname} 
            onChange={(e) => handleInputChange('nickname', e.target.value)}
            required
          />
        </FormItem>
        <FormItem htmlFor="name" top="Имя">
          <Input 
            id="name" 
            value={formData.name} 
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />
        </FormItem>
      </FormLayoutGroup>

      {!showPatronymic ? (
        <CellButton onClick={onShowPatronymic}>Указать отчество</CellButton>
      ) : (
        <FormItem
          htmlFor="patronymic"
          removable
          onRemove={onRemovePatronynic}
          top="Отчество"
          bottom="Если у тебя нет отчества — удали этот пункт."
          bottomId="patronymicDescription"
        >
          <Input 
            id="patronymic" 
            value={formData.patronymic} 
            onChange={(e) => handleInputChange('patronymic', e.target.value)} 
            aria-labelledby="patronymicDescription" 
          />
        </FormItem>
      )}
    </>
  );
};

export default FioForm;