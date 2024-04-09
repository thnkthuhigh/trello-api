/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import joi from "joi";
import {StatusCodes} from "http-status-codes";

const createNew = (req, res) => {
  res.status(StatusCodes.CREATED).json({message: "POST: API tao board"});
};

export const boardValidation = {createNew};
