import Joi from "joi";

//Validation schema config
const schemaInfo = Joi.object({
  lon: Joi.number().min(-180).max(180).required(),
  lat: Joi.number().min(-90).max(90).required(),
}).required();

export default schemaInfo;
