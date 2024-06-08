import { Contact } from "../models/contact.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"


//mark spam
const markSpam = asyncHandler(async (req, res) => {

  //getting phone number from req.body
  const { phone } = req.body;

  //if empty phone , throw error
  if (!phone) {
    throw new ApiError(400, "phone is required");

  }
  //finding contact by phone number
  let contact = await Contact.findOne({
    phone
  })

  // if not a contact making a new contact
  if (!contact) {
    contact = new Contact({
      phone
    })
  }

  //increasing spam reports
  contact.spamReports += 1;

  //saving contact
  await contact.save();

  //sending response
  res.status(200)
    .json(new ApiResponse(200, contact, "Contact marked as spam"));

});

//---------------------------------------------------------------------------------------

//SearchContact 
const searchContact = asyncHandler(async (req, res) => {

  //getting search phone from req.query
  const { phone } = req.query;

  //if empty phone, throw error
  if (!phone) {
    throw new ApiError(400, "phone is required");
  }

  //finding contact by phone number
  let contact = await Contact.find({
    phone
  })

  //if contact not found
  if (!contact) {
    throw new ApiError(404, "Contact not found");
  }

  //sending response
  res.status(200)
    .json(new ApiResponse(200, contact, "Contact found"));

});

export {
  markSpam,
  searchContact
}