import isomoricFetch from 'isomorphic-fetch';
import { setToken, getToken } from '../helpers/localStorageCache';

const clientUrl = (uri) => {
  let uriPath = uri;

  const pattern = /^https?:/;
  if (!pattern.test(uri)) {
    uriPath = uri.startsWith('/') ? uri : `/${uri}`;

    // in dev, use the same host but port 4000
    if (process.env.NODE_ENV === 'development') {
      return `http://localhost:4000${uriPath}`;
    }
  }

  return `http://localhost:4000${uriPath}`;
};

const getDefaultOptions = () => ({
  method: 'GET',
  headers: { Accept: 'application/json' },
  credentials: process.env.NODE_ENV === 'development' ? 'include' : 'same-origin'
});

const processResponse = (response) => {
  const json = response.json();

  if (response.status >= 200 && response.status < 300) {
    json.then((data) => {
      if (data && data.token) {
        setToken('token', data.token);
      }
    });

    return json;
  }

  return json.then((err) => {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.responseStatus = response.status;
    error.response = err;
    throw error;
  });
};

const objectToFormData = (obj, form, namespace) => {
  const fd = form || new FormData();
  let formKey;
  const objectKeys = Object.keys(obj);

  objectKeys.forEach((property) => {
    if (namespace) {
      formKey = `${namespace}[${property}]`;
    } else {
      formKey = property;
    }

    const value = obj[property];

    if (Array.isArray(value)) {
      // value is an Array
      arrayToFormData(fd, formKey, value); // eslint-disable-line no-use-before-define
    } else if (typeof value === 'object' && !(value instanceof File)) {
      // value is a nested object
      objectToFormData(value, fd, formKey);
    } else {
      // value is a string or a File object
      fd.append(formKey, value);
    }
  });

  return fd;
};

const arrayToFormData = (fd, formKey, value) => {
  value.forEach((a) => {
    if (typeof a === 'object' && !(a instanceof File)) {
      // elements of array is nested object
      objectToFormData(value, fd, `${formKey}[]`);
    } else {
      // elements of array is string or File object
      fd.append(`${formKey}[]`, a);
    }
  });
};

const buildParam = (params, asJSON = true) => {
  if (asJSON) {
    return JSON.stringify(params);
  }
  return objectToFormData(params);
};

function ajax(uri, options = {}) {
  if (typeof window.fetch !== 'function') {
    window.fetch = isomoricFetch;
  }

  const defaultOptions = getDefaultOptions();

  options.method = options.method || defaultOptions.method; // eslint-disable-line no-param-reassign
  options.headers = options.headers || defaultOptions.headers; // eslint-disable-line no-param-reassign

  const tokenFromStorage = getToken('token');

  if (tokenFromStorage) {
    options.headers.Authorization = `Bearer ${tokenFromStorage}`; // eslint-disable-line no-param-reassign
  }

  if (options.body) {
    if (options.formData) {
      options.body = buildParam(options.body, false); // eslint-disable-line no-param-reassign
    } else {
      options.headers['Content-Type'] = 'application/json; charset=UTF-8'; // eslint-disable-line no-param-reassign
      options.body = buildParam(options.body); // eslint-disable-line no-param-reassign
    }
  }

  return fetch(clientUrl(uri), options).then(processResponse);
}

export default ajax;
