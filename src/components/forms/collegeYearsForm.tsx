import React from 'react';
import {FormItem, Input} from '@vkontakte/vkui';

export interface CollegeYearsFormProps {
  formData: {
    firstYear: string;
    lastYear: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const CollegeYearsForm: React.FC<CollegeYearsFormProps> = ({ formData, onInputChange }) => {

    return (
    <>
        <FormItem htmlFor="firstYear" top="Год поступления в колледж">
            <Input type="date" id="firstYear" value={formData.firstYear} onChange={(e) => onInputChange('firstYear', e.target.value)} name="firstYear" required/>
        </FormItem>

        <FormItem htmlFor="lastYear" top="Год выпуска из колледжа">
            <Input id="lastYear" type="date" value={formData.lastYear} onChange={(e) => onInputChange('lastYear', e.target.value)} name="lastYear" required/>
        </FormItem>
    </>
    )
}

export default CollegeYearsForm;