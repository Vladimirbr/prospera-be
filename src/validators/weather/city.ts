import Joi from "joi";

//Validation schema config
const schemaCity = Joi.object({
  query: Joi.string().required(),
}).required();

export default schemaCity;
