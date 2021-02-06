import Joi from "joi";

//Validation schema config
const schemaCities = Joi.object({
  query: Joi.string().min(3).max(100).required(),
}).required();

export default schemaCities;
