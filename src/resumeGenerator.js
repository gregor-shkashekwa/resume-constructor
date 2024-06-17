import React from 'react';
import {Button} from '@vkontakte/vkui';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PDFGenerator = ({ formData, uploadedImageUrl }) => {
  const generatePDF = () => {
    const docDefinition = {
      content: [
        uploadedImageUrl ? { image: uploadedImageUrl, width: 200 } : null,
        { text: `${formData.nickname} ${formData.name} ${formData.patronymic}`, style: 'myname' },
        { text: `Телефон: ${formData.phone}`, style: 'header' },
        { text: `E-mail: ${formData.email}`, style: 'header' },
        formData.telegram ? { text: `Telegram: ${formData.telegram}`, style: 'header' } : null,
        formData.github ? { text: `Github: ${formData.github}`, style: 'header' } : null,
        { text: `Образование: Среднее профессиональное`, style: 'header' },
        { text: `ГБПОУ НСО "Новосибирский колледж электроники и вычислительной техники" (${formData.firstYear}-${formData.lastYear})`, style: 'header' },
        { text: `Факультет: ${formData.purpose}`, style: 'header' },
        { text: `Специализация: ${formData.speciality}`, style: 'header' },
        { text: `Желаемая должность: ${formData.post}`, style: 'header' },
        { text: `Занятость: ${formData.isBusy}`, style: 'header' },
        { text: `График работы: ${formData.workingGraphics}`, style: 'header' },
        { text: `Опыт работы: ${formData.experience}`, style: 'header' },
        formData.graduateWork ? { text: `Дипломный проект: ${formData.graduateWork}`, style: 'header' } : null,
        { text: `Навыки: ${formData.skills}`, style: 'header' },
        formData.about ? { text: `О себе: ${formData.about}`, style: 'header' } : null,
      ],
      styles: {
        header: {
          fontSize: 12,
          margin: [0, 10, 0, 0],
        },
        myname: {
          fontSize: 14,
          margin: [0, 10, 0, 0],
        },
      },
    };

    pdfMake.createPdf(docDefinition).download('resume.pdf');
  };

  return (
    <Button type="submit" size="l" stretched onClick={generatePDF}> Напечатать </Button>
  );
};

export default PDFGenerator;