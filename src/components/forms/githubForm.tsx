import React, { useState } from 'react';
import { FormItem, Input, CellButton } from '@vkontakte/vkui';

interface GithubFormProps {
  formData: {
    github: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const GithubForm: React.FC<GithubFormProps> = ({ formData, onInputChange }) => {
  const [showGithub, setShowGithub] = useState(formData.github !== '');
  const onShowGithub = () => { setShowGithub(true); };
  const onRemoveGithub = () => {
    setShowGithub(false);
    onInputChange('github', '');
  };

  return (
    <>
      {!showGithub ? (
        <CellButton onClick={onShowGithub}>Указать Git</CellButton>
      ) : (
        <FormItem
          htmlFor="github"
          removable
          onRemove={onRemoveGithub}
          top="Git"
          bottom="Есть Git? Лиды с удовольствием посмотрят код твоих проектов"
          bottomId="githubDescription"
        >
          <Input 
            id="github" 
            value={formData.github} 
            onChange={(e) => onInputChange('github', e.target.value)} 
            aria-labelledby="githubDescription" 
          />
        </FormItem>
      )}
    </>
  );
};

export default GithubForm;