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

// API key removed for security - service is mocked
// const getNumerifyValidateUrl = (number: string) =>
//   `https://apilayer.net/api/validate?access_key=${process.env.REACT_APP_NUMERIFY_API_KEY}&number=${number}`;

// Network requests disabled - returns mock response
export const validatePhoneNumber = async (
  number: string,
): Promise<PhoneNumberValidationResponse> => {
  return Promise.resolve({
    valid: true,
    number: number,
    local_format: number,
    international_format: number,
    country_prefix: '+1',
    country_code: 'US',
    country_name: 'United States',
    location: 'Unknown',
    carrier: 'Unknown',
    line_type: 'mobile',
  });
};
