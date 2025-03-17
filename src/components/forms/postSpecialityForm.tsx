import React from 'react';
import {FormItem, Input} from '@vkontakte/vkui';

export interface PostSpecialityFormProps {
  formData: {
    post: string;
    speciality: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const PostSpecialityForm: React.FC<PostSpecialityFormProps> = ({ formData, onInputChange }) => {
    return (
    <>
        <FormItem htmlFor="post" top="Желаемая должность">
            <Input id="post" value={formData.post} onChange={(e) => onInputChange('post', e.target.value)} name="post" required/>
        </FormItem>

        <FormItem htmlFor="speciality" top="Специализация">
            <Input id="speciality" value={formData.speciality} onChange={(e) => onInputChange('speciality', e.target.value)} name="speciality" required/>
        </FormItem>
    </>
    )
}

export default PostSpecialityForm;