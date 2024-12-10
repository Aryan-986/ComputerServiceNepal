import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required : true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber:{
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
