type Option = 'channels' | 'api' | 'docker' | 'server';

type ApiResponseStatus =
  | '200'
  | '201'
  | '204'
  | '400'
  | '401'
  | '403'
  | '404'
  | '500';

export { Option, ApiResponseStatus };
