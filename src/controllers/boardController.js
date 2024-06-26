/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import {StatusCodes} from "http-status-codes";

const createNew = async (req, res, next) => {
  try {
    console.log(req.body);
    //abortEarly false tra ve tat ca loi neu co nhieu loi
    res
      .status(StatusCodes.CREATED)
      .json({message: "POST form controller: API tao board"});
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: error.message,
    });
  }
};
export const boardController = {createNew};
