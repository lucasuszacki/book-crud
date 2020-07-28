import axios from "axios";

/**
 * @param {object} headerParams - header params of request
 * Return axios customized instance
 * @returns {axios}
 */
const baseService = (headerParams = {}) => {
  const headers = {
    "Content-Type": "application/json",
    ...headerParams,
  };
  return axios.create({
    baseURL: 'http://localhost:3001/',
    maxRedirects: 0,
    headers,
  });
};

export default baseService;