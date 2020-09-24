import { parse } from 'query-string';

export const getSrc = (planId, languageCode = 'en') => {
  const {
    appointmentTypeCouple,
    appointmentTypeIndividual,
    idFieldName,
    owner,
  } = languageCode.includes('es')
    ? // Spanish
      {
        appointmentTypeCouple: 16266387,
        appointmentTypeIndividual: 16738020,
        idFieldName: 'field:8295360',
        owner: 20408348,
      }
    : // English
      {
        appointmentTypeCouple: 16735191,
        appointmentTypeIndividual: 15473079,
        idFieldName: 'field:8295421',
        owner: 20088051,
      };

  const id = {
    4: 894576,
    3: 894575,
    2: 894568,
  }[planId];

  return [
    'https://app.acuityscheduling.com/catalog.php',
    `?owner=${owner}`,
    `&id=${id}`,
    '&action=addCart',
    '&clear=1',
    '&calendarID=4513930',
  ].join('');
};
