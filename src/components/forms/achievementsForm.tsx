import React, {useState} from 'react';
import {FormItem, Textarea, CellButton} from '@vkontakte/vkui';

export interface AchievementsFormProps {
  formData: {
    achievements: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const AchievementsForm: React.FC<AchievementsFormProps> = ({ formData, onInputChange }) => {

  const [showAchievements, setShowAchievements] = useState(formData.achievements !== '');
  const onShowAchievements = () => setShowAchievements(true);
  const onRemoveAchievements = () => setShowAchievements(false);

    return (
    <>
        {!showAchievements ? (
        <CellButton onClick={onShowAchievements}>Указать достижения</CellButton>
        ) : (
        <FormItem htmlFor="achievements" top="Достижения, награды" removable onRemove={onRemoveAchievements} bottom="Общество с большей готовностью принимает в свои ряды тех, кто уже достиг успехов.">
            <Textarea id="achievements" value={formData.achievements} onChange={(e) => onInputChange('achievements', e.target.value)} name="achievements"/>
        </FormItem>
        )}
    </>
    )
}

export default AchievementsForm;