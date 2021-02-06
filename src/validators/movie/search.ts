import Joi from "joi";

//Validation schema config
const schemaSearch = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  year: Joi.number().integer().min(1895).optional(),
  type: Joi.string().optional(),
  page: Joi.number().integer().min(1).max(100).required(),
}).required();

export default schemaSearch;
