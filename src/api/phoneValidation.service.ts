import api from './xhr';

export type PhoneNumberValidationResponse = {
  valid: boolean;
  number: string;
  local_format: string;
  international_format: string;
  country_prefix: string;
  country_code: string;
  country_name: string;
  location: string;
  carrier: string;
  line_type:
    | 'mobile'
    | 'landline'
    | 'special_services'
    | 'toll_free'
    | 'premium_rate'
    | 'satellite'
    | 'paging';
};

const getNumerifyValidateUrl = (number: string) =>
  `https://apilayer.net/api/validate?access_key=${process.env.REACT_APP_NUMERIFY_API_KEY}&number=${number}`;

export const validatePhoneNumber = async (number: string) => {
  const response = await api.post<PhoneNumberValidationResponse>(getNumerifyValidateUrl(number));
  const responseData = response.data;
  return responseData;
};
