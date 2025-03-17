import React from 'react';
import {FormItem, Textarea} from '@vkontakte/vkui';

export interface SkillsFormProps {
  formData: {
    profSkills: string;
    softSkills: string;
    about: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ formData, onInputChange }) => {

    return (
    <>
        <FormItem htmlFor="profSkills" top="Профессиональные навыки">
            <Textarea id="profSkills" value={formData.profSkills} onChange={(e) => onInputChange('profSkills', e.target.value)} name="profSkills" required/>
        </FormItem>

        <FormItem htmlFor="softSkills" top="Мягкие навыки">
            <Textarea id="softSkills" value={formData.softSkills} onChange={(e) => onInputChange('softSkills', e.target.value)} name="softSkills" required/>
        </FormItem>

        <FormItem htmlFor="about" top="О себе">
            <Textarea id="about" value={formData.about} onChange={(e) => onInputChange('about', e.target.value)} name="about"/>
        </FormItem>
    </>
    )
}

export default SkillsForm;