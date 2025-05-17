import React from 'react';
import { FormItem, Checkbox, Link } from '@vkontakte/vkui';

export interface AcceptFormProps {
    isChecked: boolean;
    onCheckboxChange: (checked: boolean) => void;
}

const AcceptForm: React.FC<AcceptFormProps> = ({ isChecked, onCheckboxChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onCheckboxChange(event.target.checked); // Передаем новое состояние в родительский компонент
    };

    return (
        <>
            <FormItem htmlFor="accept">
                <Checkbox checked={isChecked} onChange={handleChange}>
                    Я даю согласие на обработку персональных данных в соответствии с{' '}
                    <Link href="https://vk.com/privacy">политикой обработки персональных данных</Link>
                </Checkbox>
            </FormItem>
        </>
    );
};

export default AcceptForm;
