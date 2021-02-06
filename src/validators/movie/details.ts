import Joi from "joi";

//Validation schema config
const schemaDetails = Joi.object({
  imdbID: Joi.string().min(5).required(),
}).required();

export default schemaDetails;
