import Joi from "joi";

const valueA = Joi.number().min(0).max(50);
const valueB = Joi.number().min(50).max(100);

const getCustomSchema = Joi.object({
  valueA: valueA.required(),
  valueB: valueB.required(),
});

export { getCustomSchema };
