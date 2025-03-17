import React, {useState} from 'react';
import {FormItem, Input, CellButton} from '@vkontakte/vkui';

export interface AdditionalEducationFormProps {
  formData: {
    additionalEducation: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const AdditionalEducationForm: React.FC<AdditionalEducationFormProps> = ({ formData, onInputChange }) => {
  const [showAdditionalEducation, setShowAdditionalEducation] = useState(formData.additionalEducation !== '');
  const onShowAdditionalEducation = () => setShowAdditionalEducation(true);
  const onRemoveAdditionalEducation = () => setShowAdditionalEducation(false);

    return (
    <>
        {!showAdditionalEducation ? (
        <CellButton onClick={onShowAdditionalEducation}>Указать дополнительное образование</CellButton>
        ) : (
        <FormItem htmlFor="additionalEducation" top="Дополнительное образование" removable onRemove={onRemoveAdditionalEducation} bottom="Дополнительное образование - еще один ключ к успешной карьере">
            <Input id="additionalEducation" value={formData.additionalEducation} onChange={(e) => onInputChange('additionalEducation', e.target.value)} name="additionalEducation"/>
        </FormItem>
        )}
    </>
    )
}

export default AdditionalEducationForm;