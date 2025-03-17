import React, {useState} from 'react';
import {FormItem, Input, CellButton} from '@vkontakte/vkui';

export interface ExperienceFormProps {
  formData: {
    experience: string;
    graduateWork: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ formData, onInputChange }) => {
  const [showGraduateWork, setShowGraduateWork] = useState(formData.graduateWork !== '');
  const onShowGraduateWork = () => setShowGraduateWork(true);
  const onRemoveGraduateWork = () => setShowGraduateWork(false);

    return (
    <>
        <FormItem htmlFor="experience" top="Опыт работы">
            <Input id="experience" value={formData.experience} onChange={(e) => onInputChange('experience', e.target.value)} name="experience" required/>
        </FormItem>

        {!showGraduateWork ? (
            <CellButton onClick={onShowGraduateWork}> Указать дипломный проект</CellButton>
        ) : (
            <FormItem
            htmlFor="graduate-work"
            removable
            onRemove={onRemoveGraduateWork}
            top="Дипломный проект"
            bottom="Да, дипломный проект тоже является опытом работы"
            >
            <Input 
                id="graduate-work"
                value={formData.graduateWork} 
                onChange={(e) => onInputChange('graduateWork', e.target.value)}
                name="graduateWork"
            />
            </FormItem>
        )}
    </>
    )
}

export default ExperienceForm;