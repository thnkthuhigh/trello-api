/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import Joi from "joi";
import {StatusCodes} from "http-status-codes";

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      //custom message
      "any.required": "thieu thong tin title",
      "string.empty": "title empty",
      "string.min": "it hon 3 ki tu",
      "string.max": "nhieu hon 50 ki tu",
      "string.trim": "co khoang trang o dau hoac cuoi",
    }),
    description: Joi.string().required().min(3).max(256).trim().strict(),
  });

  try {
    //abortEarly false tra ve tat ca loi neu co nhieu loi
    await correctCondition.validateAsync(req.body, {abortEarly: false});
    //validate du lieu xong thi chay sang controler
    next();
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message,
    });
  }
};

export const boardValidation = {createNew};
