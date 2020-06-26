const {Schema, model}=require('mongoose')

const portfolioSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
      timestamps:true
  });

  const Portfolio = model('Portfolio', portfolioSchema);

module.exports=Portfolio  